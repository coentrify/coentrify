# Checks

The checks this repository runs on itself.

- `npm run build:wiki` fails on a dead link.
- `npm run lint:standards` fails when a standard is missing from the overview of its module, or a module from the standards overview.
- `npm run lint:standards` also fails on a heading with a lowercase word outside code, and on a hard-wrapped line, on every markdown page in the repository.
- `npm run lint:standards` fails on an overview line that leaves out what its standard's `Relevant for:` line names.
- `npm run lint:standards -- --why` prints every standard without a Why section.
- A part page is left out of that list. Its title opens with the title of its parent before a colon, and the parent carries the Why. It keeps the word budget of a standard.
- `npm run lint:standards` fails on an anchor that names no heading of its page, slugged the way GitHub slugs it. The wiki slugs its headings the same way, from the one function in `scripts/heading-slug.mjs`.
- `npm run lint:standards` fails on a semicolon in prose, a filler word such as `genuinely` or `truly`, and a British spelling, outside code, on every markdown page as well. A line with a DOI is a citation, which quotes a title as published, so its spelling passes.
- It also fails on a standard that does not open with its rule, a Why that is not the first section, and a standard that does not end with Related.
- `npm run lint:standards -- --budget` prints every standard past its word budget: 600 for a standard, 1,200 for a template and 3,000 for a hub. A module's `budget-exceptions.json` raises the budget of a page it lists to the words accepted there.
- Every version has a page in `changelog/`, and `npm run lint:standards` fails when the overview there does not list it.
- The pre-commit hook refuses a commit that changes a standard without naming it on the page of the latest version.
- `npm run changelog:standards` writes that list, and the line that counts it, from what changed since the last tag. With `-- --check` it only fails when the page does not match.
- A standard that is back at its text in the latest version tag passes without a name. The hook refuses an entry for it, so the entry leaves the changelog in the same commit.
- Once the latest version is tagged, the hook refuses a change to a standard until the page of the next version is open.
- A clone without a version tag cannot tell, and the hook says so.
- The commit-msg hook refuses a commit whose subject is not a conventional commit, `type(scope): description`, with a type and a lowercase description as [Commits](../standards/commits/commits.md) names them. A merge commit that git writes passes. It also refuses a line that opens with attribution, as the [Attribution Check](../tools/specs/attribution-check.md) says.
- The hooks are switched on once per clone, with `git config core.hooksPath .githooks`.
- In a Claude Code session here, `.claude/settings.json` runs this repository's commit gate, `scripts/gate-commit-on-exit-codes.py`, before every shell command. It refuses a commit that does not hang on its check with `&&`, and a commit that follows a `git add` in the same command.
- `npm run check:specifics` has a fresh agent read every standard changed since the last tag for content left over from one project, and fails on a finding. It reads with the glossary and the standards' own vocabulary, so a term a standard defines is never a finding. With `-- --all` it reads every standard, and with `-- <page>` the pages named. A version is called only once it passes.
- The Release the version workflow, `release.yml`, is started by hand when a version is called. It tags main with the latest version in the changelog, publishes the release of that tag, and then publishes the package to npm as its trusted publisher, with no token kept anywhere.
- The page of a version opens with its summary, and the workflow fails without one.
- A tag without a release gets its release. The workflow fails when both exist.
- `npm run tag:version -- --notes` prints the release text and changes nothing.
- `npm run publish:npm` refuses a version that npm has already, a checkout that is not the version's tag, and a working tree with changes.
