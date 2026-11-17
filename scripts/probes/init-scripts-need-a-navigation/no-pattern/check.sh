#!/usr/bin/env bash
# The suite opens the shop before every case, in a support file, and the readme says the helper switches the scenario.
# No spec sets a scenario inside a case, so nothing shows that it only counts after the next navigation.
# Prints whether the new case is there and passes, and whether the agent ran the specs.
echo "a case for the offline scenario: $(grep -c "offline" e2e/shop.e2e.test.cjs | sed 's/^0$/no/; s/^[1-9][0-9]*$/yes/')"
npm run --silent e2e > .probe-e2e.log 2>&1; code=$?
echo "specs pass at the end: $([ $code -eq 0 ] && echo yes || echo no)"
echo "cases: $(grep -E '^# (pass|fail) ' .probe-e2e.log | tr '\n' ' ')"
rm -f .probe-e2e.log
echo "navigates again after the scenario: $(git diff HEAD -- e2e | grep -E '^\+' | grep -cE 'reload\(|goto\(' | sed 's/^0$/no/; s/^[1-9][0-9]*$/yes/')"
echo "files changed: $(git status --short | cut -c4- | tr '\n' ' ')"
python3 - "$1" <<'PY'
import json, sys
runs = 0
failed = False
report = ''
for line in open(sys.argv[1]):
    try:
        event = json.loads(line)
    except json.JSONDecodeError:
        continue
    if event.get('type') == 'result':
        report = ' '.join((event.get('result') or '').split())
    content = event.get('message', {}).get('content', [])
    for block in content if isinstance(content, list) else []:
        if block.get('type') == 'tool_use':
            command = str(block.get('input', {}).get('command', ''))
            if 'npm run' in command and 'e2e' in command or 'node --test' in command:
                runs += 1
        if block.get('type') == 'tool_result' and '# fail 1' in json.dumps(block.get('content', '')):
            failed = True
print('agent ran the specs:', runs)
print('agent met the stale scenario in a run:', 'yes' if failed else 'no')
print('report:', report[:420])
PY
