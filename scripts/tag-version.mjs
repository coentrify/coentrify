import { execFileSync } from 'node:child_process';
import { mkdtempSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const CHANGELOG_FOLDER = 'changelog';
const REMOTE = 'origin';
const REPOSITORY = 'https://github.com/coentrify/coentrify';
const TAG_PREFIX = 'v';
const VERSION_PAGE = /^(\d+)\.(\d+)\.(\d+)\.md$/;
const TITLE = /^# .+\n/;
const NEXT_HEADING = /^## /m;
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

const versions = readdirSync(CHANGELOG_FOLDER)
  .map((file) => file.match(VERSION_PAGE))
  .filter((match) => match !== null)
  .map((match) => match.slice(1).map(Number))
  .sort((first, second) => second[0] - first[0] || second[1] - first[1] || second[2] - first[2]);
if (versions.length === 0) {
  fail(`no version in ${CHANGELOG_FOLDER}`);
}

const version = versions[0].join('.');
const tag = `${TAG_PREFIX}${version}`;
const page = `${CHANGELOG_FOLDER}/${version}.md`;
const text = readFileSync(page, 'utf8').replace(TITLE, '');
const end = text.search(NEXT_HEADING);
const summary = (end === -1 ? text : text.slice(0, end)).trim();
if (summary === '') {
  fail(`${version} has no summary in ${page}`);
}
const notes = `${summary}\n\nEvery standard that changed in this version is named in the [changelog](${REPOSITORY}/blob/${tag}/${page}).\n`;

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
