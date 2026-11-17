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
met = False
for line in open(sys.argv[1]):
    try:
        event = json.loads(line)
    except json.JSONDecodeError:
        continue
    content = event.get('message', {}).get('content', [])
    for block in content if isinstance(content, list) else []:
        if block.get('type') == 'tool_use':
            command = str(block.get('input', {}).get('command', ''))
            if 'npm run' in command and 'e2e' in command or 'node --test' in command:
                runs += 1
        if block.get('type') == 'tool_result' and 'strict mode violation' in json.dumps(block.get('content', '')):
            met = True
print('agent ran the specs:', runs)
print('agent met the collision in a run:', 'yes' if met else 'no')
PY
