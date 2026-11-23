#!/usr/bin/env node
// Works out a coentrify update from the installed package, so the agent only handles what needs judgment.
//
// usage: coentrify-update.mjs [--apply]
//        coentrify-update.mjs --adopt <module>[/<standard>]...
//
// Run from the root of the project, once the package that coentrify.json names is raised to the new
// version. The update runs from the project's version to the installed one. The script fetches the
// project's version of the package from npm to compare, and keeps it in node_modules/.cache.
//
// Without --apply it prints the plan. With --apply it also replaces every tracked standard that changed,
// and its line in the module's overview, and writes the new version to coentrify.json. The rest stays with the agent, as the plan says:
// - a customized standard that changed, to show the director
// - a standard that was renamed, moved or removed at the source
// - a new standard in a module the project adopted, and a new module, worth considering
// - the overview line of a customized standard that changed, to show the director
// - a tool spec that changed, so the project rebuilds what it built from it
// - the unlink script, once the replaced standards bring their links back
//
// With --adopt it adopts the standards and modules the director accepted, once the project is at the
// installed version and the standards are committed: it copies them in, lists them as tracked, adds their
// overview lines and a new module's line in the index, brings every tracked standard back to the package's
// text and runs the unlink script, so the links to the adopted standards return and the others stay words.
import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, isAbsolute, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { gunzipSync } from 'node:zlib';

const FILE = 'coentrify.json';
const APPLY_FLAG = '--apply';
const ADOPT_FLAG = '--adopt';
const USAGE = 'usage: coentrify-update.mjs [--apply], or coentrify-update.mjs --adopt <module>[/<standard>]...';
const DEFAULT_PACKAGE = 'coentrify';
const NODE_MODULES = 'node_modules';
const CACHE = `${NODE_MODULES}/.cache`;
const PACKAGE_MANIFEST = 'package.json';
const SOURCE_FOLDER = 'src';
const TARBALL_ROOT = 'package';
const STANDARDS = 'standards';
const SPECS = 'tools/specs';
const INDEX_PAGE = 'overview.md';
const MARKDOWN = '.md';
const MODULE_SOURCE = 'source';
const TRACKED = 'tracked';
const FIRST_VERSION_ON_NPM = '0.1.0';
const STANDARD_PATH = /^standards\/([^/]+)\/([^/]+)\.md$/;
const TITLE = /^# (.+)$/m;
const OVERVIEW_LINE = /^- \[[^\]]+\]\(([^)/]+)\.md\)/;
const MODULE_LINE = /^- \[[^\]]+\]\(([^)/]+)\/overview\.md\)/;
const NAME = /^[a-z0-9][a-z0-9-]*$/;
const MODULE_ABOUT = /^- \[[^\]]+\]\([^)]+\)(?: - )?/;
const UNLINK_SCRIPT = fileURLToPath(new URL('unlink-missing-standards.mjs', import.meta.url));
const BLOCK = 512;
const FILE_TYPES = new Set(['0', '\0']);
const FOLDER_TYPE = '5';
const PAX_TYPE = 'x';
const PAX_PATH = /^\d+ path=(.*)$/;
const ON_WINDOWS = process.platform === 'win32';

function fail(message) {
  console.error(message);
  process.exit(1);
}

function versionKey(version) {
  return version.split('.').map(Number);
}

function compareVersions(a, b) {
  const [left, right] = [versionKey(a), versionKey(b)];
  for (let index = 0; index < Math.max(left.length, right.length); index += 1) {
    const difference = (left[index] ?? 0) - (right[index] ?? 0);
    if (difference !== 0) {
      return difference;
    }
  }
  return 0;
}

function isFolder(path) {
  try {
    return statSync(path).isDirectory();
  } catch {
    return false;
  }
}

function text(bytes, start, length) {
  const field = bytes.subarray(start, start + length);
  const end = field.indexOf(0);
  return field.subarray(0, end === -1 ? field.length : end).toString('utf8');
}

// A plain file or folder that stays inside the folder it is unpacked into.
function isSafe(name, type) {
  const parts = name.split('/');
  return (FILE_TYPES.has(type) || type === FOLDER_TYPE) && !isAbsolute(name) && !name.startsWith('/') && !parts.includes('..');
}

