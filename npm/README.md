# coentrify

`npx coentrify` points an agent at [coentrify](https://github.com/coentrify/coentrify): standards, checks and tools for spec-driven development with AI agents.

The package holds the source of coentrify under `src/`: its standards, its tools and its changelog. A project installs it as a dev dependency, and an agent reads the source from `node_modules`. The package's version is coentrify's version.

- `npx coentrify` - sets the project up with you in the loop: the agent recommends, and you choose
- `npx coentrify make no mistakes` - sets the project up autonomously: the agent chooses, and you veto afterward
- `npx coentrify update` - brings the project up to date
- `npx coentrify explain` - says what coentrify is
- `npx coentrify game` - starts a game: the agent asks for the mode first, sets the project up, and runs the phases
- `npx coentrify extract flavors` - sweeps the project, or a public game by name, for the strategies it used, matches them against the catalog, records them, and files only what the catalog lacks
- `npx coentrify weigh` - weighs a game's choices as a whole, and names what could bite once players have it
- `npx coentrify check` - says when `coentrify.json` is behind the installed version, and what changed in between. It runs at the start of a session, and never blocks. With `update` on `automatic` in `coentrify.json`, the agent then brings the project up to date at once.
