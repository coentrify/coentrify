#!/usr/bin/env node
// Rolls a game's flavors, and checks its picks, from the flavors in the installed package.
//
// usage: roll-flavors.mjs check [doc]
//        roll-flavors.mjs roll <layer> [doc]
//        roll-flavors.mjs weigh [doc]
//
// Run from the root of the project. The doc defaults to docs/flavors.md, and holds one line per pick, and
// a line per flavor it rules out or favors:
//   - Naming: Parody Names
//   - Naming: own - the game's own strategy
//   - Naming: never Parody Names - the reason
//   - Naming: favor Serious Names - the reason
//   - Death: Respawn - what the pick covers, where a layer holds several
//
// check fails on a flavor that Game Flavors does not hold, on two picks that conflict, on a pick whose need
// is not picked, and on a pick that is ruled out. A game's own strategy at a layer the catalog lacks passes,
// and check names that layer as one to file. roll draws a flavor for the layer at
// random, among the ones that fit the picks so far and are not ruled out, and prints the line to add with
// the favored flavors that fit, for the agent to consider strongly. The draw is code, since a model's
// random pick drifts to the most likely one. weigh gathers every pick with what its flavor decides and
// weighs, the problems check finds, and the layers with no pick, for coentrify weigh to judge as a whole.
import { randomInt } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const USAGE = 'usage: roll-flavors.mjs check [doc], roll-flavors.mjs roll <layer> [doc], or roll-flavors.mjs weigh [doc]';
const DEFAULT_DOC = 'docs/flavors.md';
const FLAVORS = fileURLToPath(new URL('../../standards/gamedev/', import.meta.url));
const INDEX = 'game-flavors.md';
const LAYERS_HEADING = '## The Layers';
const LAYER_LINE = /^- \[([^\]]+)\]\(([^)]+\.md)\)/;
const FLAVOR_HEADING = /^## (.+)$/;
const RELATED_HEADING = '## Related';
const EXAMPLE = /^Example: /;
const RELATION = /^(Conflicts|Needs): (.+?)\.?$/;
const NAMES = /, | and /;
const PICK = /^- ([^:]+): (.+)$/;
const OWN = /^own\b/i;
const OWN_STRATEGY = /^own - \S/i;
const STANCE = /^(never|favor) (.+?) - (\S.*)$/i;
const NOTE = ' - ';
const pages = new Map();

function fail(message) {
  console.error(`flavors: ${message}`);
  process.exit(1);
}

// Every layer of Game Flavors, top down, with its flavors by name.
function layers() {
  const index = readFileSync(`${FLAVORS}${INDEX}`, 'utf8').split('\n');
  const start = index.indexOf(LAYERS_HEADING);
  const result = new Map();
  for (const line of index.slice(start + 1)) {
    if (line.startsWith('## ')) {
      break;
    }
    const match = line.match(LAYER_LINE);
    if (match) {
      pages.set(match[1], match[2]);
      result.set(match[1], flavorsOf(`${FLAVORS}${match[2]}`));
    }
  }
  return result;
}

// The flavors on a layer's page, each with the flavors it conflicts with and needs, and the lines that say
// what it decides and weighs. A flavor is a heading with an Example line, so a section such as one on how
// the layer mixes is no flavor.
function flavorsOf(page) {
  const sections = new Map();
  let current = null;
  for (const line of readFileSync(page, 'utf8').split('\n')) {
    if (line === RELATED_HEADING) {
      break;
    }
    const heading = line.match(FLAVOR_HEADING);
    if (heading) {
      current = { conflicts: [], needs: [], lines: [], example: false };
      sections.set(heading[1], current);
      continue;
    }
    if (current && EXAMPLE.test(line)) {
      current.example = true;
    } else if (current && line.trim()) {
      current.lines.push(line);
    }
    const relation = current && line.match(RELATION);
    if (relation) {
      current[relation[1] === 'Conflicts' ? 'conflicts' : 'needs'].push(...relation[2].split(NAMES));
    }
  }
  return new Map([...sections].filter(([, flavor]) => flavor.example));
}

// The picks in the doc: [layer, flavor, line] for a flavor, [layer, null, line] for the game's own strategy,
// each with what the doc wrote after the layer. The flavors
// it rules out or favors go into stances, by name, with their reason, and a layer the catalog lacks, where
// the game has its own strategy, into newLayers.
function picks(doc, all, stances, newLayers) {
  if (!existsSync(doc)) {
    return [];
  }
  const result = [];
  for (const line of readFileSync(doc, 'utf8').split('\n')) {
    const match = line.match(PICK);
    if (!match) {
      continue;
    }
    const [, layer, value] = match;
    if (!all.has(layer)) {
      if (OWN_STRATEGY.test(value)) {
        newLayers.add(layer);
        result.push([layer, null, value]);
        continue;
      }
      fail(`${doc} picks for a layer Game Flavors does not hold: ${layer}. The layers: ${[...all.keys()].join(', ')}. A strategy of the game's own at a new layer is written as - ${layer}: own - and the strategy.`);
    }
    const stance = value.match(STANCE);
    if (/^(never|favor)\b/i.test(value)) {
      if (!stance) {
        fail(`${doc} gives no reason for its ${value}. Write it as - ${layer}: ${value} - and the reason.`);
      }
      const [, kind, name, reason] = stance;
      if (!all.get(layer).has(name)) {
        fail(`${doc} ${kind.toLowerCase()}s a flavor ${layer} does not hold: ${name}. The flavors: ${[...all.get(layer).keys()].join(', ')}.`);
      }
      stances[kind.toLowerCase()].set(name, reason);
    } else if (OWN.test(value)) {
      if (!OWN_STRATEGY.test(value)) {
        fail(`${doc} names no strategy for its own ${layer}. Write it as - ${layer}: own - and the strategy.`);
      }
      result.push([layer, null, value]);
    } else {
      const name = value.split(NOTE)[0].trim();
      if (!all.get(layer).has(name)) {
        fail(`${doc} picks a flavor ${layer} does not hold: ${name}. The flavors: ${[...all.get(layer).keys()].join(', ')}.`);
      }
      result.push([layer, name, value]);
    }
  }
  return result;
}

