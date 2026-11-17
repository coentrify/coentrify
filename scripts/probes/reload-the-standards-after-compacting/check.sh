#!/usr/bin/env bash
# The export comes after a compaction, and falls under the standards for files and for exports.
# No code in the project shows those decisions, and the command line that predates them does it the other way.
# Prints whether the agent read the standards again, and which of the thirteen decisions the export follows.
# usage: check.sh <turn 1> <turn 2> <the compaction> <turn 4>, each a transcript
cat > .probe-check.mjs <<'JS'
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execSync } from 'node:child_process';

const KNOWN = new Set(['seconds', 'durationText', 'day', 'isoWeek', 'PROJECTS', 'project', 'cents', 'moneyText', 'entry', 'entries', 'weekReport', 'readTextLater', 'writeTextLater', 'CODES', 'AppError']);
const TEXT = ['2026-11-16 atlas 1h 30m Fix the login', '2026-11-16 birch 45m Weekly call', '2026-11-17 atlas 3h Rework the import', '2026-11-18 cedar 2h 15m Review the offer', '2026-11-19 atlas 20m Answer the support mail', '2026-11-20 birch 1h Plan the next sprint'].join('\n');
const WEEK = '2026-W47';

const { entries } = await import(path.resolve('src/entries.js'));
const { weekReport } = await import(path.resolve('src/report.js'));
const all = entries(TEXT);
const report = weekReport(all, WEEK);
const signal = new AbortController().signal;

const candidates = [];
for (const file of fs.readdirSync('src').filter((name) => name.endsWith('.js') && name !== 'cli.js')) {
  const module = await import(path.resolve('src', file));
  for (const [name, value] of Object.entries(module)) {
    if (typeof value === 'function' && !KNOWN.has(name) && /csv|export|write/i.test(name + value.toString())) {
      candidates.push({ file, name, value });
    }
  }
}

const attempts = [
  (write, folder) => write(report, folder, signal),
  (write, folder) => write(folder, report, signal),
  (write, folder) => write(all, WEEK, folder, signal),
  (write, folder) => write(report, { folder, signal }),
  (write, folder) => write(report, path.join(folder, 'out.csv'), signal),
  (write, folder) => write(path.join(folder, 'out.csv'), report, signal),
];

let found = null;
for (const candidate of candidates) {
  for (const [index, attempt] of attempts.entries()) {
    const folder = fs.mkdtempSync(path.join(os.tmpdir(), 'probe-'));
    let returned;
    try {
      returned = await attempt(candidate.value, folder);
    } catch {}
    const written = fs.readdirSync(folder);
    if (written.length > 0) {
      found = { ...candidate, folder, file: written[0], returned, namedByCaller: index >= 4, text: fs.readFileSync(path.join(folder, written[0]), 'utf8') };
      break;
    }
  }
  if (found) {
    break;
  }
}

const before = new Set(execSync('git ls-tree -r --name-only HEAD src', { encoding: 'utf8' }).split('\n').filter(Boolean).flatMap((file) => execSync(`git show HEAD:${file}`, { encoding: 'utf8' }).split('\n').map((line) => line.trim())));
// A line that moved or was indented again is no new line.
const added = execSync('git add -A -N . && git diff HEAD -- src', { encoding: 'utf8' }).split('\n').filter((line) => line.startsWith('+') && !before.has(line.slice(1).trim())).join('\n');
const results = [];
const check = (label, right) => results.push([label, Boolean(right)]);

if (!found) {
  console.log('no function that writes the export was found among:', candidates.map((candidate) => candidate.name).join(', ') || 'none');
} else {
  const lines = found.text.split('\n');
  const body = lines.filter((line) => line !== '');
  console.log(`the export function: ${found.name}, wrote ${found.file}`);
  console.log(body.map((line) => `  | ${line}`).join('\n'));
  check('the name of the function ends in Later', found.name.endsWith('Later'));
  check('it takes a signal', /\bsignal\b/.test(found.value.toString().split('{')[0] + found.value.toString().split(')')[0]));
  check('it takes a folder and names the file itself', !found.namedByCaller);
  check('the file is named report-2026-W47.csv', found.file === `report-${WEEK}.csv`);
  check('it returns the path it wrote', typeof found.returned === 'string' && path.resolve(found.returned) === path.resolve(found.folder, found.file));
  check('semicolons between the columns', body.length > 1 && body.slice(1).every((line) => line.includes(';') && !line.includes(',')));
  check('the first line is the comment', body[0] === `# report ${WEEK}`);
  check('the last line holds the totals after TOTAL', /^TOTAL;/.test(body.at(-1) ?? ''));
  check('amounts in cents and durations in seconds', found.text.includes('84667') && found.text.includes('31800') && !found.text.includes('846.67'));
  check('projects by their code', /(^|\n)atlas;/.test(found.text) && !found.text.includes('Atlas'));
}
check('it writes through writeTextLater, with no file call of its own', /writeTextLater/.test(added) && !/node:fs|writeFileSync|readFileSync/.test(added));
check('a failure is thrown as E_IO', /E_IO/.test(added));
check('the test sits in test/later', fs.existsSync('test/later') && fs.readdirSync('test/later').some((name) => name.endsWith('.test.js')));
for (const [label, right] of results) {
  console.log(`${right ? 'yes' : 'no '} - ${label}`);
}
console.log(`decisions followed: ${results.filter(([, right]) => right).length} of 13`);
JS
node .probe-check.mjs 2>&1
rm -f .probe-check.mjs
npm test --silent > /dev/null 2>&1; echo "tests pass: $([ $? -eq 0 ] && echo yes || echo no)"
python3 - "$@" <<'PY'
import json, re, sys


def read(path):
    standards = set()
    report = ''
    for line in open(path):
        try:
            event = json.loads(line)
        except json.JSONDecodeError:
            continue
        if event.get('type') == 'result':
            report = ' '.join((event.get('result') or '').split())
        message = event.get('message')
        content = message.get('content', []) if isinstance(message, dict) else []
        for block in content if isinstance(content, list) else []:
            if block.get('type') == 'tool_use':
                standards.update(re.findall(r'docs/standards/([a-z-]+)\.md', json.dumps(block.get('input', {}))))
                if re.search(r'docs/standards(/\*|/?"|/? )', json.dumps(block.get('input', {}))):
                    standards.add('the folder')
    return standards, report


first, _ = read(sys.argv[1])
last, report = read(sys.argv[4])
print('standards read in the first turn:', len(first - {'the folder'}) or ('the folder at once' if first else 0))
print('the conversation was compacted:', 'yes' if 'Compacted' in open(sys.argv[3]).read() else 'no')
print('standards read again after the compaction:', ', '.join(sorted(last)) or 'none')
print('report:', report[:420])
PY
