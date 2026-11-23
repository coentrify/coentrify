# Tools

What coentrify provides beside the standards: the scripts behind its own commands, and a spec for every check or helper a project builds for itself.

## Scripts

These run with Node from the installed package, in `node_modules/coentrify/src/tools/scripts`, never copied into a project, so they follow every change to coentrify's own format.

- `scripts/coentrify-update.mjs` - works out an update from the installed package and the project's version on npm: replaces the tracked standards that changed with their overview lines and budget entries, reports the rest for the agent, the changed specs included, and adopts the standards and modules the director accepts, with the links to them ([Commands](../commands.md#coentrify-update))
- `scripts/unlink-missing-standards.mjs` - removes every link to a standard the project did not adopt, and keeps the words, but drops its line from an overview, after the setup and after every update

## Specs

A project's agent builds these in the project's own stack, since each project runs a different app, shell and toolchain. A spec says where the tool runs, what it does, and the cases an implementation has to pass.

- [Commit Gate](specs/commit-gate.md) - refuses a commit that does not hang on its check, and one that follows a `git add` in the same command
- [Reload Core Rules](specs/reload-core-rules.md) - prints the Core Rules after a compaction
- [Refuse Wrap-Up Questions](specs/refuse-wrap-up-questions.md) - refuses answer buttons at the end of a turn
- [Landing](specs/landing.md) - a guarded merge of a story, the checks on main and a gated docs commit, for several agents at once
- [Changelog Append](specs/changelog-append.md) - one line in a version's changelog, in a fixed shape
- [Healing Append](specs/healing-append.md) - one entry in the healing log, in a fixed shape
- [Coentrify JSON Check](specs/coentrify-json-check.md) - keeps `coentrify.json` true, and refuses a hand edit of a tracked standard