// Unpacks a gzipped tarball into a folder, plain files and folders only.
function unpack(tarball, folder) {
  const bytes = gunzipSync(readFileSync(tarball));
  let offset = 0;
  let paxPath = null;
  while (offset + BLOCK <= bytes.length) {
    const header = bytes.subarray(offset, offset + BLOCK);
    if (header.every((byte) => byte === 0)) {
      break;
    }
    const size = parseInt(text(header, 124, 12).trim() || '0', 8);
    const type = String.fromCharCode(header[156]);
    const prefix = text(header, 257, 5) === 'ustar' ? text(header, 345, 155) : '';
    const data = bytes.subarray(offset + BLOCK, offset + BLOCK + size);
    offset += BLOCK + Math.ceil(size / BLOCK) * BLOCK;
    if (type === PAX_TYPE) {
      const record = data.toString('utf8').split('\n').map((line) => line.match(PAX_PATH)).find(Boolean);
      paxPath = record ? record[1] : null;
      continue;
    }
    const name = paxPath ?? (prefix ? `${prefix}/${text(header, 0, 100)}` : text(header, 0, 100));
    paxPath = null;
    if (!isSafe(name, type)) {
      continue;
    }
    const target = join(folder, ...name.split('/'));
    if (type === FOLDER_TYPE) {
      mkdirSync(target, { recursive: true });
    } else {
      mkdirSync(dirname(target), { recursive: true });
      writeFileSync(target, data);
    }
  }
}

// The source of the project's version, unpacked from npm into the cache once.
function fetch(packageName, version) {
  const folder = `${CACHE}/${packageName}/${version}`;
  const source = `${folder}/${TARBALL_ROOT}/${SOURCE_FOLDER}`;
  if (isFolder(source)) {
    return source;
  }
  mkdirSync(folder, { recursive: true });
  const result = spawnSync('npm', ['pack', `${packageName}@${version}`, '--pack-destination', folder, '--json'], {
    encoding: 'utf8',
    shell: ON_WINDOWS,
  });
  if (result.status !== 0) {
    fail(`update: npm pack ${packageName}@${version} failed: ${(result.stderr ?? '').trim()}`);
  }
  unpack(join(folder, JSON.parse(result.stdout)[0].filename), folder);
  if (!isFolder(source)) {
    fail(`update: ${packageName}@${version} holds no source to compare with.`);
  }
  return source;
}

// Rows of git diff between two copies of a folder, with paths relative to the source.
function changes(old, current, folder, ...options) {
  const result = spawnSync(
    'git',
    ['diff', '--no-index', '--no-color', '--no-ext-diff', ...options, `${old}/${folder}`, `${current}/${folder}`],
    { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 },
  );
  if (result.status === null || result.status > 1) {
    fail(`update: git diff failed: ${(result.stderr ?? '').trim()}`);
  }
  const prefixes = [`${old}/`, `${current}/`].sort((a, b) => b.length - a.length);
  const relative = (path) => {
    const prefix = prefixes.find((candidate) => path.startsWith(candidate));
    return prefix ? path.slice(prefix.length) : path;
  };
  return result.stdout
    .split('\n')
    .filter((row) => row !== '')
    .map((row) => row.split('\t').map(relative).join('\t'));
}

function title(source, path) {
  const match = readFileSync(`${source}/${path}`, 'utf8').match(TITLE);
  return match ? match[1] : path;
}

function overviewLines(content, pattern = OVERVIEW_LINE) {
  const lines = new Map();
  for (const line of content.split('\n')) {
    const match = line.match(pattern);
    if (match) {
      lines.set(match[1], line);
    }
  }
  return lines;
}

function overview(source, module) {
  const path = `${source}/${STANDARDS}/${module}/${INDEX_PAGE}`;
  return existsSync(path) ? overviewLines(readFileSync(path, 'utf8')) : new Map();
}

// The lines of every module in a source's index.
function moduleLines(source) {
  const path = `${source}/${STANDARDS}/${INDEX_PAGE}`;
  return existsSync(path) ? overviewLines(readFileSync(path, 'utf8'), MODULE_LINE) : new Map();
}

// The standards of a module in a source, by name.
function standardsIn(source, module) {
  const path = `${source}/${STANDARDS}/${module}`;
  return isFolder(path)
    ? readdirSync(path)
        .filter((file) => file.endsWith(MARKDOWN) && file !== INDEX_PAGE)
        .map((file) => file.slice(0, -MARKDOWN.length))
        .sort()
    : [];
}

// Inserts a line after the nearest line before it in the source's order, or before the nearest line after it.
// Returns null when neither is there.
function insertLine(content, pattern, order, name, line) {
  const present = overviewLines(content, pattern);
  const at = order.indexOf(name);
  const before = order.slice(0, at).reverse().find((other) => present.has(other));
  const after = order.slice(at + 1).find((other) => present.has(other));
  const rows = content.split('\n');
  if (before !== undefined) {
    rows.splice(rows.indexOf(present.get(before)) + 1, 0, line);
  } else if (after !== undefined) {
    rows.splice(rows.indexOf(present.get(after)), 0, line);
  } else {
    return null;
  }
  return rows.join('\n');
}

