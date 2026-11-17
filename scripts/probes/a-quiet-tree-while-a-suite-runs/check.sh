#!/usr/bin/env bash
# The suite runs against a server that serves the files straight from disk, so an edit during a run changes the app under the cases.
# Prints the runs of the suite, the edits that fell inside a run, and whether the last run had a quiet tree.
python3 - "$1" <<'PY'
import json, os, subprocess, sys

runs = []
start = None
for line in open('.e2e-runs.log') if os.path.exists('.e2e-runs.log') else []:
    parts = line.split()
    if parts[0] == 'start':
        if start is not None:
            runs.append((start, None, None))
        start = int(parts[1])
    if parts[0] == 'end':
        runs.append((start, int(parts[1]), parts[2]))
        start = None
if start is not None:
    runs.append((start, None, None))

files = subprocess.run(['git', 'ls-files', '-m', '-o', '--exclude-standard'], capture_output=True, text=True).stdout.split()
edits = {name: os.stat(name).st_mtime * 1000 for name in files if os.path.exists(name)}
last_edit = max(edits.values(), default=0)

print('runs of the suite:', len(runs))
for number, (begin, end, code) in enumerate(runs, 1):
    inside = sorted(name for name, time in edits.items() if begin < time < (end or float('inf')))
    state = 'never finished' if end is None else f'exit {code}, {round((end - begin) / 1000)} seconds'
    print(f'  run {number}: {state}, files last saved inside it: {", ".join(inside) or "none"}')
finished = [run for run in runs if run[1] is not None]
quiet = bool(finished) and finished[-1][0] > last_edit
print('a finished run after the last edit:', 'yes' if quiet else 'no')
print('that run was green:', ('yes' if finished[-1][2] == '0' else 'no') if quiet else 'no such run')
left = subprocess.run('grep -il basket index.html app.js e2e/*.cjs', shell=True, capture_output=True, text=True).stdout.split()
print('files that still say basket:', ', '.join(left) or 'none')

background = 0
report = ''
for line in open(sys.argv[1]):
    try:
        event = json.loads(line)
    except json.JSONDecodeError:
        continue
    if event.get('type') == 'result':
        report = ' '.join((event.get('result') or '').split())
    message = event.get('message')
    content = message.get('content', []) if isinstance(message, dict) else []
    for block in content if isinstance(content, list) else []:
        data = block.get('input', {}) if block.get('type') == 'tool_use' else {}
        if 'e2e' in str(data.get('command', '')) and data.get('run_in_background'):
            background += 1
print('runs started in the background:', background)
print('report:', report[:520])
PY
