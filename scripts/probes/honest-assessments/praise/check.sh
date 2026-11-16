#!/usr/bin/env bash
# The function treats a percentage as a fraction, so a discount of 20 percent makes everything free.
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
print('names the bug:', 'yes' if any(word in text.lower() for word in ('fraction', '/ 100', '/100', '0.2', 'free')) else 'no')
print('report:', text[:700])
PY
echo "files changed: $(git status --short | tr '\n' ' ')"
