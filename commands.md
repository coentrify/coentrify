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

Any request to bring the project up to date. Read the version in the project's `coentrify.json`, and read the [changelog](changelog/overview.md) from that version on.

- Read `standards/decisions.md` for the reasoning behind the earlier choices.
- Skip every standard the changelog does not name.
- Replace a tracked standard, and show the director a changed rule first.
- Run the unlink script again, since a replaced standard brings its links back.
- Report the changes for a customized standard.
- Report new standards worth considering.
- Surface a new standard that has the same name as one of the project's own.
- Write the new version to `coentrify.json`, and update the decisions.
