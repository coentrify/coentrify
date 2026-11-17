import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const CHANGELOG = 'changelog.md';
const REMOTE = 'origin';
const REPOSITORY = 'https://github.com/coentrify/coentrify';
const TAG_PREFIX = 'v';
const VERSION_HEADING = /^## (\d+\.\d+\.\d+)$/m;
const NEXT_HEADING = /^#{2,3} /m;
const NOTES_FLAG = '--notes';

function run(command, args) {
  return execFileSync(command, args, { encoding: 'utf8' }).trim();
}

function fail(message) {
  console.error(`tag: ${message}`);
  process.exit(1);
}

function hasRelease(tag) {
  try {
    run('gh', ['release', 'view', tag]);
    return true;
  } catch {
    return false;
  }
}

const changelog = readFileSync(CHANGELOG, 'utf8');
const match = changelog.match(VERSION_HEADING);
if (!match) {
  fail(`no version in ${CHANGELOG}`);
}

const version = match[1];
const tag = `${TAG_PREFIX}${version}`;
const section = changelog.slice(match.index + match[0].length);
const end = section.search(NEXT_HEADING);
const summary = (end === -1 ? section : section.slice(0, end)).trim();
if (summary === '') {
  fail(`${version} has no summary in ${CHANGELOG}`);
}
const notes = `${summary}\n\nEvery standard that changed in this version is named in the [changelog](${REPOSITORY}/blob/${tag}/${CHANGELOG}).\n`;

if (process.argv.includes(NOTES_FLAG)) {
  process.stdout.write(notes);
  process.exit(0);
}

const tagged = run('git', ['ls-remote', '--tags', REMOTE, `refs/tags/${tag}`]) !== '';
if (tagged && hasRelease(tag)) {
  fail(`${tag} exists already, with its release`);
}

if (!tagged) {
  run('git', ['tag', '--annotate', tag, '--message', version]);
  run('git', ['push', REMOTE, tag]);
  console.log(`tag: ${tag} set on ${run('git', ['rev-parse', '--short', 'HEAD'])}`);
}

const file = join(mkdtempSync(join(tmpdir(), 'release-')), 'notes.md');
writeFileSync(file, notes);
run('gh', ['release', 'create', tag, '--title', version, '--notes-file', file, '--verify-tag']);
console.log(`tag: the release of ${tag} is published`);
