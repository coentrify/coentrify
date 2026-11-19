#!/usr/bin/env node
const SOURCE = 'https://github.com/coentrify/coentrify';
const BASE = `${SOURCE}/blob/main`;
const USAGE = 'usage: npx coentrify [update | explain]';
const NEXT_STEPS = {
  setup: (base) => `Next step: set up coentrify in this project by following its onboarding, ${base}/onboarding.md`,
  update: (base) => `Next step: bring this project up to date by following coentrify update, ${base}/commands.md#coentrify-update`,
  explain: (base) => `Next step: explain coentrify from its readme, ${base}/readme.md`,
};

const [command = 'setup'] = process.argv.slice(2);
const step = NEXT_STEPS[command];
if (step === undefined) {
  console.error(USAGE);
  process.exit(1);
}
console.log(`coentrify - spec-driven development, ${SOURCE}`);
console.log(step(BASE));
