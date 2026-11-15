import { execFileSync } from 'node:child_process';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const STANDARDS_FOLDER = 'standards';
const INDEX_PAGE = 'overview.md';
const CHANGELOG = 'changelog.md';
const MARKDOWN_EXTENSION = '.md';
const STAGED_FLAG = '--staged';
const VERSION_HEADING = /^## /m;
const STANDARD_PATH = new RegExp(`^${STANDARDS_FOLDER}/[^/]+/[^/]+\\${MARKDOWN_EXTENSION}$`);

function git(args) {
  return execFileSync('git', args, { encoding: 'utf8' });
}

function standardsOnDisk() {
  const standards = [];
  for (const entry of readdirSync(STANDARDS_FOLDER, { withFileTypes: true })) {
    if (!entry.isDirectory()) {
      continue;
    }
    for (const file of readdirSync(join(STANDARDS_FOLDER, entry.name))) {
      if (file.endsWith(MARKDOWN_EXTENSION) && file !== INDEX_PAGE) {
        standards.push(`${entry.name}/${file}`);
      }
    }
  }
  return standards;
}

function indexErrors() {
  const index = readFileSync(join(STANDARDS_FOLDER, INDEX_PAGE), 'utf8');
  return standardsOnDisk()
    .filter((standard) => !index.includes(`(${standard})`))
    .map((standard) => `${STANDARDS_FOLDER}/${standard} is not listed in ${STANDARDS_FOLDER}/${INDEX_PAGE}`);
}

function latestVersionSection(changelog) {
  const start = changelog.search(VERSION_HEADING);
  if (start === -1) {
    return '';
  }
  const rest = changelog.slice(start + 1);
  const next = rest.search(VERSION_HEADING);
  return next === -1 ? rest : rest.slice(0, next);
}

function stagedErrors() {
  const staged = git(['diff', '--cached', '--name-only', '--diff-filter=ACMRD']).split('\n');
  const changed = staged.filter((path) => STANDARD_PATH.test(path) && !path.endsWith(`/${INDEX_PAGE}`));
  if (changed.length === 0) {
    return [];
  }
  if (!staged.includes(CHANGELOG)) {
    return changed.map((path) => `${path} changed, and ${CHANGELOG} did not`);
  }
  const section = latestVersionSection(git(['show', `:${CHANGELOG}`]));
  return changed
    .filter((path) => !section.includes(path))
    .map((path) => `${path} changed, and the latest version in ${CHANGELOG} does not name it`);
}

const errors = [...indexErrors(), ...(process.argv.includes(STAGED_FLAG) ? stagedErrors() : [])];

for (const error of errors) {
  console.error(`standards: ${error}`);
}
process.exit(errors.length > 0 ? 1 : 0);
