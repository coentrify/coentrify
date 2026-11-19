import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const PACKAGE_FOLDER = 'npm';
const MANIFEST = join(PACKAGE_FOLDER, 'package.json');
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

const { name, version } = JSON.parse(readFileSync(MANIFEST, 'utf8'));
if (isPublished(name, version)) {
  fail(`${name}@${version} is published already: raise the version in ${MANIFEST} first`);
}

const dryRun = process.argv.includes(DRY_RUN_FLAG);
execFileSync('npm', ['publish', '--access', 'public', ...(dryRun ? [DRY_RUN_FLAG] : [])], {
  cwd: PACKAGE_FOLDER,
  stdio: 'inherit',
});
console.log(`publish: ${name}@${version}${dryRun ? ', dry run' : ''}`);
