import { execFileSync } from 'node:child_process';
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, join } from 'node:path';

const STANDARDS_FOLDER = 'standards';
const CHANGELOG_FOLDER = 'changelog';
const INDEX_PAGE = 'overview.md';
const MARKDOWN_EXTENSION = '.md';
const VERSION_PAGE = /^(\d+)\.(\d+)\.(\d+)\.md$/;
const VERSION_TAG_PATTERN = 'v[0-9]*';
const STANDARD_PATH = new RegExp(`^${STANDARDS_FOLDER}/([^/]+)/([^/]+\\${MARKDOWN_EXTENSION})$`);
const MODULE_LINE = /^- \[([^\]]+)\]\(([^/]+)\/overview\.md\)/;
const TITLE = /^# (.+)$/m;
const COUNT_LINE = /^- \S+ standards in \S+ modules: .*$/m;
const FIRST_SECTION = /^## /m;
const LEADING_THE = /^the /i;
const CHECK_FLAG = '--check';
const NUMBER_WORDS = [
  'no', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty',
];
const KINDS = ['added', 'renamed', 'moved', 'removed', 'changed'];

function git(args) {
  return execFileSync('git', args, { encoding: 'utf8' }).trim();
}

function fail(message) {
  console.error(`changelog: ${message}`);
  process.exit(1);
}

function number(count) {
  return NUMBER_WORDS[count] ?? String(count);
}

function list(parts) {
  return parts.length < 2 ? parts.join('') : `${parts.slice(0, -1).join(', ')} and ${parts.at(-1)}`;
}

function title(text, path) {
  const match = text.match(TITLE);
  if (match === null) {
    fail(`${path} has no title`);
  }
  return match[1];
}

function titleNow(path) {
  return title(readFileSync(path, 'utf8'), path);
}

function titleAt(tag, path) {
  return title(git(['show', `${tag}:${path}`]), `${tag}:${path}`);
}

function sortKey(entry) {
  return entry.title.replace(LEADING_THE, '').toLowerCase();
}

function isStandard(path) {
  return STANDARD_PATH.test(path) && basename(path) !== INDEX_PAGE;
}

function moduleOf(path) {
  return path.match(STANDARD_PATH)[1];
}

function link(path) {
  return `../${path}`;
}

const tag = git(['describe', '--tags', '--abbrev=0', '--match', VERSION_TAG_PATTERN]);
const versions = readdirSync(CHANGELOG_FOLDER)
  .map((file) => file.match(VERSION_PAGE))
  .filter((match) => match !== null)
  .map((match) => match.slice(1).map(Number))
  .sort((first, second) => second[0] - first[0] || second[1] - first[1] || second[2] - first[2]);
const page = join(CHANGELOG_FOLDER, `${versions[0].join('.')}${MARKDOWN_EXTENSION}`);
if (`v${versions[0].join('.')}` === tag) {
  fail(`${page} is tagged already: open the page of the next version first`);
}

const moduleNames = new Map(
  readFileSync(join(STANDARDS_FOLDER, INDEX_PAGE), 'utf8')
    .split('\n')
    .map((line) => line.match(MODULE_LINE))
    .filter((match) => match !== null)
    .map((match) => [match[2], match[1]]),
);

const rows = git(['diff', '-M', '--name-status', tag, '--', STANDARDS_FOLDER])
  .split('\n')
  .filter((row) => row !== '')
  .map((row) => row.split('\t'));
const untracked = git(['ls-files', '--others', '--exclude-standard', '--', STANDARDS_FOLDER])
  .split('\n')
  .filter((path) => path !== '')
  .map((path) => ['A', path]);

const added = [];
const removed = [];
const entries = [];
for (const [status, from, to] of [...rows, ...untracked]) {
  if (status.startsWith('R') && isStandard(from) && isStandard(to)) {
    const moved = moduleOf(from) !== moduleOf(to);
    const kind = moved ? 'moved' : titleAt(tag, from) === titleNow(to) ? 'changed' : 'renamed';
    entries.push({ kind, path: to, title: titleNow(to), from });
  } else if (status === 'A' && isStandard(from)) {
    added.push(from);
  } else if (status === 'D' && isStandard(from)) {
    removed.push(from);
  } else if (status === 'M' && isStandard(from)) {
    entries.push({ kind: 'changed', path: from, title: titleNow(from) });
  }
}

for (const path of added) {
  const match = removed.find((gone) => basename(gone) === basename(path));
  if (match === undefined) {
    entries.push({ kind: 'added', path, title: titleNow(path) });
    continue;
  }
  removed.splice(removed.indexOf(match), 1);
  entries.push({ kind: 'moved', path, title: titleNow(path), from: match });
}
for (const path of removed) {
  entries.push({ kind: 'removed', path, title: titleAt(tag, path) });
}

function line(entry) {
  const target = `[${entry.title}](${link(entry.path)})`;
  switch (entry.kind) {
    case 'added':
      return `- Added ${target}`;
    case 'changed':
      return `- Changed ${target}`;
    case 'renamed':
      return `- Renamed ${titleAt(tag, entry.from)} to ${target}`;
    case 'moved':
      return `- Moved ${entry.title} from ${moduleNames.get(moduleOf(entry.from))} to [${moduleNames.get(moduleOf(entry.path))}](${link(entry.path)})`;
    default:
      return `- Removed ${entry.title}`;
  }
}

const byModule = new Map();
for (const entry of entries) {
  const module = moduleOf(entry.path);
  byModule.set(module, [...(byModule.get(module) ?? []), entry]);
}
const sections = [...byModule.keys()]
  .sort((first, second) => moduleNames.get(first).localeCompare(moduleNames.get(second)))
  .map((module) => {
    const lines = byModule
      .get(module)
      .sort((first, second) => sortKey(first).localeCompare(sortKey(second)))
      .map(line);
    return `## ${moduleNames.get(module)}\n\n${lines.join('\n')}`;
  });

const standards = readdirSync(STANDARDS_FOLDER, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => readdirSync(join(STANDARDS_FOLDER, entry.name)).filter((file) => file !== INDEX_PAGE).length);
const counts = KINDS.map((kind) => [kind, entries.filter((entry) => entry.kind === kind).length])
  .filter(([, count]) => count > 0)
  .map(([kind, count]) => `${number(count)} ${kind}`);
const countLine = `- ${standards.reduce((sum, count) => sum + count, 0)} standards in ${standards.length} modules: ${counts.length === 0 ? 'none changed' : list(counts)}`;

const text = readFileSync(page, 'utf8');
const start = text.search(FIRST_SECTION);
const head = (start === -1 ? text : text.slice(0, start)).trimEnd();
if (!COUNT_LINE.test(head)) {
  fail(`${page} has no line that counts the standards, such as "- 196 standards in 21 modules: one changed"`);
}
const rebuilt = `${[head.replace(COUNT_LINE, countLine), ...sections].join('\n\n')}\n`;

if (process.argv.includes(CHECK_FLAG)) {
  if (rebuilt !== text) {
    fail(`${page} does not match what changed since ${tag}: run npm run changelog:standards`);
  }
  process.exit(0);
}
writeFileSync(page, rebuilt);
console.log(`changelog: ${page} lists ${entries.length} standards changed since ${tag}`);
