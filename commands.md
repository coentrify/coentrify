# Commands

What a director can ask an agent to do with coentrify. A command is matched by intent, so the exact words do not matter.

In a fresh project the first prompt is `install coentrify from npm, then set it up`, or a command in place of the setup, as the [Quick Start](readme.md#quick-start) shows. The install stands in the director's words, so no agent takes it as a tool's order. Once the project is set up, its entry point leads to these commands.

- `coentrify` - set the project up with the director in the loop: the agent recommends, and the director chooses
- `coentrify make no mistakes` - set the project up autonomously: the agent chooses, and the director vetoes afterward
- `coentrify explain` - say what coentrify is
- `coentrify update` - bring the project up to date
- `coentrify game` - start a game: the agent asks for the mode first, sets the project up, and runs the phases
- `coentrify extract flavors` - sweep the project, or a public game, for the strategies it used, match them against the catalog, record them, and file only what the catalog lacks
- `coentrify weigh` - weigh a game's choices as a whole, and name what could bite once players have it

Every command ends with the greeting, the way [Greet](onboarding.md#greet) says, and so does a plain prompt matched to one by intent.

## `coentrify`

Any request to set the project up. Follow the [onboarding](onboarding.md).

## `coentrify make no mistakes`

The onboarding, run autonomously. The agent answers each of the onboarding's questions itself, from its analysis of the project. Every choice the agent made is listed afterward, for the director to veto.

The agent starts with this line:

```
coentrifying. making no mistakes.
```

## `coentrify explain`

Any question about what coentrify is. Explain from the [readme](readme.md), the [philosophy](philosophy.md) and [how it works](how-it-works.md).

## `coentrify update`

Any request to bring the project up to date. The update script from the [tools](tools/overview.md) works out what changed since the project's version, and the agent handles what needs judgment.

With `update` on `automatic`, the director's setting in `coentrify.json`, the session check starts the update when the installed coentrify is newer than the project, with no other go. Nothing is raised then: the installed version is the one to reach. With builders at work, the conductor hands the update to an agent of its own, and a builder leaves it to the conductor.

- In the tickets workflow, file a heal ticket first, commit the update under its id, and land it archived like any heal ticket ([Work Tracking](standards/tickets-workflow/work-tracking.md)).
- Raise coentrify to its latest version, `npm install --save-dev coentrify@latest`, unless the session check started the update.
- Run the update script from the installed package for the plan, `node node_modules/coentrify/src/tools/scripts/coentrify-update.mjs`, and read the [changelog](changelog/overview.md) from the project's version on. The script fetches the project's version from npm to compare with.
- A project from before 0.1.0 sets coentrify up again, the way the [onboarding](onboarding.md#an-earlier-coentrify) says for an earlier coentrify.
- Read `standards/decisions.md` for the reasoning behind the earlier choices.
- With `update` on `review`, show the director a changed rule in a tracked standard before it is replaced. With `automatic`, it is replaced at once, and the report names it.
- A standard whose update the director declines is set to `customized` first, with the reason in the decisions.
- Run it again with `--apply`, which replaces the tracked standards, their overview lines and their entries in each module's budget list, and writes the new version.
- Run the unlink script again, since a replaced standard brings its links back.
- Rebuild each check or helper whose spec the plan names as changed.
- Apply each setup change the changelog names since the project's version, the way the onboarding now reads.
- Report the changes for a customized standard, and a standard renamed, moved or removed at the source.
- Suggest the new standards and modules worth adopting, by name, and surface one that has the same name as one of the project's own.
- Once the update is committed, adopt the ones the director accepts in one call, `node node_modules/coentrify/src/tools/scripts/coentrify-update.mjs --adopt <module>[/<standard>]...`. It copies them in with their budget entries, lists them as `tracked`, and brings the links to them back in the tracked standards.
- An ok in a later session is adopted the same way, while the project is at the installed version.
- Set every adopted standard up in full, the way [Set Up](onboarding.md#set-up) says, and commit the adoption on its own.
- Update the decisions.

## `coentrify game`

Any request to start or make a game. Follow [Game Onboarding](standards/gamedev/game-onboarding.md): the mode comes first, before any other question.

## `coentrify extract flavors`

Any request to extract the flavors a game used, from this project or from a public game by name. Follow [Extracting Flavors](standards/gamedev/game-flavors.md#extracting-flavors).

## `coentrify weigh`

Any request to weigh a game's choices, check its picks before a gate or a release, or find what could bite once it is out. Follow [Weighing A Game](standards/gamedev/weighing-a-game.md).
