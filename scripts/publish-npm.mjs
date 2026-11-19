import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const PACKAGE_FOLDER = 'npm';
const MANIFEST = join(PACKAGE_FOLDER, 'package.json');
const VERSION_TAG_PATTERN = 'v[0-9]*';
const TAG_PREFIX = 'v';
const DRY_RUN_FLAG = '--dry-run';
const INDENT = 2;

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

const tag = run('git', ['describe', '--tags', '--abbrev=0', '--match', VERSION_TAG_PATTERN]);
const version = tag.slice(TAG_PREFIX.length);
const manifest = JSON.parse(readFileSync(MANIFEST, 'utf8'));
if (isPublished(manifest.name, version)) {
  fail(`${manifest.name}@${version} is published already: tag the next version first`);
}

manifest.version = version;
writeFileSync(MANIFEST, `${JSON.stringify(manifest, null, INDENT)}\n`);
const dryRun = process.argv.includes(DRY_RUN_FLAG);
execFileSync('npm', ['publish', '--access', 'public', ...(dryRun ? [DRY_RUN_FLAG] : [])], {
  cwd: PACKAGE_FOLDER,
  stdio: 'inherit',
});
console.log(`publish: ${manifest.name}@${version}${dryRun ? ', dry run' : ''}, pointing at ${tag}`);
