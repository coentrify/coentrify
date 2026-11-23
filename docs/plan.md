# Plan

Version 0.2.4: a round of filings, each brought to the director one by one.

- Adopting in an update, #45 and #46 (active)
- The greeting in an app, #47
- Budget lists in an update, #48
- Filing without access, #49
- The Conduct, one change at a time
- Call 0.2.4

## Adopting In An Update

`coentrify update` covers adoption: the agent suggests the new standards and modules worth adopting, by name, and adopts the ones the director accepts.

- The update plan lists new modules beside the new standards in adopted modules.
- `--adopt` takes several standards and modules in one call, whenever the project is at the installed version.
- It copies them in, lists them as `tracked`, inserts their overview lines and a new module's index line, brings every tracked standard back to the package's text and runs the unlink script.
- The agent sets each adopted standard up in full, and commits the adoption on its own.
- The `coentrify.json` check passes a commit that adopts a standard, the way it passes a version change.

## The Greeting In An App

Filed: where the app shows text between tool calls only as a summary, the greeting opens the turn's closing message.

## Budget Lists In An Update

Filed: the update carries each adopted module's `budget-exceptions.json`.

## Filing Without Access

Filed: filing opens an issue, with no access to the repository, and a session without the tools hands the director a prefilled link.

## The Conduct, One Change At A Time

The Conduct says one by one, and the round was first brought all at once. A sharper wording goes to the director as its own item.
