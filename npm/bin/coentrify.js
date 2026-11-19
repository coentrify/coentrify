#!/usr/bin/env node
import { readFileSync } from 'node:fs';

const SOURCE = 'https://github.com/coentrify/coentrify';
const MANIFEST = new URL('../package.json', import.meta.url);
const USAGE = 'usage: npx coentrify [update | explain]';
const NEXT_STEPS = {
  setup: (base) => `Next step: set up coentrify in this project by following its onboarding, ${base}/onboarding.md`,
  update: (base) => `Next step: bring this project up to date by following coentrify update, ${base}/commands.md#coentrify-update`,
  explain: (base) => `Next step: explain coentrify from its readme, ${base}/readme.md`,
};

const { version } = JSON.parse(readFileSync(MANIFEST, 'utf8'));
const [command = 'setup'] = process.argv.slice(2);
const step = NEXT_STEPS[command];
if (step === undefined) {
  console.error(USAGE);
  process.exit(1);
}
const base = `${SOURCE}/blob/v${version}`;
console.log(`coentrify ${version} - spec-driven development, ${SOURCE}`);
console.log(step(base));
