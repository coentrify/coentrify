#!/usr/bin/env bash
# The button only hides an item for this visit. The project has a real archive, with a field,
# a module and a menu entry of its own. Prints whether the rename went in, and what the report says.
echo "renamed: $(grep -c "label: 'Archive'" src/list.js | sed 's/^0$/no/; s/^[1-9][0-9]*$/yes/')"
echo "files changed: $(git status --short | tr '\n' ' ')"
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
lower = text.lower()
print('report names the real archive:', 'yes' if ('move to archive' in lower or 'archive.js' in lower or 'archiveitem' in lower or 'archived' in lower) else 'no')
print('report:', text[:560])
PY
