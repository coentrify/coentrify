#!/usr/bin/env python3
"""PreToolUse hook on Bash: a git commit or tag hangs on the check with &&.

Refuses a command in which a commit or tag follows a ';', or follows a check
piped into grep, tail or head within an && chain. Also refuses a commit that
follows a git add in the same command, since the staged list was not read in
between. Quoted text, heredoc bodies, command substitutions and comments are
ignored, so a message with a ';' in it passes.
"""
import json
import re
import sys

REFUSAL = (
    "Refused: a commit or tag must hang on the check's exit code with &&, nothing in between. "
    "Not after a ';', and not after a check piped into grep, tail or head. "
    "Save the output and the code instead, and read the output: "
    "`check >check.log 2>&1; rc=$?; [ $rc -eq 0 ] && git commit ...` "
    "(Gate Commits on Exit Codes)."
)
STAGING_REFUSAL = (
    "Refused: a commit must not follow a git add in the same command. "
    "Stage in one command, read the staged list with `git diff --cached --name-status`, "
    "and commit in the next (Verify Staging Before Committing)."
)


def skip_double_quoted(text: str, index: int) -> int:
    while index < len(text):
        char: str = text[index]
        if char == "\\":
            index += 2
        elif char == '"':
            return index + 1
        elif text.startswith("$(", index):
            _, index = scan(text, index + 2, True)
        else:
            index += 1
    return index


def scan(text: str, index: int, inside_substitution: bool) -> tuple[str, int]:
    out: list[str] = []
    pending_heredocs: list[str] = []
    while index < len(text):
        char: str = text[index]
        if char == "'":
            end: int = text.find("'", index + 1)
            index = len(text) if end == -1 else end + 1
            out.append("Q")
        elif char == '"':
            index = skip_double_quoted(text, index + 1)
            out.append("Q")
        elif char == "`":
            end = text.find("`", index + 1)
            index = len(text) if end == -1 else end + 1
            out.append("Q")
        elif text.startswith("$(", index):
            _, index = scan(text, index + 2, True)
            out.append("Q")
        elif char == "\\":
            index += 2
        elif char == "#" and (index == 0 or text[index - 1].isspace()):
            end = text.find("\n", index)
            index = len(text) if end == -1 else end
        elif text.startswith("<<", index) and not text.startswith("<<<", index):
            match = re.match(r"<<-?\s*(['\"]?)([A-Za-z_][A-Za-z0-9_]*)\1", text[index:])
            if match:
                pending_heredocs.append(match.group(2))
                index += match.end()
            else:
                out.append(char)
                index += 1
        elif char == "\n" and pending_heredocs:
            index += 1
            for delimiter in pending_heredocs:
                while index < len(text):
                    end = text.find("\n", index)
                    line: str = text[index:] if end == -1 else text[index:end]
                    index = len(text) if end == -1 else end + 1
                    if line.strip() == delimiter:
                        break
            pending_heredocs = []
            out.append("\n")
        elif char == ")" and inside_substitution:
            return "".join(out), index + 1
        else:
            out.append(char)
            index += 1
    return "".join(out), index


COMMIT = re.compile(r"\s*(?:\w+=\S+\s+)*git(?:\s+-[cC]\s+\S+)*\s+(commit|tag)\b(.*)", re.S)
ADD = re.compile(r"\s*(?:\w+=\S+\s+)*git(?:\s+-[cC]\s+\S+)*\s+add\b")
TAG_LISTING = re.compile(r"\s*(?:$|\||-l\b|--list\b|-n\d*\b)")
FILTER_PIPE = re.compile(r"\|\s*(?:grep|egrep|fgrep|tail|head)\b")


def violation(command: str) -> bool:
    stripped, _ = scan(command, 0, False)
    parts: list[str] = re.split(r"(&&|\|\||;|\n)", stripped)
    segments: list[str] = parts[0::2]
    operators: list[str] = parts[1::2]
    for position, segment in enumerate(segments):
        match = COMMIT.match(segment)
        if not match:
            continue
        if match.group(1) == "tag" and TAG_LISTING.match(match.group(2)):
            continue
        if position > 0 and operators[position - 1] == ";":
            return True
        chain: int = position - 1
        while chain >= 0:
            if FILTER_PIPE.search(segments[chain]):
                return True
            if chain == 0 or operators[chain - 1] != "&&":
                break
            chain -= 1
    return False


def staging_violation(command: str) -> bool:
    stripped, _ = scan(command, 0, False)
    added: bool = False
    for segment in re.split(r"&&|\|\||;|\n", stripped):
        if ADD.match(segment):
            added = True
            continue
        match = COMMIT.match(segment)
        if added and match and match.group(1) == "commit":
            return True
    return False


def main() -> None:
    payload = json.load(sys.stdin)
    command: str = (payload.get("tool_input") or {}).get("command") or ""
    refusals: list[str] = []
    if violation(command):
        refusals.append(REFUSAL)
    if staging_violation(command):
        refusals.append(STAGING_REFUSAL)
    if refusals:
        print("\n".join(refusals), file=sys.stderr)
        sys.exit(2)


if __name__ == "__main__":
    main()
