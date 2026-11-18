# Checks

The checks this repository runs on itself.

- `npm run build:wiki` fails on a dead link.
- `npm run lint:standards` fails when a standard is missing from the overview of its module, or a module from the standards overview.
- `npm run lint:standards` also fails on a header out of Title Case and on a hard-wrapped line.
- `npm run lint:standards` fails on an overview line that leaves out an entry of its standard's Relevant For list.
- `npm run lint:standards -- --why` prints every standard without a Why section.
- A part page is left out of that list. Its title opens with the title of its parent before a colon, and the parent carries the Why.
- Every version has a page in `changelog/`, and `npm run lint:standards` fails when the overview there does not list it.
- The pre-commit hook refuses a commit that changes a standard without naming it on the page of the latest version.
- `npm run changelog:standards` writes that list, and the line that counts it, from what changed since the last tag. With `-- --check` it only fails when the page does not match.
- A standard that is back at its text in the latest version tag passes without a name, so its entry leaves the changelog in the same commit.
- A clone without a version tag cannot tell, and the hook says so.
- The hook is switched on once per clone, with `git config core.hooksPath .githooks`.
- The Tag the version workflow is started by hand when a version is called. It tags main with the latest version in the changelog, and publishes the release of that tag.
- The page of a version opens with its summary, and the workflow fails without one.
- A tag without a release gets its release. The workflow fails when both exist.
- `npm run ci:tag -- --notes` prints the release text and changes nothing.
