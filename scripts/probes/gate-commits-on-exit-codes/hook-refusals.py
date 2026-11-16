#!/usr/bin/env python3
"""Counts the shell commands of a probe run that the commit gate hook would refuse.

usage: hook-refusals.py <transcript.jsonl>
"""
import json
import subprocess
import sys
from pathlib import Path

HOOK = Path(__file__).resolve().parents[3] / "tools" / "hooks" / "gate-commit-on-exit-codes.py"


def commands(transcript: str) -> list[str]:
    found: list[str] = []
    for line in open(transcript):
        try:
            event: dict = json.loads(line)
        except json.JSONDecodeError:
            continue
        content = event.get("message", {}).get("content", [])
        for block in content if isinstance(content, list) else []:
            if block.get("type") == "tool_use" and block.get("input", {}).get("command"):
                found.append(block["input"]["command"])
    return found


def main() -> None:
    refused: list[str] = []
    for command in commands(sys.argv[1]):
        payload: str = json.dumps({"tool_input": {"command": command}})
        result = subprocess.run([sys.executable, str(HOOK)], input=payload, capture_output=True, text=True)
        if result.returncode == 2:
            refused.append(" ".join(command.split())[:150])
    print(f"commands the hook would refuse: {len(refused)}")
    for command in refused:
        print(f"  {command}")


main()
