#!/usr/bin/env python3
"""Summarizes the transcript of one probe run: the model, the tool calls in order, and the final report.

usage: read-run.py <transcript.jsonl>
"""
import json
import sys

DETAIL_KEYS = ("command", "file_path", "pattern")
DETAIL_LENGTH = 110
REPORT_LENGTH = 900


def tool_calls(message: dict) -> list[str]:
    calls: list[str] = []
    for block in message.get("content", []):
        if block.get("type") != "tool_use":
            continue
        tool_input: dict = block.get("input", {})
        detail: str = next((str(tool_input[key]) for key in DETAIL_KEYS if tool_input.get(key)), "")
        calls.append(f"{block['name']}: {detail[:DETAIL_LENGTH]}")
    return calls


def main() -> None:
    models: set[str] = set()
    calls: list[str] = []
    report: str = ""
    turns: object = None
    for line in open(sys.argv[1]):
        try:
            event: dict = json.loads(line)
        except json.JSONDecodeError:
            continue
        if event.get("type") == "assistant":
            message: dict = event.get("message", {})
            if message.get("model"):
                models.add(message["model"])
            calls.extend(tool_calls(message))
        if event.get("type") == "result":
            report = event.get("result") or ""
            turns = event.get("num_turns")
    print(f"model: {', '.join(sorted(models))} | turns: {turns}")
    for call in calls:
        print(f"  {call}")
    print(f"  report: {' '.join(report.split())[:REPORT_LENGTH]}")


main()
