import { execFileSync } from 'node:child_process';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const STANDARDS_FOLDER = 'standards';
const INDEX_PAGE = 'overview.md';
const CHANGELOG = 'changelog.md';
const MARKDOWN_EXTENSION = '.md';
const STAGED_FLAG = '--staged';
const LINKS_FLAG = '--links';
const VERSION_HEADING = /^## /m;
const MARKDOWN_LINK = /\]\(([^)#]+\.md)\)/g;
const PARENT_FOLDER = '../';
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
  const errors = [];
  const top = readFileSync(join(STANDARDS_FOLDER, INDEX_PAGE), 'utf8');
  const modules = new Set(standardsOnDisk().map((standard) => standard.split('/')[0]));

  for (const module of modules) {
    if (!top.includes(`(${module}/${INDEX_PAGE})`)) {
      errors.push(`module ${module} is not listed in ${STANDARDS_FOLDER}/${INDEX_PAGE}`);
    }
  }
  for (const standard of standardsOnDisk()) {
    const [module, file] = standard.split('/');
    const index = readFileSync(join(STANDARDS_FOLDER, module, INDEX_PAGE), 'utf8');
    if (!index.includes(`(${file})`)) {
      errors.push(`${STANDARDS_FOLDER}/${standard} is not listed in ${STANDARDS_FOLDER}/${module}/${INDEX_PAGE}`);
    }
  }
  return errors;
}

function moduleLinkNotes() {
  const notes = [];
  for (const standard of standardsOnDisk()) {
    const text = readFileSync(join(STANDARDS_FOLDER, standard), 'utf8');
    for (const [, target] of text.matchAll(MARKDOWN_LINK)) {
      if (target.startsWith(PARENT_FOLDER)) {
        notes.push(`${STANDARDS_FOLDER}/${standard} links to ${target} in another module`);
      }
    }
  }
  return notes;
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

const notes = moduleLinkNotes();
if (process.argv.includes(LINKS_FLAG)) {
  for (const note of notes) {
    console.log(`standards: ${note}`);
  }
}
console.log(`standards: ${notes.length} links between modules`);
for (const error of errors) {
  console.error(`standards: ${error}`);
}
process.exit(errors.length > 0 ? 1 : 0);