function standardOf(path) {
  const match = path.match(STANDARD_PATH);
  if (!match || `${match[2]}.md` === INDEX_PAGE) {
    return null;
  }
  return [match[1], match[2]];
}

// Adopts the standards and modules the director accepted, once the project is at the installed version.
function adopt(targets) {
  if (compareVersions(start, end) !== 0) {
    fail(`update: the project is at ${start} and the installed ${packageName} is ${end}. Update the project to ${end} first, then adopt.`);
  }
  const pending = spawnSync('git', ['status', '--porcelain', '--', folder, FILE], { encoding: 'utf8' });
  if (pending.status === 0 && pending.stdout.trim() !== '') {
    fail(`update: ${folder} or ${FILE} has changes that are not committed. Commit them first, so the adoption commits on its own and no change is lost.`);
  }
  const chosen = [];
  const listed = [];
  for (const target of targets) {
    const [module, name, ...rest] = (target.endsWith(MARKDOWN) ? target.slice(0, -MARKDOWN.length) : target).split('/');
    if (!NAME.test(module) || (name !== undefined && !NAME.test(name)) || rest.length > 0) {
      fail(`update: ${target} names no module or standard. Name one as <module> or <module>/<standard>.`);
    }
    if (MODULE_SOURCE in (config.modules[module] ?? {})) {
      fail(`update: ${module} has a source of its own, so it is not adopted from ${packageName}.`);
    }
    const names = name === undefined ? standardsIn(current, module) : [name];
    if (names.length === 0) {
      fail(`update: ${packageName} ${end} has no module ${module}.`);
    }
    for (const each of names) {
      const id = `${module}/${each}`;
      if (`${each}${MARKDOWN}` === INDEX_PAGE || !existsSync(`${current}/${STANDARDS}/${id}${MARKDOWN}`)) {
        fail(`update: ${packageName} ${end} has no standard ${id}.`);
      }
      if (config.modules[module]?.[each] !== undefined) {
        listed.push(id);
      } else if (existsSync(join(folder, module, `${each}${MARKDOWN}`))) {
        fail(`update: ${id} has the same name as one of the project's own standards. Show the director, nothing was adopted.`);
      } else if (!chosen.some(([other, otherName]) => other === module && otherName === each)) {
        chosen.push([module, each]);
      }
    }
  }
  if (listed.length) {
    console.log(`Listed in ${FILE} already, left as they are: ${listed.join(', ')}`);
  }
  if (chosen.length === 0) {
    console.log('Nothing to adopt.');
    return;
  }

  for (const [module, name] of chosen) {
    mkdirSync(join(folder, module), { recursive: true });
    writeFileSync(join(folder, module, `${name}${MARKDOWN}`), readFileSync(`${current}/${STANDARDS}/${module}/${name}${MARKDOWN}`, 'utf8'));
    config.modules[module] ??= {};
    config.modules[module][name] = TRACKED;
  }

  const byHand = [];
  const adoptedModules = [...new Set(chosen.map(([module]) => module))];
  for (const module of adoptedModules) {
    const target = join(folder, module, INDEX_PAGE);
    const source = `${current}/${STANDARDS}/${module}/${INDEX_PAGE}`;
    if (!existsSync(target)) {
      if (existsSync(source)) {
        writeFileSync(target, readFileSync(source, 'utf8'));
      } else {
        byHand.push(`the overview of ${module}`);
      }
      continue;
    }
    const lines = overview(current, module);
    for (const [, name] of chosen.filter(([other]) => other === module)) {
      const line = lines.get(name);
      const inserted = line === undefined ? null : insertLine(readFileSync(target, 'utf8'), OVERVIEW_LINE, [...lines.keys()], name, line);
      if (inserted === null) {
        byHand.push(`the overview line of ${module}/${name}`);
      } else {
        writeFileSync(target, inserted);
      }
    }
  }

  const index = join(folder, INDEX_PAGE);
  const indexLines = moduleLines(current);
  for (const module of adoptedModules) {
    const content = existsSync(index) ? readFileSync(index, 'utf8') : '';
    if (overviewLines(content, MODULE_LINE).has(module)) {
      continue;
    }
    const line = indexLines.get(module);
    const inserted = line === undefined ? null : insertLine(content, MODULE_LINE, [...indexLines.keys()], module, line);
    if (inserted === null) {
      byHand.push(`the index line of ${module}`);
    } else {
      writeFileSync(index, inserted);
    }
  }

  for (const [module, standards] of Object.entries(config.modules)) {
    if (MODULE_SOURCE in standards) {
      continue;
    }
    for (const [name, state] of Object.entries(standards)) {
      const source = `${current}/${STANDARDS}/${module}/${name}${MARKDOWN}`;
      const target = join(folder, module, `${name}${MARKDOWN}`);
      if (state === TRACKED && existsSync(source) && existsSync(target)) {
        writeFileSync(target, readFileSync(source, 'utf8'));
      }
    }
  }
  writeFileSync(FILE, `${JSON.stringify(config, null, 2)}\n`);
  const unlink = spawnSync(process.execPath, [UNLINK_SCRIPT, folder], { stdio: ['ignore', 'ignore', 'inherit'] });
  if (unlink.status !== 0) {
    fail(`update: the unlink script failed. Run it again by hand: node ${UNLINK_SCRIPT} ${folder}`);
  }

  console.log(`\nAdopted ${chosen.length} standard${chosen.length === 1 ? '' : 's'}, and brought the links to them back in the tracked standards:`);
  for (const [module, name] of chosen) {
    console.log(`- ${module}/${name}`);
  }
  for (const item of byHand) {
    console.log(`- Add ${item} by hand.`);
  }
  console.log('Set the adopted standards up in full, and commit the adoption on its own.');
}