function flavor(all, name) {
  for (const [layer, flavors] of all) {
    if (flavors.has(name)) {
      return { layer, ...flavors.get(name) };
    }
  }
  return null;
}

function conflict(all, a, b) {
  return flavor(all, a)?.conflicts.includes(b) || flavor(all, b)?.conflicts.includes(a);
}

// The picks that do not hold: one that is ruled out, two that conflict, and a need that is not picked.
function problemsOf(all, names, stances) {
  const problems = [];
  for (const name of names.filter((name) => stances.never.has(name))) {
    problems.push(`${name} is picked, and ruled out: ${stances.never.get(name)}`);
  }
  for (const [index, name] of names.entries()) {
    for (const other of names.slice(index + 1)) {
      if (conflict(all, name, other)) {
        problems.push(`${name} conflicts with ${other}`);
      }
    }
    for (const need of flavor(all, name).needs) {
      if (!names.includes(need)) {
        problems.push(`${name} needs ${need}, which is not picked`);
      }
    }
  }
  return problems;
}

const list = (items) => items.map((item) => `- ${item}`).join('\n');

const [command, ...rest] = process.argv.slice(2);
const takesDoc = (command === 'check' || command === 'weigh') && rest.length <= 1;
if (!takesDoc && !(command === 'roll' && rest.length >= 1 && rest.length <= 2)) {
  console.error(USAGE);
  process.exit(2);
}
const all = layers();
const layer = command === 'roll' ? rest[0] : null;
const doc = (command === 'roll' ? rest[1] : rest[0]) ?? DEFAULT_DOC;
const stances = { never: new Map(), favor: new Map() };
const newLayers = new Set();
const picked = picks(doc, all, stances, newLayers);
const names = picked.map(([, name]) => name).filter((name) => name !== null);

if (command === 'check') {
  const problems = problemsOf(all, names, stances);
  if (problems.length) {
    fail(`${doc} does not hold:\n${list(problems)}`);
  }
  console.log(`flavors: the ${picked.length} picks in ${doc} hold.`);
  if (newLayers.size) {
    console.log(`Layers the catalog lacks, to file with coentrify: ${[...newLayers].join(', ')}.`);
  }
  process.exit(0);
}

if (command === 'weigh') {
  if (!existsSync(doc)) {
    fail(`${doc} is not there. A game's picks stand in it, one line per pick.`);
  }
  console.log(`flavors: the ${picked.length} picks in ${doc}, with what each decides and weighs, to judge as a whole.`);
  for (const [pickedLayer, name, value] of picked) {
    console.log(`\n- ${pickedLayer}: ${value}${pages.has(pickedLayer) ? ` (${pages.get(pickedLayer)})` : ''}`);
    const lines = name === null ? ["The game's own strategy, weighed by its reasoning."] : all.get(pickedLayer).get(name).lines;
    console.log(lines.map((line) => `  ${line}`).join('\n'));
  }
  const problems = problemsOf(all, names, stances);
  if (problems.length) {
    console.log(`\nPicks that do not hold, as check finds them:\n${list(problems)}`);
  }
  const decided = new Set(picked.map(([pickedLayer]) => pickedLayer));
  const open = [...all.keys()].filter((name) => !decided.has(name));
  if (open.length) {
    console.log(`\nLayers with no pick, each left out on purpose or a choice left implicit: ${open.join(', ')}.`);
  }
  for (const [kind, label] of [['never', 'Ruled out'], ['favor', 'Favored']]) {
    if (stances[kind].size) {
      console.log(`\n${label}:\n${list([...stances[kind]].map(([flavorName, reason]) => `${flavorName} - ${reason}`))}`);
    }
  }
  process.exit(0);
}

if (!all.has(layer)) {
  fail(`Game Flavors holds no layer ${layer}. The layers: ${[...all.keys()].join(', ')}.`);
}
const decided = new Set(picked.map(([pickedLayer]) => pickedLayer));
const fits = [...all.get(layer).entries()]
  .filter(([name]) => !names.includes(name) && !stances.never.has(name))
  .filter(([name]) => names.every((other) => !conflict(all, name, other)))
  .filter(([, { needs }]) => needs.every((need) => names.includes(need) || !decided.has(flavor(all, need)?.layer)))
  .map(([name]) => name);
if (fits.length === 0) {
  fail(`no flavor of ${layer} fits the picks in ${doc}.`);
}
const rolled = fits[randomInt(fits.length)];
console.log(`- ${layer}: ${rolled}`);
console.log(`Rolled from the ${fits.length} that fit. Add the line to ${doc}, and run check.`);
const favored = fits.filter((name) => stances.favor.has(name));
if (favored.length) {
  console.log('Favored, to consider strongly before taking the draw:');
  for (const name of favored) {
    console.log(`- ${name} - ${stances.favor.get(name)}`);
  }
}
