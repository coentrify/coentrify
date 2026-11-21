import { readFileSync } from 'node:fs';

const TYPES = ['feat', 'fix', 'chore', 'docs', 'refactor', 'revert'];
const SUBJECT = new RegExp(`^(${TYPES.join('|')})(\\([^()]+\\))?: [a-z]`);
const MERGE_SUBJECT = /^Merge /;
const COMMENT = /^#/;
const FORMAT = `type(scope): description, with a type from ${TYPES.join(', ')}, and a description that starts with a lowercase letter`;
const STANDARD = 'Commits';

function fail(message) {
  console.error(`commit: ${message}`);
  process.exit(1);
}

const [file] = process.argv.slice(2);
if (file === undefined) {
  fail('name the file that holds the message');
}

const subject = readFileSync(file, 'utf8')
  .split('\n')
  .find((line) => line.trim() !== '' && !COMMENT.test(line));
if (subject === undefined) {
  fail('the message is empty');
}
if (!MERGE_SUBJECT.test(subject) && !SUBJECT.test(subject)) {
  fail(`"${subject}" is not a conventional commit. Write ${FORMAT} (${STANDARD}).`);
}
