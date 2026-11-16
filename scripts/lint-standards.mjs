import { execFileSync } from 'node:child_process';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const STANDARDS_FOLDER = 'standards';
const INDEX_PAGE = 'overview.md';
const CHANGELOG = 'changelog.md';
const MARKDOWN_EXTENSION = '.md';
const STAGED_FLAG = '--staged';
const LINKS_FLAG = '--links';
const WHY_FLAG = '--why';
const VERSION_HEADING = /^## /m;
const MARKDOWN_LINK = /\]\(([^)#]+\.md)\)/g;
const WHY_HEADING = /^## (Why|Purpose)$/m;
const FENCE = '```';
const HEADING = /^#{1,6} (.+)$/;
const CODE_SPAN = /(`+).+?\1/g;
const BLOCK_START = /^\s*(#{1,6} |[-*+] |\d+[.)] |>|\||```|<)|^\s*(-{3,}|\*{3,}|_{3,})\s*$/;
const NO_JOIN_AFTER = /^\s*(#{1,6} |\||```)|^\s*(-{3,}|\*{3,}|_{3,})\s*$/;
const HARD_BREAKS = ['  ', '\\'];
const SECONDARY_WORDS = new Set([
  'a', 'an', 'the', 'and', 'or', 'but', 'nor', 'so', 'yet', 'as', 'at', 'by', 'for', 'from', 'in', 'into',
  'of', 'off', 'on', 'onto', 'out', 'over', 'per', 'to', 'up', 'via', 'vs', 'with',
]);
const LOWERCASE_NAMES = new Set(['npm', 'npx']);
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

function missingWhyNotes() {
  return standardsOnDisk()
    .filter((standard) => !WHY_HEADING.test(readFileSync(join(STANDARDS_FOLDER, standard), 'utf8')))
    .map((standard) => `${STANDARDS_FOLDER}/${standard} has no Why section`);
}

function pagesOnDisk() {
  return readdirSync(STANDARDS_FOLDER, { recursive: true })
    .filter((page) => page.endsWith(MARKDOWN_EXTENSION))
    .map((page) => join(STANDARDS_FOLDER, page))
    .sort();
}

function lowercaseHeadingWord(heading) {
  const text = heading.replace(CODE_SPAN, '');
  if (text === text.toLowerCase()) {
    return undefined;
  }
  return text
    .split(/\s+/)
    .map((token) => token.replace(/^[^A-Za-z]+/, '').replace(/[^A-Za-z']+$/, ''))
    .find(
      (word, index) =>
        /^[a-z]/.test(word) &&
        !/[A-Z./]/.test(word) &&
        !LOWERCASE_NAMES.has(word) &&
        !(index > 0 && SECONDARY_WORDS.has(word)),
    );
}

function formatErrors() {
  const errors = [];
  for (const page of pagesOnDisk()) {
    let inCode = false;
    let previous = '';
    let previousInCode = false;
    readFileSync(page, 'utf8')
      .split('\n')
      .forEach((line, index) => {
        const fence = line.trimStart().startsWith(FENCE);
        if (fence) {
          inCode = !inCode;
        }
        const plain = !inCode && !fence;
        const heading = plain ? line.match(HEADING) : null;
        const word = heading ? lowercaseHeadingWord(heading[1]) : undefined;
        if (word) {
          errors.push(`${page}:${index + 1} the heading word "${word}" is not in Title Case`);
        }
        const wrapped =
          plain &&
          !previousInCode &&
          line.trim() !== '' &&
          previous.trim() !== '' &&
          !BLOCK_START.test(line) &&
          !NO_JOIN_AFTER.test(previous) &&
          !HARD_BREAKS.some((ending) => previous.endsWith(ending));
        if (wrapped) {
          errors.push(`${page}:${index + 1} is a wrapped line, and a paragraph or a list item is one line`);
        }
        previous = line;
        previousInCode = inCode || fence;
      });
  }
  return errors;
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

function stagedPaths(filter) {
  return git(['diff', '--cached', '--name-only', `--diff-filter=${filter}`])
    .split('\n')
    .filter((path) => STANDARD_PATH.test(path) && !path.endsWith(`/${INDEX_PAGE}`));
}

function stagedErrors() {
  const changed = stagedPaths('ACMR');
  const removed = stagedPaths('D');
  if (changed.length === 0 && removed.length === 0) {
    return [];
  }
  const staged = git(['diff', '--cached', '--name-only']).split('\n');
  if (!staged.includes(CHANGELOG)) {
    return [...changed, ...removed].map((path) => `${path} changed, and ${CHANGELOG} did not`);
  }
  const section = latestVersionSection(git(['show', `:${CHANGELOG}`]));
  return changed
    .filter((path) => !section.includes(path))
    .map((path) => `${path} changed, and the latest version in ${CHANGELOG} does not name it`);
}

const errors = [
  ...indexErrors(),
  ...formatErrors(),
  ...(process.argv.includes(STAGED_FLAG) ? stagedErrors() : []),
];

const notes = moduleLinkNotes();
if (process.argv.includes(LINKS_FLAG)) {
  for (const note of notes) {
    console.log(`standards: ${note}`);
  }
}
console.log(`standards: ${notes.length} links between modules`);
const whyNotes = missingWhyNotes();
if (process.argv.includes(WHY_FLAG)) {
  for (const note of whyNotes) {
    console.log(`standards: ${note}`);
  }
}
console.log(`standards: ${whyNotes.length} without a Why section`);
for (const error of errors) {
  console.error(`standards: ${error}`);
}
process.exit(errors.length > 0 ? 1 : 0);
