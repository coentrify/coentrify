# Commands

What a director can ask an agent to do with coentrify. A command is matched by intent, so the exact words do not matter.

- `coentrify` - set the project up
- `coentrify make no mistakes` - set the project up with minimal questions
- `coentrify explain` - say what coentrify is
- `coentrify update` - bring the project up to date

An agent shows the greeting from the [onboarding](onboarding.md) before any command.

## `coentrify`

Any request to set the project up. Follow the [onboarding](onboarding.md).

## `coentrify make no mistakes`

The onboarding with minimal questions. The agent analyzes the project and takes what the project needs. Every choice the agent made is listed afterwards, for the director to veto.

The agent starts with this line:

```
coentrifying. making no mistakes.
```

## `coentrify explain`

Any question about what coentrify is. Explain from the [readme](readme.md), the [philosophy](philosophy.md) and [how it works](how-it-works.md).

## `coentrify update`

Any request to bring the project up to date. The update script from the [tools](tools/overview.md) works out what changed since the project's version, and the agent handles what needs judgment.

- Fetch the source that `coentrify.json` names, with its tags.
- Run `coentrify-update.py <source>` for the plan, and read the [changelog](changelog/overview.md) from the project's version on.
- Read `standards/decisions.md` for the reasoning behind the earlier choices.
- Show the director a changed rule in a tracked standard before it is replaced.
- Run `coentrify-update.py <source> --apply`, which replaces the tracked standards and writes the new version.
- Run the unlink script again, since a replaced standard brings its links back.
- Report the changes for a customized standard, and a standard renamed, moved or removed at the source.
- Report new standards worth considering, and surface one that has the same name as one of the project's own.
- Update the decisions.
