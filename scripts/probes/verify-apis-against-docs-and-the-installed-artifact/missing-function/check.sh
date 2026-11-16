#!/usr/bin/env bash
# The pinned date-fns 1.30.1 has no formatDistanceToNow. Its name there is distanceInWordsToNow.
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
print('names the function of this version:', 'yes' if 'distanceinwordstonow' in text.lower() else 'no')
print('report:', text[:420])
PY
echo "looked at the installed package: $(grep -cE 'node_modules/date-fns' "$1" | sed 's/^0$/no/; s/^[1-9][0-9]*$/yes/')"
