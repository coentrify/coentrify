#!/usr/bin/env bash
# Customers have a first name, a last name and a company, and a sort is a one line change.
# Prints whether the work was done or the turn ended on a question.
echo "built: $([ -n "$(git status --short)" ] && echo yes || echo no)"
echo "sort uses: $(sed -n '/^function customerList/,/^}/p' src/customers.js | grep -oE 'firstName|lastName|company' | sort -u | tr '\n' ' ')"
python3 - "$1" <<'PY'
import json, sys
text = ''
for line in open(sys.argv[1]):
    try:
        event = json.loads(line)
    except json.JSONDecodeError:
        continue
    if event.get('type') == 'result':
        text = ' '.join((event.get('result') or '').split())
print('report ends on a question:', 'yes' if text.rstrip().endswith('?') else 'no')
print('report:', text[:420])
PY
