import { readFileSync } from 'node:fs';

const TYPES = ['feat', 'fix', 'chore', 'docs', 'refactor', 'revert'];
const SUBJECT = new RegExp(`^(${TYPES.join('|')})(\\([^()]+\\))?: [a-z]`);
const MERGE_SUBJECT = /^Merge /;
const COMMENT = /^#/;
const FORMAT = `type(scope): description, with a type from ${TYPES.join(', ')}, and a description that starts with a lowercase letter`;
const STANDARD = 'Commits';
const ATTRIBUTION_RULE = 'No Attribution in Commits';
const SCISSORS = /^# -+ >8 -+$/;
const LINK = /\[([^\]]*)\]\([^)]*\)/g;
const LEADING_MARKS = /^[^\p{L}]+/u;
const ATTRIBUTION = /^(co-authored-by:|claude-session:|generated (with|by) claude code)/;

function fail(message) {
  console.error(`commit: ${message}`);
  process.exit(1);
}

const [file] = process.argv.slice(2);
if (file === undefined) {
  fail('name the file that holds the message');
}

const lines = readFileSync(file, 'utf8').split('\n');
const end = lines.findIndex((line) => SCISSORS.test(line));
const message = end === -1 ? lines : lines.slice(0, end);
const subject = message.find((line) => line.trim() !== '' && !COMMENT.test(line));
if (subject === undefined) {
  fail('the message is empty');
}
if (!MERGE_SUBJECT.test(subject) && !SUBJECT.test(subject)) {
  fail(`"${subject}" is not a conventional commit. Write ${FORMAT} (${STANDARD}).`);
}

// A line that opens with attribution, after marks such as an emoji, a bullet or an underscore.
const attributed = message
  .filter((line) => !COMMENT.test(line))
  .find((line) => ATTRIBUTION.test(line.replace(LINK, '$1').replace(LEADING_MARKS, '').toLowerCase()));
if (attributed !== undefined) {
  fail(`"${attributed.trim()}" is attribution. A commit message holds only the message (${ATTRIBUTION_RULE}).`);
}