const args = process.argv.slice(2);
const adopting = args[0] === ADOPT_FLAG;
const targets = adopting ? args.slice(1) : [];
if (adopting ? targets.length === 0 || targets.some((arg) => arg.startsWith('-')) : args.some((arg) => arg !== APPLY_FLAG)) {
  console.error(USAGE);
  process.exit(2);
}
const apply = args.includes(APPLY_FLAG);
const config = JSON.parse(readFileSync(FILE, 'utf8'));
const packageName = config.package ?? DEFAULT_PACKAGE;
const manifest = `${NODE_MODULES}/${packageName}/${PACKAGE_MANIFEST}`;
if (!existsSync(manifest)) {
  fail(`update: ${packageName} is not installed, raise it first: npm install --save-dev ${packageName}@latest`);
}
const start = config.version;
const end = JSON.parse(readFileSync(manifest, 'utf8')).version;
const current = `${NODE_MODULES}/${packageName}/${SOURCE_FOLDER}`;
const folder = config.folders[STANDARDS];
if (adopting) {
  adopt(targets);
  process.exit(0);
}
if (compareVersions(end, start) <= 0) {
  console.log(`update: the project is at ${start}, and the installed ${packageName} ${end} is no newer. Raise it first: npm install --save-dev ${packageName}@latest`);
  process.exit(0);
}
if (compareVersions(start, FIRST_VERSION_ON_NPM) < 0) {
  fail(`update: the project is at ${start}, from before ${FIRST_VERSION_ON_NPM}. It sets coentrify up again, the way the onboarding says for an earlier coentrify.`);
}
const old = fetch(packageName, start);
const modules = new Map(
  Object.entries(config.modules)
    .filter(([, module]) => !(MODULE_SOURCE in module))
    .map(([name, module]) => [name, new Map(Object.entries(module).filter(([standard]) => standard !== MODULE_SOURCE))]),
);
const ownSource = Object.entries(config.modules)
  .filter(([, module]) => MODULE_SOURCE in module)
  .map(([name]) => name)
  .sort();

const changed = [];
const renamed = [];
const removed = [];
const added = [];
for (const row of changes(old, current, STANDARDS, '-M', '--name-status')) {
  const [status, ...paths] = row.split('\t');
  const oldStandard = standardOf(paths[0]);
  const newStandard = standardOf(paths[paths.length - 1]);
  if (status.startsWith('R') && oldStandard && newStandard) {
    renamed.push([oldStandard, newStandard]);
  } else if (status === 'M' && oldStandard) {
    changed.push(oldStandard);
  } else if (status === 'D' && oldStandard) {
    removed.push(oldStandard);
  } else if (status === 'A' && newStandard) {
    added.push(newStandard);
  }
}
for (const newStandard of [...added]) {
  const match = removed.find((gone) => gone[1] === newStandard[1]);
  if (match) {
    removed.splice(removed.indexOf(match), 1);
    added.splice(added.indexOf(newStandard), 1);
    renamed.push([match, newStandard]);
  }
}

