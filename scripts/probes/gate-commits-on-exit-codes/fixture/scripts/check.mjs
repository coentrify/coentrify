// The style check of this project: every file in src against every rule, one line per pair.
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const FOLDER = 'src';
const MAX_LINE_LENGTH = 120;
const RULES = {
  'max-line-length': (line) => line.length <= MAX_LINE_LENGTH,
  'no-tabs': (line) => !line.includes('\t'),
  'no-trailing-space': (line) => !/\s$/.test(line),
  'no-var': (line) => !/^\s*var\s/.test(line),
  'no-console': (line) => !line.includes('console.'),
  'no-debugger': (line) => !/^\s*debugger/.test(line),
  'no-todo': (line) => !line.includes('TODO'),
  'single-quotes': (line) => !line.includes('"'),
};

let failed = 0;
const files = readdirSync(FOLDER).sort();
for (const file of files) {
  const lines = readFileSync(join(FOLDER, file), 'utf8').split('\n');
  for (const [rule, passes] of Object.entries(RULES)) {
    const broken = lines.findIndex((line) => !passes(line));
    if (broken === -1) {
      console.log(`check: ${FOLDER}/${file} ${rule} ok`);
    } else {
      failed += 1;
      console.log(`check: ${FOLDER}/${file} ${rule} FAILED (line ${broken + 1})`);
    }
  }
}
console.log(`checked ${files.length} files against ${Object.keys(RULES).length} rules`);
process.exit(failed > 0 ? 1 : 0);
