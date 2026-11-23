#!/usr/bin/env node
// Checks a game's asset layers: the style, the blueprint of every list, and the traits of every entry.
//
// usage: check-assets.mjs [folder]
//
// Run from the root of the project. The folder defaults to docs/assets, and holds style.md, a list per
// asset type, and traits.md for the game's own traits, if it has any. The traits come from Asset Traits in
// the installed package, beside the game's own.
//
// It fails when the style leaves a field empty, when a list does not link the style or leaves a field of
// its blueprint empty, when an entry leaves a field empty or names a trait that does not exist, and when
// an entry's states miss a state that one of its traits needs.
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const USAGE = 'usage: check-assets.mjs [folder]';
const DEFAULT_FOLDER = 'docs/assets';
const CATALOG = fileURLToPath(new URL('../../standards/gamedev/asset-traits.md', import.meta.url));
const STYLE = 'style.md';
const OWN_TRAITS = 'traits.md';
const MARKDOWN = '.md';
const BLUEPRINT = 'Blueprint';
const STYLE_FIELDS = ['Realism', 'Detail', 'Palette', 'Materials', 'Light', 'References'];
const BLUEPRINT_FIELDS = ['Style', 'Scale', 'Materials', 'Decoration', 'Reference set'];
const ENTRY_FIELDS = ['For', 'Traits', 'Look', 'Where', 'States', 'Files'];
const HEADING = /^## (.+)$/;
const FIELD = /^- ([^:]+): ?(.*)$/;
const NEEDS = /^Needs: (.+?)\.?$/;
const NAMES = /, | and /;
const NONE = /^none\.?$/i;

// The sections of a page by their heading, each with its lines.
function sections(path) {
  const result = new Map();
  let lines = null;
  for (const line of readFileSync(path, 'utf8').split('\n')) {
    const heading = line.match(HEADING);
    if (heading) {
      lines = [];
      result.set(heading[1], lines);
    } else if (lines) {
      lines.push(line);
    }
  }
  return result;
}

// The fields of a section or a page, by their label.
function fields(lines) {
  const result = new Map();
  for (const line of lines) {
    const match = line.match(FIELD);
    if (match) {
      result.set(match[1].toLowerCase(), match[2].trim());
    }
  }
  return result;
}

function names(value) {
  return value.replace(/\.$/, '').split(NAMES).map((name) => name.trim()).filter(Boolean);
}

// Every trait in a catalog page, by name, with the states it needs.
function traitsOf(path) {
  const traits = new Map();
  for (const [heading, lines] of sections(path)) {
    const needs = lines.map((line) => line.match(NEEDS)).find(Boolean);
    if (needs) {
      traits.set(heading, names(needs[1]));
    }
  }
  return traits;
}

function missing(found, labels) {
  return labels.filter((label) => !found.get(label.toLowerCase()));
}

const args = process.argv.slice(2);
if (args.length > 1 || args.some((arg) => arg.startsWith('-'))) {
  console.error(USAGE);
  process.exit(2);
}
const folder = args[0] ?? DEFAULT_FOLDER;
const stylePath = join(folder, STYLE);
const lists = existsSync(folder)
  ? readdirSync(folder)
      .filter((file) => file.endsWith(MARKDOWN) && ![STYLE, OWN_TRAITS].includes(file))
      .sort()
  : [];
if (lists.length === 0 && !existsSync(stylePath)) {
  console.log(`assets: ${folder} holds no assets yet.`);
  process.exit(0);
}

const problems = [];
if (existsSync(stylePath)) {
  const empty = missing(fields(readFileSync(stylePath, 'utf8').split('\n')), STYLE_FIELDS);
  if (empty.length) {
    problems.push(`${stylePath}: no ${empty.join(', ')}`);
  }
} else {
  problems.push(`${stylePath}: missing, the style every list takes`);
}

const traits = traitsOf(CATALOG);
const ownTraits = join(folder, OWN_TRAITS);
if (existsSync(ownTraits)) {
  for (const [name, needs] of traitsOf(ownTraits)) {
    traits.set(name, needs);
  }
}

for (const file of lists) {
  const path = join(folder, file);
  const page = sections(path);
  if (!page.has(BLUEPRINT)) {
    problems.push(`${path}: no ## ${BLUEPRINT}`);
  } else {
    const blueprint = fields(page.get(BLUEPRINT));
    const empty = missing(blueprint, BLUEPRINT_FIELDS);
    if (empty.length) {
      problems.push(`${path}, ${BLUEPRINT}: no ${empty.join(', ')}`);
    }
    if (blueprint.get('style') && !blueprint.get('style').includes(STYLE)) {
      problems.push(`${path}, ${BLUEPRINT}: the style line does not link ${STYLE}`);
    }
  }
  for (const [name, lines] of page) {
    if (name === BLUEPRINT) {
      continue;
    }
    const entry = fields(lines);
    const empty = missing(entry, ENTRY_FIELDS);
    if (empty.length) {
      problems.push(`${path}, ${name}: no ${empty.join(', ')}`);
    }
    const named = NONE.test(entry.get('traits') ?? '') ? [] : names(entry.get('traits') ?? '');
    const states = names(entry.get('states') ?? '').map((state) => state.toLowerCase());
    for (const trait of named) {
      if (!traits.has(trait)) {
        problems.push(`${path}, ${name}: no trait ${trait}. The traits: ${[...traits.keys()].join(', ')}`);
        continue;
      }
      const lacking = traits.get(trait).filter((need) => !states.includes(need.toLowerCase()));
      if (lacking.length) {
        problems.push(`${path}, ${name}: ${trait} needs the state ${lacking.join(', ')}`);
      }
    }
  }
}

if (problems.length) {
  console.error(`assets: ${problems.length} problem${problems.length === 1 ? '' : 's'}\n${problems.map((problem) => `- ${problem}`).join('\n')}`);
  process.exit(1);
}
console.log(`assets: the style and ${lists.length} lists in ${folder} hold.`);
