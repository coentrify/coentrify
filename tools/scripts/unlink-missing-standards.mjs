#!/usr/bin/env node
// Removes every link to a standard the project did not adopt, and keeps the words.
//
// usage: unlink-missing-standards.mjs [folder]
//
// Run from the root of the project, after the setup and after every update. The
// folder defaults to standards. A link is removed when it points at a markdown
// file that is not on disk.
//
// - A list item that holds only such a link is removed whole, as in a Related list.
// - In an overview, a list item that opens with such a link is removed whole.
// - A pair of brackets that holds only such links is removed whole.
// - Every other such link becomes its own words.
// - A Related section that ends up empty is removed.
// - Code is left alone.
//
// Each removed link that pointed at a section is listed at the end: a section often carries a rule the
// page rests on, so the agent offers that standard to the director.
import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { basename, dirname, join } from 'node:path';

const DEFAULT_FOLDER = 'standards';
const MARKDOWN_EXTENSION = '.md';
const FENCE = '```';
const RELATED_HEADING = '## Related';
const HEADING = /^#{1,6} /;
const ONE_LINK = String.raw`\[[^\]]+\]\([^)\s]+\)`;
const LINK = String.raw`\[([^\]]+)\]\(([^)\s]+)\)`;
const LINK_ONLY_ITEM = new RegExp(String.raw`^\s*[-*] ${ONE_LINK}\s*$`);
const LEADING_LINK_ITEM = new RegExp(String.raw`^\s*[-*] ${ONE_LINK}`);
const INDEX_PAGE = 'overview.md';
const LINK_ONLY_BRACKETS = String.raw` ?\((${ONE_LINK}(?:(?:, | and )${ONE_LINK})*)\)`;
const CODE_SPAN = /(`+).+?\1/g;
const PLACEHOLDER_PATTERN = /\x00(\d+)\x00/g;
const TRAILING_NEWLINES = /\n+$/;
const SECTION = '#';
const sections = [];

// Notes a removed link that pointed at a section of its page.
function noteSection(page, words, target) {
  if (target.includes(SECTION)) {
    sections.push(`- ${page}: ${words}, ${target}`);
  }
}

function isFile(path) {
  try {
    return statSync(path).isFile();
  } catch {
    return false;
  }
}

function isMissing(target, page) {
  const path = target.split('#', 1)[0];
  if (!path.endsWith(MARKDOWN_EXTENSION) || path.includes('://') || path.startsWith('/')) {
    return false;
  }
  return !isFile(join(dirname(page), path));
}

// Returns the line without its missing links, and how many were removed.
function unlinkLine(line, page) {
  const spans = [];
  let removed = 0;
  let text = line.replace(CODE_SPAN, (span) => {
    spans.push(span);
    return `\x00${spans.length - 1}\x00`;
  });
  text = text.replace(new RegExp(LINK_ONLY_BRACKETS, 'g'), (whole, inside) => {
    const links = [...inside.matchAll(new RegExp(LINK, 'g'))];
    for (const [, words, target] of links.filter(([, , target]) => isMissing(target, page))) {
      noteSection(page, words, target);
    }
    const kept = links.filter(([, , target]) => !isMissing(target, page)).map(([, words, target]) => `[${words}](${target})`);
    removed += links.length - kept.length;
    if (kept.length === links.length) {
      return whole;
    }
    if (kept.length === 0) {
      return '';
    }
    const lead = whole.startsWith(' ') ? ' ' : '';
    return `${lead}(${kept.join(', ')})`;
  });
  text = text.replace(new RegExp(LINK, 'g'), (whole, words, target) => {
    if (!isMissing(target, page)) {
      return whole;
    }
    removed += 1;
    noteSection(page, words, target);
    return words;
  });
  return [text.replace(PLACEHOLDER_PATTERN, (_, index) => spans[Number(index)]), removed];
}

function withoutEmptyRelated(lines) {
  for (let index = 0; index < lines.length; index += 1) {
    if (lines[index].trim() !== RELATED_HEADING) {
      continue;
    }
    let end = index + 1;
    while (end < lines.length && !HEADING.test(lines[end])) {
      end += 1;
    }
    if (lines.slice(index + 1, end).some((text) => text.trim())) {
      continue;
    }
    let start = index;
    while (start > 0 && !lines[start - 1].trim()) {
      start -= 1;
    }
    const gap = end < lines.length && start > 0 ? [''] : [];
    return withoutEmptyRelated([...lines.slice(0, start), ...gap, ...lines.slice(end)]);
  }
  return lines;
}

function unlinkPage(page) {
  const lines = readFileSync(page, 'utf8').split('\n');
  const result = [];
  let removed = 0;
  let inCode = false;
  const pattern = basename(page) === INDEX_PAGE ? LEADING_LINK_ITEM : LINK_ONLY_ITEM;
  for (const line of lines) {
    const fence = line.trimStart().startsWith(FENCE);
    if (fence) {
      inCode = !inCode;
    }
    if (inCode || fence) {
      result.push(line);
      continue;
    }
    if (pattern.test(line)) {
      const [, words, target] = line.match(new RegExp(LINK));
      if (isMissing(target, page)) {
        removed += 1;
        noteSection(page, words, target);
        continue;
      }
    }
    const [text, count] = unlinkLine(line, page);
    removed += count;
    result.push(text);
  }
  if (removed) {
    writeFileSync(page, `${withoutEmptyRelated(result).join('\n').replace(TRAILING_NEWLINES, '')}\n`);
  }
  return removed;
}

// Every markdown page under the folder, in path order, folder by folder.
function pages(folder) {
  const found = [];
  const walk = (parts) => {
    for (const name of readdirSync(join(folder, ...parts))) {
      const path = [...parts, name];
      if (statSync(join(folder, ...path)).isDirectory()) {
        walk(path);
      } else if (name.endsWith(MARKDOWN_EXTENSION)) {
        found.push(path);
      }
    }
  };
  walk([]);
  const byParts = (a, b) => {
    for (let index = 0; index < Math.min(a.length, b.length); index += 1) {
      if (a[index] !== b[index]) {
        return a[index] < b[index] ? -1 : 1;
      }
    }
    return a.length - b.length;
  };
  return found.sort(byParts).map((parts) => join(folder, ...parts));
}

const folder = process.argv[2] ?? DEFAULT_FOLDER;
let isFolder = false;
try {
  isFolder = statSync(folder).isDirectory();
} catch {
  isFolder = false;
}
if (!isFolder) {
  console.error(`unlink: the folder ${folder} does not exist`);
  process.exit(1);
}
let total = 0;
let changedPages = 0;
for (const page of pages(folder)) {
  const removed = unlinkPage(page);
  if (removed) {
    console.log(`unlink: ${page}: ${removed}`);
    total += removed;
    changedPages += 1;
  }
}
console.log(`unlink: ${total} links removed in ${changedPages} pages`);
if (sections.length) {
  console.log('Links removed from a section, each often a rule the page rests on. Offer the standard it named:');
  console.log(sections.join('\n'));
}
