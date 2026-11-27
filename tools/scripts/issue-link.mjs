#!/usr/bin/env node
// Prints a prefilled link to a new issue at the source, from a filing's draft.
//
// usage: issue-link.mjs <draft> [source]
//
// Run from the root of the project. The draft opens with its title as a `# ` heading, and the rest is the
// body. A ticket can be the draft: its `Issue For Coentrify` section holds the title on a `Title:` line,
// and what follows it is the body, its headings raised so the shallowest is a `## `. The source defaults to the one coentrify.json names. The link goes on stdout alone, so the agent
// copies it whole into its reply, and a warning goes on stderr. The link always ends in a letter, a digit
// or an escape, so a chat that drops trailing punctuation from a bare link keeps it whole.
import { existsSync, readFileSync } from 'node:fs';

const USAGE = 'usage: issue-link.mjs <draft> [source]';
const CONFIG = 'coentrify.json';
const DEFAULT_SOURCE = 'https://github.com/coentrify/coentrify';
const TITLE = /^# (.+)$/m;
const SECTION = /^(#{1,6}) Issue For Coentrify\s*$/m;
const SECTION_TITLE = /^Title: (.+)$/m;
const HEADING = /^(#{1,6}) /;
const LONGEST = 8000;
const RESERVED = /[!'()*]/g;
const TRAILING = /[._~]$/;

// Encodes a part of the link so no autolinker can cut it short: the characters encodeURIComponent leaves,
// escaped everywhere, and a last ., _ or ~ escaped too, since a chat drops trailing punctuation from a link.
function encode(text) {
  const escape = (character) => `%${character.charCodeAt(0).toString(16).toUpperCase()}`;
  return encodeURIComponent(text).replace(RESERVED, escape).replace(TRAILING, escape);
}

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
// The title and the body of a ticket's Issue For Coentrify section, or null when the file has none.
function fromSection(text) {
  const section = text.match(SECTION);
  if (!section) {
    return null;
  }
  const level = section[1].length;
  const lines = [];
  for (const line of text.slice(section.index + section[0].length).split('\n')) {
    const heading = line.match(HEADING);
    if (heading && heading[1].length <= level) {
      break;
    }
    lines.push(line);
  }
  const part = lines.join('\n');
  const title = part.match(SECTION_TITLE);
  if (!title) {
    fail(`${draft} has an Issue For Coentrify section with no Title: line.`);
  }
  const rest = part.slice(title.index + title[0].length).split('\n');
  const depths = rest.map((line) => line.match(HEADING)?.[1].length).filter((depth) => depth !== undefined);
  const shift = depths.length ? Math.min(...depths) - 2 : 0;
  const body = rest.map((line) => line.replace(HEADING, (whole, hashes) => `${'#'.repeat(hashes.length - shift)} `)).join('\n');
  return [title[1].trim(), body.trim()];
}

const text = readFileSync(draft, 'utf8');
let [heading, body] = fromSection(text) ?? [];
if (heading === undefined) {
  const title = text.match(TITLE);
  if (!title) {
    fail(`${draft} opens with no title. Write it as a # heading, or keep it in an Issue For Coentrify section.`);
  }
  heading = title[1].trim();
  body = text.slice(title.index + title[0].length).trim();
}
const configured = existsSync(CONFIG) ? JSON.parse(readFileSync(CONFIG, 'utf8')).source : undefined;
const source = (given ?? configured ?? DEFAULT_SOURCE).replace(/\/+$/, '');
const link = `${source}/issues/new?title=${encode(heading)}&body=${encode(body)}`;
console.log(link);
if (link.length > LONGEST) {
  console.error(`issue-link: the link holds ${link.length} characters, past what a browser may keep. Shorten the draft, or paste the body by hand.`);
}
