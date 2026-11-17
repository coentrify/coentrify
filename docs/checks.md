# Checks

The checks this repository runs on itself.

- `npm run build:wiki` fails on a dead link.
- `npm run lint:standards` fails when a standard is missing from the overview of its module, or a module from the standards overview.
- `npm run lint:standards` also fails on a header out of Title Case and on a hard-wrapped line.
- `npm run lint:standards -- --why` prints every standard without a Why section.
- The pre-commit hook refuses a commit that changes a standard without naming it in the latest version of the changelog.
- The hook is switched on once per clone, with `git config core.hooksPath .githooks`.
- The Tag the version workflow is started by hand when a version is called. It tags main with the top version of the changelog, and publishes the release of that tag.
- A version in the changelog opens with its summary: a line, and a short list of what the version brings. The workflow fails on a version without one.
- The workflow fails when the tag and its release both exist. A tag without a release gets its release.
- `npm run ci:tag -- --notes` prints the text of the release, and changes nothing.
