# Commands

What a director can ask an agent to do with coentrify. A command is matched by intent, so the exact words do not matter.

In a fresh project the first prompt carries the source, as the [Quick Start](readme.md#quick-start) shows. Once the project is set up, its entry point leads to these commands.

- `coentrify` - set the project up
- `coentrify make no mistakes` - set the project up with minimal questions
- `coentrify explain` - say what coentrify is
- `coentrify update` - bring the project up to date

An agent shows the greeting from the [onboarding](onboarding.md) before any command.

## `coentrify`

Any request to set the project up. Follow the [onboarding](onboarding.md).

## `coentrify make no mistakes`

The onboarding with minimal questions. The agent analyzes the project and takes what the project needs. Every choice the agent made is listed afterward, for the director to veto.

The agent starts with this line:

```
coentrifying. making no mistakes.
```

## `coentrify explain`

Any question about what coentrify is. Explain from the [readme](readme.md), the [philosophy](philosophy.md) and [how it works](how-it-works.md).

## `coentrify update`

Any request to bring the project up to date. The update script from the [tools](tools/overview.md) works out what changed since the project's version, and the agent handles what needs judgment.

- Fetch the source that `coentrify.json` names, with its tags.
- Run the update script from the source for the plan, `<source>/tools/scripts/coentrify-update.py <source>`, and read the [changelog](changelog/overview.md) from the project's version on.
- Read `standards/decisions.md` for the reasoning behind the earlier choices.
- Show the director a changed rule in a tracked standard before it is replaced.
- A standard whose update the director declines is set to `customized` first, with the reason in the decisions.
- Run it again with `--apply`, which replaces the tracked standards and their overview lines, and writes the new version.
- Run the unlink script again, since a replaced standard brings its links back.
- Rebuild each check or helper whose spec the plan names as changed.
- Apply each setup change the changelog names since the project's version, the way the onboarding now reads.
- Report the changes for a customized standard, and a standard renamed, moved or removed at the source.
- Report new standards worth considering, and surface one that has the same name as one of the project's own.
- Update the decisions.
