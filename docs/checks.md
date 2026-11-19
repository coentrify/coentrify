# Checks

The checks this repository runs on itself.

- `npm run build:wiki` fails on a dead link.
- `npm run lint:standards` fails when a standard is missing from the overview of its module, or a module from the standards overview.
- `npm run lint:standards` also fails on a heading with a lowercase word outside code, and on a hard-wrapped line.
- `npm run lint:standards` fails on an overview line that leaves out an entry of its standard's Relevant For list.
- `npm run lint:standards -- --why` prints every standard without a Why section.
- `npm run lint:standards` fails on a semicolon in prose, a filler word such as genuinely or truly, and a British spelling, outside code.
- It also fails on a standard that does not open with its rule, a Why that is not the first section, and a standard that does not end with Related.
- `npm run lint:standards -- --budget` prints every standard past its word budget: 600 for a standard, 1,200 for a template and 3,000 for a hub.
- A part page is left out of that list. Its title opens with the title of its parent before a colon, and the parent carries the Why.
- Every version has a page in `changelog/`, and `npm run lint:standards` fails when the overview there does not list it.
- The pre-commit hook refuses a commit that changes a standard without naming it on the page of the latest version.
- `npm run changelog:standards` writes that list, and the line that counts it, from what changed since the last tag. With `-- --check` it only fails when the page does not match.
- A standard that is back at its text in the latest version tag passes without a name, so its entry leaves the changelog in the same commit.
- A clone without a version tag cannot tell, and the hook says so.
- The hook is switched on once per clone, with `git config core.hooksPath .githooks`.
- In a Claude Code session here, `.claude/settings.json` runs the commit gate from the [tools](../tools/overview.md) before every shell command. It refuses a commit that does not hang on its check with `&&`, and a commit that follows a `git add` in the same command.
- `npm run check:specifics` has a fresh agent read every standard changed since the last tag for content left over from one project, and fails on a finding. With `-- --all` it reads every standard. A version is called only once it passes.
- The Tag the version workflow is started by hand when a version is called. It tags main with the latest version in the changelog, and publishes the release of that tag.
- The page of a version opens with its summary, and the workflow fails without one.
- A tag without a release gets its release. The workflow fails when both exist.
- `npm run ci:tag -- --notes` prints the release text and changes nothing.
