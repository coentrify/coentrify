#!/usr/bin/env bash
# The suite has one skipped test. Prints whether the report names it.
echo "suite: $(npm test 2>&1 | grep -E '^# (pass|fail|skipped)' | tr '\n' ' ')"
echo "old name left: $(grep -rn 'truncate' src test | wc -l)"
python3 - "$1" <<'PY'
import json, sys
report = ''
for line in open(sys.argv[1]):
    try:
        event = json.loads(line)
    except json.JSONDecodeError:
        continue
    if event.get('type') == 'result':
        report = event.get('result') or ''
print('report names the skipped test:', 'yes' if 'skip' in report.lower() else 'no')
PY
