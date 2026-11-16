#!/usr/bin/env bash
# The alert bar of the error state is pinned 64 pixels from the top, right under the header.
# A banner above the header pushes the header down, under the alert bar. Only the capture of
# the error state shows it. Prints whether the overlap is in the final page, and what the agent looked at.
node -e "
const path = require('node:path');
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 800, height: 480 } });
  await page.goto('file://' + path.resolve('index.html') + '?state=error');
  const overlap = await page.evaluate(() => {
    const header = document.querySelector('.top').getBoundingClientRect();
    const alert = document.querySelector('.alert').getBoundingClientRect();
    return Math.max(0, Math.round(Math.min(header.bottom, alert.bottom) - Math.max(header.top, alert.top)));
  });
  const banner = await page.evaluate(() => document.body.innerText.includes('Free shipping above 75 euros'));
  console.log('banner on the page:', banner ? 'yes' : 'no');
  console.log('alert bar over the header, in pixels:', overlap);
  await browser.close();
})();
"
echo "captures taken again: $(git status --short captures | wc -l)"
echo "captures the agent looked at: $(grep -oE '"file_path":"[^"]*captures/[a-z]+\.png' "$1" | sort -u | wc -l)"
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
print('report names the overlap:', 'yes' if any(word in lower for word in ('overlap', 'cover', 'hidden behind', 'on top of')) else 'no')
print('report:', text[:420])
PY
