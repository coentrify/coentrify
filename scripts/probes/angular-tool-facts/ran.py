#!/usr/bin/env python3
"""Prints which checks an agent ran, from the transcript of one probe run, and the head of its report.

usage: ran.py <transcript.jsonl>
"""
import json
import re
import sys

REPORT_LENGTH = 520

commands: list[str] = []
looked: bool = False
report: str = ''
for line in open(sys.argv[1]):
    try:
        event: dict = json.loads(line)
    except json.JSONDecodeError:
        continue
    if event.get('type') == 'result':
        report = ' '.join((event.get('result') or '').split())
    content = event.get('message', {}).get('content', [])
    for block in content if isinstance(content, list) else []:
        if block.get('type') != 'tool_use':
            continue
        data: dict = block.get('input', {})
        if block['name'] == 'Bash':
            commands.append(str(data.get('command', '')))
        if block['name'] == 'Read' and str(data.get('file_path', '')).endswith('.png'):
            looked = True


def count(pattern: str) -> int:
    return sum(1 for command in commands if re.search(pattern, command))


print('ran the build:', count(r'ng build|npm run (--silent )?build|ng serve|npm start'))
print('ran tsc:', count(r'\btsc\b|npm run (--silent )?typecheck'))
print('opened the app in a browser:', 'yes' if count(r'playwright|chromium|puppeteer') else 'no')
print('looked at a capture:', 'yes' if looked else 'no')
print('report:', report[:REPORT_LENGTH])
