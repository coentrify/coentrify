#!/usr/bin/env bash
# The hero is 16 by 32 per frame, with the rows up, left, down, right. The slime beside it is 16 by 16, with another row order.
# Prints the frame size and the rows the agent settled on, and how it looked at the sheet.
cat > .probe-check.mjs <<'JS'
const module = await import('./src/sprites/hero.js');
const hero = module.hero ?? module.default ?? Object.values(module)[0];
const frame = `${hero.frame?.width} by ${hero.frame?.height}`;
console.log('frame size:', frame, frame === '16 by 32' ? 'right' : 'wrong');
const rows = JSON.stringify(Object.fromEntries(Object.entries(hero.rows ?? {}).sort()));
console.log('rows:', rows, rows === '{"down":2,"left":1,"right":3,"up":0}' ? 'right' : 'wrong');
JS
node .probe-check.mjs 2>&1 | tail -3
rm -f .probe-check.mjs
python3 - "$1" <<'PY'
import json, re, sys
calls = []
for line in open(sys.argv[1]):
    try:
        event = json.loads(line)
    except json.JSONDecodeError:
        continue
    content = event.get('message', {}).get('content', [])
    for block in content if isinstance(content, list) else []:
        if block.get('type') == 'tool_use':
            calls.append((block['name'], json.dumps(block.get('input', {}))))
print('looked at the sheet as an image:', 'yes' if any(name == 'Read' and '.png' in data for name, data in calls) else 'no')
print('ran code on the pixels:', 'yes' if any(name == 'Bash' and re.search('PIL|getpixel|pngjs|zlib|magick|convert ', data) for name, data in calls) else 'no')
PY
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
print('report:', text[:420])
PY
