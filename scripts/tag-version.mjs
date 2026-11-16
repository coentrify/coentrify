import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const CHANGELOG = 'changelog.md';
const REMOTE = 'origin';
const TAG_PREFIX = 'v';
const VERSION_HEADING = /^## (\d+\.\d+\.\d+)$/m;

function git(args) {
  return execFileSync('git', args, { encoding: 'utf8' }).trim();
}

const match = readFileSync(CHANGELOG, 'utf8').match(VERSION_HEADING);
if (!match) {
  console.error(`tag: no version in ${CHANGELOG}`);
  process.exit(1);
}

const version = match[1];
const tag = `${TAG_PREFIX}${version}`;
if (git(['ls-remote', '--tags', REMOTE, `refs/tags/${tag}`]) !== '') {
  console.error(`tag: ${tag} exists already`);
  process.exit(1);
}

git(['tag', '--annotate', tag, '--message', version]);
git(['push', REMOTE, tag]);
console.log(`tag: ${tag} set on ${git(['rev-parse', '--short', 'HEAD'])}`);
