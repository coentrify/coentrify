# Commands

What a director can ask an agent to do with coentrify. A command is matched by intent, so the exact words do not matter.

In a fresh project the first prompt is `npx coentrify`, as the [Quick Start](readme.md#quick-start) shows. Once the project is set up, its entry point leads to these commands.

- `coentrify` - set the project up with the director in the loop: the agent recommends, and the director chooses
- `coentrify make no mistakes` - set the project up autonomously: the agent chooses, and the director vetoes afterward
- `coentrify explain` - say what coentrify is
- `coentrify update` - bring the project up to date

An agent shows the greeting from the [onboarding](onboarding.md) before any command.

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

With `update` on `automatic`, the session check starts the update when the installed coentrify is newer than the project, and no go is waited for. Nothing is raised then: the installed version is the one to reach. With builders at work, the conductor hands the update to an agent of its own, and a builder leaves it to the conductor.

- Raise coentrify to its latest version, `npm install --save-dev coentrify@latest`, unless the session check started the update.
- Run the update script from the installed package for the plan, `python3 node_modules/coentrify/src/tools/scripts/coentrify-update.py`, and read the [changelog](changelog/overview.md) from the project's version on. The script fetches the project's version from npm to compare with.
- A project from before 0.1.0 sets coentrify up again, the way the [onboarding](onboarding.md#an-earlier-coentrify) says for an earlier coentrify.
- Read `standards/decisions.md` for the reasoning behind the earlier choices.
- With `update` on `review`, show the director a changed rule in a tracked standard before it is replaced. With `automatic`, it is replaced at once, and the report names it.
- A standard whose update the director declines is set to `customized` first, with the reason in the decisions.
- Run it again with `--apply`, which replaces the tracked standards and their overview lines, and writes the new version.
- Run the unlink script again, since a replaced standard brings its links back.
- Rebuild each check or helper whose spec the plan names as changed.
- Apply each setup change the changelog names since the project's version, the way the onboarding now reads.
- Report the changes for a customized standard, and a standard renamed, moved or removed at the source.
- Report new standards worth considering, and surface one that has the same name as one of the project's own.
- Update the decisions.
