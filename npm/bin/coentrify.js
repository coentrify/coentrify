#!/usr/bin/env node
const SOURCE = 'https://github.com/coentrify/coentrify';
const BASE = `${SOURCE}/blob/main`;
const USAGE = 'usage: npx coentrify [update | explain | make-no-mistakes]';
const NEXT_STEPS = {
  setup: (base) => `Next step: set up coentrify in this project by following its onboarding, ${base}/onboarding.md`,
  'make-no-mistakes': (base) => `Next step: set up coentrify in this project autonomously by following coentrify make no mistakes, ${base}/commands.md#coentrify-make-no-mistakes`,
  update: (base) => `Next step: bring this project up to date by following coentrify update, ${base}/commands.md#coentrify-update`,
  explain: (base) => `Next step: explain coentrify from its readme, ${base}/readme.md`,
};

const command = process.argv.slice(2).join('-') || 'setup';
const step = NEXT_STEPS[command];
if (step === undefined) {
  console.error(USAGE);
  process.exit(1);
}
console.log(`coentrify - spec-driven development, ${SOURCE}`);
console.log(step(BASE));
