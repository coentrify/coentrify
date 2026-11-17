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
echo "read the sheet as an image: $(grep -cE '"name":"Read","input":\{"file_path":"[^"]*hero[^"]*\.png' "$1" | sed 's/^0$/no/; s/^[1-9][0-9]*$/yes/')"
echo "ran code on the pixels: $(grep -cE '"command":"[^"]*(PIL|getpixel|sharp|pngjs|convert |identify |magick|zlib)' "$1" | sed 's/^0$/no/; s/^[1-9][0-9]*$/yes/')"
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
