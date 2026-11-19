import { execFileSync, spawnSync } from 'node:child_process';

const STANDARDS_FOLDER = 'standards';
const INDEX_PAGE = 'overview.md';
const VERSION_TAG_PATTERN = 'v[0-9]*';
const MODEL = 'claude-sonnet-5-5';
const BUDGET_USD = '5';
const COUNT_LINE = /^FINDINGS: (\d+)$/m;
const ALL_FLAG = '--all';

function git(args) {
  return execFileSync('git', args, { encoding: 'utf8' }).trim();
}

const tag = git(['describe', '--tags', '--abbrev=0', '--match', VERSION_TAG_PATTERN]);
const pages = (
  process.argv.includes(ALL_FLAG)
    ? git(['ls-files', '--', STANDARDS_FOLDER])
    : git(['diff', '--name-only', '--diff-filter=ACMR', tag, '--', STANDARDS_FOLDER])
)
  .split('\n')
  .filter((path) => path.endsWith('.md') && !path.endsWith(`/${INDEX_PAGE}`));

if (pages.length === 0) {
  console.log(`specifics: no standard changed since ${tag}`);
  process.exit(0);
}

const prompt = `You check standards for content left over from one project. The standards are generic rules that any project adopts, so every example has to work for a reader in any project.

Read each of these files in full:
${pages.map((page) => `- ${page}`).join('\n')}

Report every piece of project-specific content: a word in a language other than English, a name of one project's component, feature, screen, field, level, character, story or file, a reference to "this workspace" or "this project", a script, skill or tool that exists in one project only, a past incident told as if the reader knows it, and a number or setup that fits one machine or one team. A game term inside standards/gamedev/ is fine. A clearly marked example a reader can follow, and the names of public tools, are fine.

Report one finding per line as \`path:line - the quoted text - why it is project-specific\`. End with exactly one line \`FINDINGS: <count>\`, with 0 when there is nothing.`;

console.log(`specifics: a fresh agent reads ${pages.length} standards changed since ${tag}`);
const run = spawnSync(
  'claude',
  ['-p', prompt, '--model', MODEL, '--setting-sources', '', '--allowedTools', 'Read,Grep,Glob', '--max-budget-usd', BUDGET_USD],
  { encoding: 'utf8', maxBuffer: 16 * 1024 * 1024 },
);
if (run.status !== 0) {
  console.error(`specifics: the agent did not finish: ${run.stderr.trim()}`);
  process.exit(2);
}
const output = run.stdout.trim();
console.log(output);
const count = output.match(COUNT_LINE);
if (!count) {
  console.error('specifics: the agent gave no FINDINGS line, so the check did not pass');
  process.exit(2);
}
process.exit(Number(count[1]) === 0 ? 0 : 1);
