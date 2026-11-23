#!/usr/bin/env node
// Prints a prefilled link to a new issue at the source, from a filing's draft.
//
// usage: issue-link.mjs <draft> [source]
//
// Run from the root of the project. The draft opens with its title as a `# ` heading, and the rest is the
// body. The source defaults to the one coentrify.json names. The link goes on stdout alone, so the agent
// copies it whole into its reply, and a warning goes on stderr.
import { existsSync, readFileSync } from 'node:fs';

const USAGE = 'usage: issue-link.mjs <draft> [source]';
const CONFIG = 'coentrify.json';
const DEFAULT_SOURCE = 'https://github.com/coentrify/coentrify';
const TITLE = /^# (.+)$/m;
const LONGEST = 8000;

function fail(message) {
  console.error(`issue-link: ${message}`);
  process.exit(1);
}

const args = process.argv.slice(2);
if (args.length < 1 || args.length > 2 || args.some((arg) => arg.startsWith('-'))) {
  console.error(USAGE);
  process.exit(2);
}
const [draft, given] = args;
if (!existsSync(draft)) {
  fail(`${draft} is not there.`);
}
const text = readFileSync(draft, 'utf8');
const title = text.match(TITLE);
if (!title) {
  fail(`${draft} opens with no title. Write it as a # heading.`);
}
const body = text.slice(title.index + title[0].length).trim();
const configured = existsSync(CONFIG) ? JSON.parse(readFileSync(CONFIG, 'utf8')).source : undefined;
const source = (given ?? configured ?? DEFAULT_SOURCE).replace(/\/+$/, '');
const link = `${source}/issues/new?title=${encodeURIComponent(title[1].trim())}&body=${encodeURIComponent(body)}`;
console.log(link);
if (link.length > LONGEST) {
  console.error(`issue-link: the link holds ${link.length} characters, past what a browser may keep. Shorten the draft, or paste the body by hand.`);
}
