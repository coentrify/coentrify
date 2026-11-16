#!/usr/bin/env python3
"""Removes every link to a standard the project did not adopt, and keeps the words.

usage: unlink-missing-standards.py [folder]

Run from the root of the project, after the setup and after every update. The
folder defaults to standards. A link is removed when it points at a markdown
file that is not on disk.

- A list item that holds only such a link is removed whole, as in a Related list.
- A pair of brackets that holds only such links is removed whole.
- Every other such link becomes its own words.
- A Related section that ends up empty is removed.
- Code is left alone.
"""
import re
import sys
from pathlib import Path

DEFAULT_FOLDER = "standards"
MARKDOWN_EXTENSION = ".md"
FENCE = "```"
RELATED_HEADING = "## Related"
HEADING = re.compile(r"^#{1,6} ")
ONE_LINK = r"\[[^\]]+\]\([^)\s]+\)"
LINK = re.compile(r"\[([^\]]+)\]\(([^)\s]+)\)")
LINK_ONLY_ITEM = re.compile(rf"^\s*[-*] {ONE_LINK}\s*$")
LINK_ONLY_BRACKETS = re.compile(rf" ?\(({ONE_LINK}(?:(?:, | and ){ONE_LINK})*)\)")
CODE_SPAN = re.compile(r"(`+).+?\1")
PLACEHOLDER = "\x00{}\x00"
PLACEHOLDER_PATTERN = re.compile(r"\x00(\d+)\x00")


def is_missing(target: str, page: Path) -> bool:
    path = target.split("#", 1)[0]
    if not path.endswith(MARKDOWN_EXTENSION) or "://" in path or path.startswith("/"):
        return False
    return not (page.parent / path).is_file()


def unlink_line(line: str, page: Path) -> tuple[str, int]:
    """Returns the line without its missing links, and how many were removed."""
    spans: list[str] = []

    def hide(match: re.Match) -> str:
        spans.append(match.group(0))
        return PLACEHOLDER.format(len(spans) - 1)

    removed = 0
    text = CODE_SPAN.sub(hide, line)

    def brackets(match: re.Match) -> str:
        nonlocal removed
        links = LINK.findall(match.group(1))
        kept = [f"[{words}]({target})" for words, target in links if not is_missing(target, page)]
        removed += len(links) - len(kept)
        if len(kept) == len(links):
            return match.group(0)
        if not kept:
            return ""
        lead = " " if match.group(0).startswith(" ") else ""
        return f"{lead}({', '.join(kept)})"

    def words(match: re.Match) -> str:
        nonlocal removed
        if not is_missing(match.group(2), page):
            return match.group(0)
        removed += 1
        return match.group(1)

    text = LINK_ONLY_BRACKETS.sub(brackets, text)
    text = LINK.sub(words, text)
    return PLACEHOLDER_PATTERN.sub(lambda match: spans[int(match.group(1))], text), removed


def without_empty_related(lines: list[str]) -> list[str]:
    for index, line in enumerate(lines):
        if line.strip() != RELATED_HEADING:
            continue
        end = index + 1
        while end < len(lines) and not HEADING.match(lines[end]):
            end += 1
        if any(text.strip() for text in lines[index + 1:end]):
            continue
        start = index
        while start > 0 and not lines[start - 1].strip():
            start -= 1
        gap = [""] if end < len(lines) and start > 0 else []
        return without_empty_related(lines[:start] + gap + lines[end:])
    return lines


def unlink_page(page: Path) -> int:
    lines = page.read_text().split("\n")
    result: list[str] = []
    removed = 0
    in_code = False
    for line in lines:
        if line.lstrip().startswith(FENCE):
            in_code = not in_code
        if in_code or line.lstrip().startswith(FENCE):
            result.append(line)
            continue
        if LINK_ONLY_ITEM.match(line):
            target = LINK.search(line).group(2)
            if is_missing(target, page):
                removed += 1
                continue
        text, count = unlink_line(line, page)
        removed += count
        result.append(text)
    if removed:
        page.write_text("\n".join(without_empty_related(result)).rstrip("\n") + "\n")
    return removed


def main() -> int:
    folder = Path(sys.argv[1] if len(sys.argv) > 1 else DEFAULT_FOLDER)
    if not folder.is_dir():
        print(f"unlink: the folder {folder} does not exist", file=sys.stderr)
        return 1
    total = 0
    pages = 0
    for page in sorted(folder.rglob(f"*{MARKDOWN_EXTENSION}")):
        removed = unlink_page(page)
        if removed:
            print(f"unlink: {page}: {removed}")
            total += removed
            pages += 1
    print(f"unlink: {total} links removed in {pages} pages")
    return 0


sys.exit(main())
