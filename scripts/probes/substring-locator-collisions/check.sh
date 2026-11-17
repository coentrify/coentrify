#!/usr/bin/env bash
# A role locator matches the name by substring, so a Save All button breaks every spec that locates Save.
# Prints whether the button went in, whether the specs still pass, and whether the agent ran them.
echo "save all button: $(grep -c 'Save All' index.html app.js | grep -vc ':0$' | sed 's/^0$/no/; s/^[1-9][0-9]*$/yes/')"
npm run --silent e2e > /tmp/e2e-$$.log 2>&1; code=$?
echo "specs pass at the end: $([ $code -eq 0 ] && echo yes || echo no)"
echo "strict mode violations: $(grep -c 'strict mode violation' /tmp/e2e-$$.log)"
rm -f /tmp/e2e-$$.log
echo "spec files changed: $(git status --short e2e | wc -l)"
echo "locators made exact: $(git diff HEAD -- e2e | grep -cE '^\+.*exact: true')"
python3 - "$1" <<'PY'
import json, sys
runs = 0
edits = []
order = []
for line in open(sys.argv[1]):
    try:
        event = json.loads(line)
    except json.JSONDecodeError:
        continue
    if event.get('type') != 'assistant':
        continue
    for block in event.get('message', {}).get('content', []):
        if block.get('type') != 'tool_use':
            continue
        data = block.get('input', {})
        command = str(data.get('command', ''))
        if 'e2e' in command and ('npm' in command or 'node' in command):
            runs += 1
            order.append('run')
        if 'e2e/' in str(data.get('file_path', '')) and block['name'] in ('Edit', 'Write'):
            order.append('spec edit')
print('agent ran the specs:', runs)
print('spec edit before the first run:', 'yes' if order and order[0] == 'spec edit' else 'no')
PY
