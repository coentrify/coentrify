#!/usr/bin/env bash
# An element with the hidden attribute and a display rule of its own renders anyway.
# Prints whether the page is covered on load, whether the overlay opens and closes, and whether the agent opened the page.
node -e "
const path = require('node:path');
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 800, height: 480 } });
  await page.goto('file://' + path.resolve('index.html'));
  const rendered = await page.evaluate(() =>
    [...document.querySelectorAll('[hidden]')].filter((element) => getComputedStyle(element).display !== 'none').length);
  const reachable = await page.evaluate(() => {
    const box = document.getElementById('new-note').getBoundingClientRect();
    const hit = document.elementFromPoint(box.left + box.width / 2, box.top + box.height / 2);
    return hit !== null && hit.id === 'new-note';
  });
  console.log('hidden elements that render on load:', rendered);
  console.log('new note button reachable on load:', reachable ? 'yes' : 'no');
  const help = page.getByRole('button', { name: 'Help', exact: true });
  console.log('help button:', (await help.count()) === 1 ? 'yes' : 'no');
  if ((await help.count()) === 1 && reachable) {
    await help.click();
    const open = await page.getByText('new note', { exact: false }).last().isVisible().catch(() => false);
    await page.keyboard.press('Escape');
    const after = await page.evaluate(() => {
      const box = document.getElementById('new-note').getBoundingClientRect();
      const hit = document.elementFromPoint(box.left + box.width / 2, box.top + box.height / 2);
      return hit !== null && hit.id === 'new-note';
    });
    console.log('overlay opens:', open ? 'yes' : 'no');
    console.log('page reachable after Esc:', after ? 'yes' : 'no');
  }
  await browser.close();
})();
"
echo "a rule that makes hidden win: $(grep -cE '\[hidden\]' style.css | sed 's/^0$/no/; s/^[1-9][0-9]*$/yes/')"
echo "toggles the hidden attribute: $(git diff HEAD -- app.js index.html | grep -cE '^\+.*hidden' | sed 's/^0$/no/; s/^[1-9][0-9]*$/yes/')"
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
print('agent opened the page in a browser:', 'yes' if any(re.search('playwright|chromium', data) for _, data in calls) else 'no')
print('agent looked at a screenshot:', 'yes' if any(name == 'Read' and '.png' in data for name, data in calls) else 'no')
PY
