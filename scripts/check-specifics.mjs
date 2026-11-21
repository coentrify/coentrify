import { execFileSync, spawnSync } from 'node:child_process';

const STANDARDS_FOLDER = 'standards';
const INDEX_PAGE = 'overview.md';
const VERSION_TAG_PATTERN = 'v[0-9]*';
const MODEL = 'claude-sonnet-5-5';
const BUDGET_USD = '5';
const COUNT_LINE = /^FINDINGS: (\d+)$/m;
const ALL_FLAG = '--all';
const GLOSSARY = 'glossary.md';

function git(args) {
  return execFileSync('git', args, { encoding: 'utf8' }).trim();
}

const tag = git(['describe', '--tags', '--abbrev=0', '--match', VERSION_TAG_PATTERN]);
const named = process.argv.slice(2).filter((arg) => arg.endsWith('.md'));
const pages = (
  named.length > 0
    ? named
    : (process.argv.includes(ALL_FLAG)
        ? git(['ls-files', '--', STANDARDS_FOLDER])
        : git(['diff', '--name-only', '--diff-filter=ACMR', tag, '--', STANDARDS_FOLDER])
      ).split('\n')
).filter((path) => path.endsWith('.md') && !path.endsWith(`/${INDEX_PAGE}`));

if (pages.length === 0) {
  console.log(`specifics: no standard changed since ${tag}`);
  process.exit(0);
}

const prompt = `You check the standards of coentrify for content left over from one project. Coentrify is a set of generic standards that any project adopts, so every line has to make sense to a reader in a project they have never seen.

Coentrify has a vocabulary of its own, and every adopting project gets it. ${GLOSSARY} holds its most used terms: read it first. The standards define more: roles such as the director and the conductor, ticket kinds, workflow steps such as Veto, phase gates, hygiene checks, specs and docs a project keeps. Before you report a term, search the repository for it: a term that ${GLOSSARY} or a standard defines or prescribes is generic, and never a finding.

These are findings:
- a word in a language other than English, such as a Dutch button label
- the name of one project's component, feature, screen, field, level, character or story, such as a level called The Underworld
- "this workspace" or "this project" meaning one repository, or a script, skill or tool told as if it already exists in one project
- a past incident told as if the reader was there
- a path, port, host or setup that fits one machine or one team

These are fine:
- anything a standard prescribes for every project to make: a file, folder, doc, check, script, constant or spec
- a number that is the rule itself
- a common phrase or metaphor of the craft, and a clearly marked example a reader can follow
- a game term inside standards/gamedev/, and the names of public tools

Read each of these files in full:
${pages.map((page) => `- ${page}`).join('\n')}

Report one finding per line as \`path:line - the quoted text - why only one project would recognize it\`. Report only what you are sure of. End with exactly one line \`FINDINGS: <count>\`, with 0 when there is nothing.`;

console.log(`specifics: a fresh agent reads ${pages.length} standards${named.length > 0 || process.argv.includes(ALL_FLAG) ? '' : ` changed since ${tag}`}`);
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
