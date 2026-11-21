import { execFileSync } from 'node:child_process';
import { cpSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { latestVersion } from './latest-version.mjs';

const PACKAGE_FOLDER = 'npm';
const PACKAGE_FILES = ['package.json', 'README.md', 'bin'];
const MANIFEST = 'package.json';
const LICENSE = 'LICENSE';
const SOURCE_FOLDER = 'source';
const SOURCE_FOLDERS = ['standards', 'tools', 'changelog'];
const LEFT_OUT_PAGES = ['CLAUDE.md'];
const ROOT_PAGE = /^[^/]+\.md$/;
const TAG_PREFIX = 'v';
const STAGE_PREFIX = 'coentrify-package-';
const DRY_RUN_FLAG = '--dry-run';

function run(command, args, options = {}) {
  return execFileSync(command, args, { encoding: 'utf8', ...options }).trim();
}

function fail(message) {
  console.error(`publish: ${message}`);
  process.exit(1);
}

function isPublished(name, version) {
  try {
    return run('npm', ['view', `${name}@${version}`, 'version'], { stdio: ['ignore', 'pipe', 'ignore'] }) === version;
  } catch {
    return false;
  }
}

function tagCommit(tag) {
  try {
    return run('git', ['rev-list', '-n', '1', tag], { stdio: ['ignore', 'pipe', 'ignore'] });
  } catch {
    return undefined;
  }
}

function isSourceFile(path) {
  if (ROOT_PAGE.test(path)) {
    return !LEFT_OUT_PAGES.includes(path);
  }
  return SOURCE_FOLDERS.some((folder) => path.startsWith(`${folder}/`));
}

function sourceFiles() {
  return run('git', ['ls-files', '-z']).split('\0').filter(Boolean).filter(isSourceFile);
}

const version = latestVersion();
if (version === undefined) {
  fail('no version in the changelog');
}
const { name, ...manifest } = JSON.parse(readFileSync(join(PACKAGE_FOLDER, MANIFEST), 'utf8'));
if (isPublished(name, version)) {
  fail(`${name}@${version} is published already: open the page of the next version first`);
}

const dryRun = process.argv.includes(DRY_RUN_FLAG);
const tag = `${TAG_PREFIX}${version}`;
if (!dryRun) {
  if (tagCommit(tag) !== run('git', ['rev-parse', 'HEAD'])) {
    fail(`check out ${tag} first, so the package holds the tagged version`);
  }
  if (run('git', ['status', '--porcelain']) !== '') {
    fail('the working tree has changes: the package holds the tagged version only');
  }
}

const stage = mkdtempSync(join(tmpdir(), STAGE_PREFIX));
for (const file of PACKAGE_FILES) {
  cpSync(join(PACKAGE_FOLDER, file), join(stage, file), { recursive: true });
}
cpSync(LICENSE, join(stage, LICENSE));
for (const path of sourceFiles()) {
  const target = join(stage, SOURCE_FOLDER, path);
  mkdirSync(dirname(target), { recursive: true });
  cpSync(path, target);
}
writeFileSync(join(stage, MANIFEST), `${JSON.stringify({ name, version, ...manifest }, null, 2)}\n`);

try {
  execFileSync('npm', ['publish', '--access', 'public', ...(dryRun ? [DRY_RUN_FLAG] : [])], { cwd: stage, stdio: 'inherit' });
} finally {
  rmSync(stage, { recursive: true, force: true });
}
console.log(`publish: ${name}@${version}${dryRun ? ', dry run' : ''}`);
