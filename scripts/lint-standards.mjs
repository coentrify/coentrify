import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { dirname, join, normalize } from 'node:path';
import { headingSlug } from './heading-slug.mjs';

const STANDARDS_FOLDER = 'standards';
const INDEX_PAGE = 'overview.md';
const CHANGELOG_FOLDER = 'changelog';
const MARKDOWN_EXTENSION = '.md';
const VERSION_PAGE = new RegExp(`^${CHANGELOG_FOLDER}/(\\d+)\\.(\\d+)\\.(\\d+)\\${MARKDOWN_EXTENSION}$`);
const STAGED_FLAG = '--staged';
const LINKS_FLAG = '--links';
const WHY_FLAG = '--why';
const VERSION_TAG_PATTERN = 'v[0-9]*';
const MARKDOWN_LINK = /\]\(([^)#]+\.md)\)/g;
const ANCHOR_LINK = /\]\(([^)#\s]*)#([^)\s]+)\)/g;
const WHY_HEADING = /^## (Why|Purpose)$/m;
const TITLE = /^# (.+)$/m;
const PART_SEPARATOR = ': ';
const RELEVANT_FOR_LINE = 'Relevant for: ';
const SECTION_HEADING = /^## /;
const LIST_ITEM = /^- (.+)$/;
const FENCE = '```';
const HEADING = /^#{1,6} (.+)$/;
const CODE_SPAN = /(`+).+?\1/g;
const BLOCK_START = /^\s*(#{1,6} |[-*+] |\d+[.)] |>|\||```|<|@)|^\s*(-{3,}|\*{3,}|_{3,})\s*$/;
const NO_JOIN_AFTER = /^\s*(#{1,6} |\||```)|^\s*(-{3,}|\*{3,}|_{3,})\s*$/;
const HARD_BREAKS = ['  ', '\\'];
const LOWERCASE_NAMES = new Set(['npm', 'npx']);
const PARENT_FOLDER = '../';
const BUDGET_FLAG = '--budget';
const SEMICOLON = ';';
const CITATION_MARK = '[doi:';
const FILLER = /\b(genuinely|genuine|truly|actually|legitimately|demonstrably|basically|essentially|literally)\b/i;
const BRITISH =
  /\b(catalogues?|catalogued|afterwards|towards|amongst|whilst|colours?|behaviours?|organisations?|organise[ds]?|initialise[ds]?|recognise[ds]?|prioritise[ds]?|optimise[ds]?|customise[ds]?|customisation|analyse[ds]?|centres?|favour(s|ite|ed)?|licence|judgement|travelled|modelled|cancelled|labelled|grey|learnt|spelt)\b/i;
const WHY_SECTION = '## Why';
const PURPOSE_SECTION = '## Purpose';
const RELATED_SECTION = '## Related';
const TEMPLATE_TITLE = / Template$/;
const BUDGET = { standard: 600, template: 1200, hub: 3000 };
const BUDGET_EXCEPTIONS = 'budget-exceptions.json';
const HUBS = new Set([
  'tickets-workflow/work-tracking.md',
  'tickets-workflow/work-workflow.md',
  'gamedev/game-design-laws.md',
  'gamedev/game-flavors.md',
  'gamedev/game-phases.md',
  'simple-workflow/the-simple-workflow.md',
]);
const STANDARD_PATH = new RegExp(`^${STANDARDS_FOLDER}/[^/]+/[^/]+\\${MARKDOWN_EXTENSION}$`);
const OBJECT_ID = /^[0-9a-f]{40,64}$/;
const ENTRY_LINK = new RegExp(
  `^- (?:Added|Changed|Renamed|Moved) .*\\]\\(\\.\\./(${STANDARDS_FOLDER}/[^/)]+/[^/)]+\\${MARKDOWN_EXTENSION})\\)$`,
  'gm',
);

function git(args) {
  return execFileSync('git', args, { encoding: 'utf8' });
}

function gitOrNothing(args) {
  try {
    return execFileSync('git', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
  } catch {
    return undefined;
  }
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

function relevantFor(text) {
  const opening = text.split('\n').slice(1);
  const end = opening.findIndex((line) => SECTION_HEADING.test(line));
  const line = (end === -1 ? opening : opening.slice(0, end)).find((entry) => entry.startsWith(RELEVANT_FOR_LINE));
  if (line === undefined) {
    return [];
  }
  return line
    .slice(RELEVANT_FOR_LINE.length)
    .replace(/\.$/, '')
    .split(/, | and /)
    .map((tag) => tag.trim())
    .filter((tag) => tag !== '');
}

function relevantForErrors() {
  const errors = [];
  for (const standard of standardsOnDisk()) {
    const [module, file] = standard.split('/');
    const tags = relevantFor(readFileSync(join(STANDARDS_FOLDER, standard), 'utf8'));
    if (tags.length === 0) {
      continue;
    }
    const index = readFileSync(join(STANDARDS_FOLDER, module, INDEX_PAGE), 'utf8');
    const line = index.split('\n').find((entry) => entry.includes(`(${file})`)) ?? '';
    for (const tag of tags) {
      if (!line.includes(tag)) {
        errors.push(`${STANDARDS_FOLDER}/${standard} is relevant for "${tag}", and its line in ${STANDARDS_FOLDER}/${module}/${INDEX_PAGE} does not say so`);
      }
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

function isPartPage(standard, titles) {
  const [module] = standard.split('/');
  const title = titles.get(standard);
  const separator = title.indexOf(PART_SEPARATOR);
  if (separator === -1) {
    return false;
  }
  const parentTitle = title.slice(0, separator);
  return [...titles].some(
    ([other, otherTitle]) => other !== standard && other.startsWith(`${module}/`) && otherTitle === parentTitle,
  );
}

function missingWhyNotes() {
  const texts = new Map(
    standardsOnDisk().map((standard) => [standard, readFileSync(join(STANDARDS_FOLDER, standard), 'utf8')]),
  );
  const titles = new Map([...texts].map(([standard, text]) => [standard, text.match(TITLE)?.[1] ?? '']));
  return [...texts]
    .filter(([standard, text]) => !sections(text).some((line) => WHY_HEADING.test(line)) && !isPartPage(standard, titles))
    .map(([standard]) => `${STANDARDS_FOLDER}/${standard} has no Why section`);
}

function markdownPages() {
  return git(['ls-files', '--cached', '--others', '--exclude-standard', '--', `*${MARKDOWN_EXTENSION}`])
    .split('\n')
    .filter((page) => page !== '' && existsSync(page))
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
      (word) =>
        /^[a-z]/.test(word) &&
        !/[A-Z./]/.test(word) &&
        !LOWERCASE_NAMES.has(word),
    );
}

function formatErrors() {
  const errors = [];
  for (const page of markdownPages()) {
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

function proseLines(text) {
  const lines = [];
  let inCode = false;
  text.split('\n').forEach((line, index) => {
    const fence = line.trimStart().startsWith(FENCE);
    if (fence) {
      inCode = !inCode;
    }
    if (!inCode && !fence) {
      lines.push([index + 1, line.replace(CODE_SPAN, '')]);
    }
  });
  return lines;
}

function headingIds(page) {
  const ids = new Set();
  const seen = new Map();
  let inCode = false;
  for (const line of readFileSync(page, 'utf8').split('\n')) {
    if (line.trimStart().startsWith(FENCE)) {
      inCode = !inCode;
    }
    const heading = inCode ? null : line.match(HEADING);
    if (heading !== null) {
      const slug = headingSlug(heading[1]);
      const count = seen.get(slug) ?? 0;
      ids.add(count === 0 ? slug : `${slug}-${count}`);
      seen.set(slug, count + 1);
    }
  }
  return ids;
}

function anchorErrors() {
  const pages = markdownPages();
  const ids = new Map(pages.map((page) => [page, headingIds(page)]));
  const errors = [];
  for (const page of pages) {
    for (const [number, line] of proseLines(readFileSync(page, 'utf8'))) {
      for (const [, target, anchor] of line.matchAll(ANCHOR_LINK)) {
        if (target !== '' && !target.endsWith(MARKDOWN_EXTENSION)) {
          continue;
        }
        const path = target === '' ? page : normalize(join(dirname(page), target));
        if (ids.has(path) && !ids.get(path).has(anchor)) {
          errors.push(`${page}:${number} links #${anchor}, which names no heading of ${path}`);
        }
      }
    }
  }
  return errors;
}

function proseErrors() {
  const errors = [];
  for (const page of markdownPages()) {
    for (const [number, line] of proseLines(readFileSync(page, 'utf8'))) {
      if (line.includes(SEMICOLON)) {
        errors.push(`${page}:${number} holds a semicolon, and two thoughts are two sentences or two bullets`);
      }
      const filler = line.match(FILLER);
      if (filler) {
        errors.push(`${page}:${number} holds the filler word "${filler[1]}"`);
      }
      const british = line.includes(CITATION_MARK) ? null : line.match(BRITISH);
      if (british) {
        errors.push(`${page}:${number} spells "${british[1]}" the British way`);
      }
    }
  }
  return errors;
}

function sections(text) {
  return proseLines(text)
    .map(([, line]) => line)
    .filter((line) => SECTION_HEADING.test(line));
}

function shapeErrors() {
  const errors = [];
  for (const standard of standardsOnDisk()) {
    const page = join(STANDARDS_FOLDER, standard);
    const text = readFileSync(page, 'utf8');
    const heads = sections(text);
    const opening = text.split('\n').slice(1).find((line) => line.trim() !== '') ?? '';
    if (SECTION_HEADING.test(opening)) {
      errors.push(`${page} opens with a section, and a standard opens with its rule`);
    }
    const why = heads.indexOf(WHY_SECTION);
    const first = heads[0] === PURPOSE_SECTION ? 1 : 0;
    if (why > first) {
      errors.push(`${page} has its Why after ${heads[first]}, and the Why comes first`);
    }
    if (heads.at(-1) !== RELATED_SECTION) {
      errors.push(`${page} does not end with a Related section`);
    }
  }
  return errors;
}

function budgetExceptions(module) {
  const path = join(STANDARDS_FOLDER, module, BUDGET_EXCEPTIONS);
  return existsSync(path) ? JSON.parse(readFileSync(path, 'utf8')) : {};
}

function budgetNotes() {
  const notes = [];
  for (const standard of standardsOnDisk()) {
    const [module, file] = standard.split('/');
    const text = readFileSync(join(STANDARDS_FOLDER, standard), 'utf8');
    const body = text.split(`\n${RELATED_SECTION}\n`)[0];
    const words = body.split(/\s+/).filter((word) => word !== '').length;
    const title = text.match(TITLE)?.[1] ?? '';
    const kind = HUBS.has(standard) ? 'hub' : TEMPLATE_TITLE.test(title) ? 'template' : 'standard';
    const accepted = budgetExceptions(module)[file]?.words ?? BUDGET[kind];
    if (words > accepted) {
      const limit = accepted === BUDGET[kind] ? `the ${BUDGET[kind]} of a ${kind}` : `the ${accepted} accepted in ${BUDGET_EXCEPTIONS}`;
      notes.push(`${STANDARDS_FOLDER}/${standard} holds ${words} words, past ${limit}`);
    }
  }
  return notes;
}

function versionPages(paths) {
  return paths
    .map((path) => ({ path, version: path.match(VERSION_PAGE)?.slice(1).map(Number) }))
    .filter((page) => page.version !== undefined)
    .sort(
      (first, second) =>
        second.version[0] - first.version[0] ||
        second.version[1] - first.version[1] ||
        second.version[2] - first.version[2],
    )
    .map((page) => page.path);
}

function changelogErrors() {
  const index = readFileSync(join(CHANGELOG_FOLDER, INDEX_PAGE), 'utf8');
  return versionPages(readdirSync(CHANGELOG_FOLDER).map((file) => `${CHANGELOG_FOLDER}/${file}`))
    .filter((page) => !index.includes(`(${page.slice(CHANGELOG_FOLDER.length + 1)})`))
    .map((page) => `${page} is not listed in ${CHANGELOG_FOLDER}/${INDEX_PAGE}`);
}

function stagedPaths(filter) {
  return git(['diff', '--cached', '--name-only', `--diff-filter=${filter}`])
    .split('\n')
    .filter((path) => STANDARD_PATH.test(path) && !path.endsWith(`/${INDEX_PAGE}`));
}

function releasedTag() {
  return gitOrNothing(['describe', '--tags', '--abbrev=0', '--match', VERSION_TAG_PATTERN]);
}

function versionOf(page) {
  return page.match(VERSION_PAGE).slice(1).join('.');
}

function isTagged(version) {
  return gitOrNothing(['rev-parse', '--verify', '--quiet', `refs/tags/v${version}`]) !== undefined;
}

function blobs(args) {
  return new Map(
    git(args)
      .split('\n')
      .filter((row) => row !== '')
      .map((row) => {
        const [meta, path] = row.split('\t');
        return [path, meta.split(' ').find((field) => OBJECT_ID.test(field))];
      }),
  );
}

function backAtReleasedText(tag) {
  if (tag === undefined) {
    return () => false;
  }
  const released = blobs(['ls-tree', '-r', tag, '--', STANDARDS_FOLDER]);
  const indexed = blobs(['ls-files', '--stage', '--', STANDARDS_FOLDER]);
  return (path) => released.has(path) && released.get(path) === indexed.get(path);
}

function stagedErrors() {
  const staged = git(['diff', '--cached', '--name-only']).split('\n');
  const [latest] = versionPages(git(['ls-files', '--', CHANGELOG_FOLDER]).split('\n'));
  const tag = releasedTag();
  const isBack = backAtReleasedText(tag);
  const touched = stagedPaths('ACMR');
  const changed = touched.filter((path) => !isBack(path));
  const removed = stagedPaths('D');
  if (touched.length === 0 && removed.length === 0 && !staged.includes(latest)) {
    return [];
  }
  if (latest !== undefined && isTagged(versionOf(latest))) {
    return changed.length > 0 || removed.length > 0
      ? [`${latest} is tagged as v${versionOf(latest)} already: open the page of the next version first`]
      : [];
  }
  const named = latest === undefined ? '' : git(['show', `:${latest}`]);
  const unnamed = changed.filter((path) => !named.includes(path));
  const stale = [...named.matchAll(ENTRY_LINK)].map((match) => match[1]).filter(isBack);
  return [
    ...unnamed.map((path) => `${path} changed, and ${latest ?? `a page in ${CHANGELOG_FOLDER}`} does not name it`),
    ...(unnamed.length > 0 && tag === undefined
      ? ['this clone has no version tag, so a standard back at its released text is not recognized: fetch the tags']
      : []),
    ...stale.map((path) => `${latest} names ${path}, which is back at its text in ${tag}: run npm run changelog:standards`),
    ...(staged.some((path) => path.startsWith(`${CHANGELOG_FOLDER}/`)) ? [] : removed).map(
      (path) => `${path} was removed, and no page in ${CHANGELOG_FOLDER} changed`,
    ),
  ];
}

const errors = [
  ...indexErrors(),
  ...changelogErrors(),
  ...formatErrors(),
  ...relevantForErrors(),
  ...proseErrors(),
  ...anchorErrors(),
  ...shapeErrors(),
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
const budget = budgetNotes();
if (process.argv.includes(BUDGET_FLAG)) {
  for (const note of budget) {
    console.log(`standards: ${note}`);
  }
}
console.log(`standards: ${budget.length} over their word budget`);
for (const error of errors) {
  console.error(`standards: ${error}`);
}
process.exit(errors.length > 0 ? 1 : 0);
