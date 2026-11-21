# Plan

Version 0.1.0: coentrify ships as an npm package that a project installs as a dev dependency, so an agent reaches the source wherever npm works, a cloud session included.

- The package carries the source (active)
- The bin works from the installed package
- Setup reads from `node_modules`
- The update works from the package
- The docs follow
- Call 0.1.0

## The Package Carries The Source

- The publish step copies the root pages, `standards/`, `tools/` and `changelog/` into the package. `docs/`, `scripts/`, the wiki config and `CLAUDE.md` stay out, and git holds no second copy.
- The package's version is coentrify's version, 0.1.0 for both. A check fails when `npm/package.json` and the latest changelog page disagree.

## The Bin Works From The Installed Package

- `npx coentrify` and `make no mistakes` have the agent install coentrify as a dev dependency, then follow the onboarding in `node_modules/coentrify`.
- `update` has the agent raise the dev dependency to the latest version, then follow coentrify update there.
- `explain` prints the readme, so nothing needs installing.
- `check` compares the version in `coentrify.json` with the installed one. On a difference it warns, names the migrations the changelog lists in between, and still exits 0.

## Setup Reads From `node_modules`

- Set Up installs the dev dependency. A project without a `package.json` gets one.
- `source` in `coentrify.json` names the package.
- The entry point links the commands in `node_modules/coentrify`.
- Every session starts with `coentrify check`: a session start hook where the agent has one, such as Claude Code, and a line in the entry point elsewhere. It advises and never blocks.

## The Update Works From The Package

- The update script works from the package alone, without git or a clone.
- The publish step works out from git what changed between each version and the next, and ships it in the package, so a project at any earlier version, 0.0.8 included, can update.
- The update and unlink scripts stay in Python for now. Porting them to Node, so the bin runs them, stays on the roadmap.

## The Docs Follow

- The readme, Contributions, Checks, coentrify.json and the tools overview say how the package delivers the source.

## Call 0.1.0

- The summary names the migration: a project installs coentrify as a dev dependency, points its entry point at `node_modules/coentrify`, and adds the session check.
- Tag the version, then publish the package at 0.1.0.
