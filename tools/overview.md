# Tools

What coentrify provides beside the standards: the scripts behind its own commands and standards, and a spec for every check or helper a project builds for itself.

## Scripts

These run with Node from the installed package, in `node_modules/coentrify/src/tools/scripts`, never copied into a project, so they follow every change to coentrify's own format.

- `scripts/check-assets.mjs` - checks a game's asset layers: the style, the blueprint of every list, and the states every entry's traits need ([Asset Layers](../standards/gamedev/asset-layers.md))
- `scripts/coentrify-update.mjs` - works out an update from the installed package and the project's version on npm: replaces the tracked standards that changed with their overview lines and budget entries, names the new standards a tracked one now rests on, to adopt at once, reports the rest for the agent, the changed specs included, and adopts the standards and modules the director accepts, with the links to them ([Commands](../commands.md#coentrify-update))
- `scripts/issue-link.mjs` - prints a prefilled link to a new issue at the source from a filing's draft, or from a ticket's Issue For Coentrify section, for the director to file in one click ([File A Change With Coentrify](../standards/behavior/file-a-change-with-coentrify.md))
- `scripts/roll-flavors.mjs` - rolls a flavor for a layer of a game, among the ones that fit its picks, checks the picks against their conflicts and needs, and gathers every pick with what it weighs for a weigh ([Game Flavors](../standards/gamedev/game-flavors.md), [Weighing A Game](../standards/gamedev/weighing-a-game.md))
- `scripts/unlink-missing-standards.mjs` - removes every link to a standard the project did not adopt, and keeps the words, but drops its line from an overview, after the setup and after every update, and lists each removed link to a section, for the agent to offer its standard

## Specs

A project's agent builds these in the project's own stack, since each project runs a different app, shell and toolchain. A spec says where the tool runs, what it does, and the cases an implementation has to pass.

- [Commit Gate](specs/commit-gate.md) - refuses a commit that does not hang on its check, and one that follows a `git add` in the same command
- [Reload Core Rules](specs/reload-core-rules.md) - prints the Core Rules after a compaction
- [Refuse Wrap-Up Questions](specs/refuse-wrap-up-questions.md) - refuses answer buttons at the end of a turn
- [Landing](specs/landing.md) - a guarded merge of a story, the checks on main and a gated docs commit, for several agents at once
- [Changelog Append](specs/changelog-append.md) - one line in a version's changelog, in a fixed shape
- [Healing Append](specs/healing-append.md) - one entry in the healing log, in a fixed shape
- [Attribution Check](specs/attribution-check.md) - refuses a commit message with a line that opens with attribution
- [Coentrify JSON Check](specs/coentrify-json-check.md) - keeps `coentrify.json` true, and refuses a hand edit of a tracked standard
- [Ticket Id Check](specs/ticket-id-check.md) - refuses a commit of code or tests without a ticket's or a story's id as its scope, in the tickets workflow
- [Log Append](specs/log-append.md) - adds a message's time heading to the request log, on the page of its DEV day, which turns at 04:00
- [Push Check](specs/push-check.md) - refuses the end of a turn once while main is ahead of its upstream, with `push` on `automatic`
- [Anchor Check](specs/anchor-check.md) - refuses a link whose anchor names no heading on its page, and a ticket's `go` or `feedback` that names no log entry
