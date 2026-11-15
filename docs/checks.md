# Checks

The checks this repository runs on itself.

- `npm run build:wiki` fails on a dead link.
- `npm run lint:standards` fails when a standard is missing from the overview.
- The pre-commit hook refuses a commit that changes a standard without naming it in the latest version of the changelog.
- The hook is switched on once per clone, with `git config core.hooksPath .githooks`.
