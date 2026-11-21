#!/usr/bin/env node
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const PACKAGE = 'coentrify';
const WIKI = 'https://coentrify.com';
const INSTALLED = join('node_modules', PACKAGE);
const SOURCE = `${INSTALLED}/source`;
const INSTALLED_MANIFEST = join(INSTALLED, 'package.json');
const CHANGELOG = join(SOURCE, 'changelog');
const CONFIG = 'coentrify.json';
const README = new URL('../source/readme.md', import.meta.url);
const VERSION_PAGE = /^(\d+\.\d+\.\d+)\.md$/;
const SUMMARY = /^# .+\n+([^\n]+)/;
const INSTALL = `npm install --save-dev ${PACKAGE}`;
const RAISE = `npm install --save-dev ${PACKAGE}@latest`;
const UPDATE_STEP = `bring this project up to date by following coentrify update, ${SOURCE}/commands.md#coentrify-update`;
const USAGE = 'usage: npx coentrify [make-no-mistakes | update | explain | check]';
const HEADER = `coentrify - spec-driven development, ${WIKI}`;

function next(step) {
  console.log(HEADER);
  console.log(`Next step: ${step}`);
}

function readJson(path) {
  return JSON.parse(readFileSync(path, 'utf8'));
}

function parts(version) {
  return version.split('.').map(Number);
}

function compare(first, second) {
  const [a, b] = [parts(first), parts(second)];
  return a[0] - b[0] || a[1] - b[1] || a[2] - b[2];
}

function migrations(from, to) {
  return readdirSync(CHANGELOG)
    .map((file) => file.match(VERSION_PAGE)?.[1])
    .filter((version) => version !== undefined && compare(version, from) > 0 && compare(version, to) <= 0)
    .sort(compare)
    .map((version) => `- ${version}: ${readFileSync(join(CHANGELOG, `${version}.md`), 'utf8').match(SUMMARY)?.[1] ?? ''}`);
}

function check() {
  if (!existsSync(CONFIG)) {
    console.log(`coentrify: no ${CONFIG} here. Set the project up with npx coentrify.`);
    return;
  }
  if (!existsSync(INSTALLED_MANIFEST)) {
    console.log(`coentrify: the project uses coentrify, and it is not installed. Install it with ${INSTALL}.`);
    return;
  }
  const project = readJson(CONFIG).version;
  const installed = readJson(INSTALLED_MANIFEST).version;
  if (typeof project !== 'string') {
    console.log(`coentrify: ${CONFIG} has no version. Next step: ${UPDATE_STEP}`);
  } else if (compare(installed, project) > 0) {
    console.log(`coentrify: ${CONFIG} is at ${project}, and the installed coentrify is ${installed}. Next step: ${UPDATE_STEP}`);
    console.log('What changed for a project, by version:');
    console.log(migrations(project, installed).join('\n'));
  } else if (compare(installed, project) < 0) {
    console.log(`coentrify: ${CONFIG} is at ${project}, ahead of the installed coentrify ${installed}. Install it with ${INSTALL}@${project}.`);
  }
}

const COMMANDS = {
  setup: () => next(`install coentrify with ${INSTALL}, then set it up in this project by following its onboarding, ${SOURCE}/onboarding.md`),
  'make-no-mistakes': () => next(`install coentrify with ${INSTALL}, then set it up in this project autonomously by following coentrify make no mistakes, ${SOURCE}/commands.md#coentrify-make-no-mistakes`),
  update: () => next(`raise coentrify to its latest version with ${RAISE}, then ${UPDATE_STEP}`),
  explain: () => console.log(readFileSync(README, 'utf8')),
  check,
};

const command = process.argv.slice(2).join('-') || 'setup';
const run = COMMANDS[command];
if (run === undefined) {
  console.error(USAGE);
  process.exit(1);
}
run();
