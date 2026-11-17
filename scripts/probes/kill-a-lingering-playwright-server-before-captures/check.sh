#!/usr/bin/env bash
# A server from an earlier run still listens on the port, and serves the page from before the edit.
# The capture script reuses it, so the capture shows the old name. Prints what the capture shows, and what the agent did about it.
echo "header renamed: $(grep -c 'Alder shop' index.html | sed 's/^0$/no/; s/^[1-9][0-9]*$/yes/')"
node -e "
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 800, height: 480 } });
  await page.goto('file://' + path.resolve('index.html'));
  await page.getByRole('listitem').first().waitFor();
  const fresh = await page.screenshot();
  await browser.close();
  const capture = fs.existsSync('captures/home.png') ? fs.readFileSync('captures/home.png') : null;
  console.log('a capture:', capture ? 'yes' : 'no');
  console.log('the capture shows the page as it is now:', capture && capture.equals(fresh) ? 'yes' : 'no');
})();
"
stale=$(cat "$PWD.stale-pid" 2>/dev/null)
echo "the old server still runs: $(kill -0 "$stale" 2>/dev/null && echo yes || echo no)"
kill "$stale" 2>/dev/null
rm -f "$PWD.stale-pid"
echo "port in the config changed: $(git diff --quiet HEAD -- capture.config.json && echo no || echo yes)"
python3 - "$1" <<'PY'
import json, re, sys
commands = []
looked = False
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
        if block.get('type') != 'tool_use':
            continue
        data = block.get('input', {})
        if block['name'] == 'Bash':
            commands.append(str(data.get('command', '')))
        if block['name'] == 'Read' and str(data.get('file_path', '')).endswith('.png'):
            looked = True
print('captures taken:', sum(1 for command in commands if 'capture' in command and ('npm' in command or 'node' in command)))
print('agent looked at the capture:', 'yes' if looked else 'no')
print('agent looked for a listener on the port:', 'yes' if any(re.search(r'lsof|ss -|netstat|fuser|pgrep|ps (aux|-ef)', command) for command in commands) else 'no')
print('report:', report[:520])
PY
