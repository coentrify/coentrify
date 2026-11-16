# Review Changes Before Reporting Done

Before reporting work as done or committing, re-read the full diff and the files you touched. Verify against the actual change, not the in-progress mental model of what was intended.

## Why

Edits accumulate side effects that aren't visible while making them: missed imports, half-finished refactors, files still referencing renamed symbols, auto-fix side effects, dropped consumers of a moved export. The diff is the only place these show up before review.

## How to Apply

- For renames or moves, search for the old name across the repo to confirm no orphan references remain.
- Scope the re-read to the change - the hunk alone for trivial edits, the contextually relevant surrounding logic for refactors and behavior changes.
- Check the relevant standards - was anything you should have applied missed? Apply it before declaring done.
- Remove dead code in the files you touched before committing: unused consts, imports, params, leftover scaffolding. Flagging ([Note Issues](note-issues.md)) is for unrelated issues elsewhere.
- If anything looks wrong or unfinished, fix it before reporting, not after.
- If the diff shows changes you didn't make, surface them and confirm before reverting or committing: they may be the user's work from a parallel session, or otherwise intentional. Never assume an unexplained change is a tool side effect and silently revert it.

## Related

- [General Working Rules](general-working-rules.md)