const adopted = (module, name) => modules.get(module)?.get(name);
const replace = changed.filter(([module, name]) => adopted(module, name) === TRACKED);
const report = changed.filter(([module, name]) => ![undefined, null, TRACKED].includes(adopted(module, name)));
const moves = renamed.filter(([before]) => adopted(...before));
const gone = removed.filter((before) => adopted(...before));
const fresh = added.filter(([module]) => modules.has(module));
const packageModules = moduleLines(current);
const freshModules = [...new Set(added.map(([module]) => module))]
  .filter((module) => !(module in config.modules) && !isFolder(`${old}/${STANDARDS}/${module}`))
  .sort();

const lineReplace = [];
const lineReport = [];
for (const module of [...modules.keys()].sort()) {
  const [before, after] = [overview(old, module), overview(current, module)];
  for (const [name, line] of after) {
    if (before.has(name) && before.get(name) !== line && adopted(module, name)) {
      (adopted(module, name) === TRACKED ? lineReplace : lineReport).push([module, name, line]);
    }
  }
}
const specs = changes(old, current, SPECS, '--name-only');
const diff = (path) => `git diff --no-index ${old}/${path} ${current}/${path}`;

console.log(`# Update from ${start} to ${end}\n`);
console.log(`Replace, tracked and changed: ${replace.length}`);
for (const [module, name] of replace) {
  console.log(`- ${module}/${name}`);
}
console.log(`\nShow the director, customized and changed: ${report.length}`);
for (const [module, name] of report) {
  console.log(`- ${module}/${name}: ${diff(`${STANDARDS}/${module}/${name}.md`)}`);
}
console.log(`\nRenamed or moved at the source: ${moves.length}`);
for (const [[oldModule, oldName], [newModule, newName]] of moves) {
  console.log(`- ${oldModule}/${oldName} is now ${newModule}/${newName}, ${title(current, `${STANDARDS}/${newModule}/${newName}.md`)}`);
}
console.log(`\nRemoved at the source: ${gone.length}`);
for (const [module, name] of gone) {
  console.log(`- ${module}/${name}`);
}
console.log(`\nNew in an adopted module, worth considering: ${fresh.length}`);
for (const [module, name] of fresh) {
  console.log(`- ${module}/${name}, ${title(current, `${STANDARDS}/${module}/${name}.md`)}`);
}
console.log(`\nNew modules, worth considering: ${freshModules.length}`);
for (const module of freshModules) {
  const about = (packageModules.get(module) ?? '').replace(MODULE_ABOUT, '');
  const own = isFolder(join(folder, module)) ? ', the same name as a module of the project\'s own' : '';
  console.log(`- ${module}${about ? `, ${about}` : ''}${own}`);
}
console.log(`\nOverview lines, tracked and changed: ${lineReplace.length}`);
for (const [module, name] of lineReplace) {
  console.log(`- ${module}/${name}`);
}
console.log(`\nOverview lines to show the director, customized and changed: ${lineReport.length}`);
for (const [module, name] of lineReport) {
  console.log(`- ${module}/${name}: ${diff(`${STANDARDS}/${module}/${INDEX_PAGE}`)}`);
}
console.log(`\nSpecs that changed, rebuild what the project built from them: ${specs.length}`);
for (const spec of specs) {
  console.log(`- ${spec}: ${diff(spec)}`);
}
if (ownSource.length) {
  console.log(`\nModules with a source of their own, left out: ${ownSource.join(', ')}`);
}

if (apply) {
  for (const [module, name] of replace) {
    writeFileSync(join(folder, module, `${name}.md`), readFileSync(`${current}/${STANDARDS}/${module}/${name}.md`, 'utf8'));
  }
  const missing = [];
  for (const [module, name, line] of lineReplace) {
    const target = join(folder, module, INDEX_PAGE);
    const content = existsSync(target) ? readFileSync(target, 'utf8') : '';
    const present = overviewLines(content).get(name);
    if (present === undefined) {
      missing.push(`${module}/${name}`);
      continue;
    }
    writeFileSync(target, content.replace(present, () => line));
  }
  config.version = end;
  writeFileSync(FILE, `${JSON.stringify(config, null, 2)}\n`);
  console.log(`\nReplaced ${replace.length} standards and ${lineReplace.length - missing.length} overview lines, and wrote ${end} to ${FILE}.`);
  for (const standard of missing) {
    console.log(`- The overview line of ${standard} was not found, update it by hand.`);
  }
  console.log('Run the unlink script next.');
  console.log('Then suggest the new standards and modules worth adopting, and adopt the ones the director accepts with --adopt.');
}
