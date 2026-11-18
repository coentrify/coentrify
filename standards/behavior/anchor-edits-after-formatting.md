# Anchor Edits After Formatting

When a formatter or a commit hook rewrites files, an edit follows three rules.

## Why

A change lands whole and in the right place.

## How to Apply

- Never write files while a commit hook is running; lint-staged stashes and restores the working tree, and a concurrent write can be lost.
- In a batch of anchored edits across several files, check every anchor first and write only when all of them match; a batch that aborts halfway leaves the first files changed, and the next attempt fights the formatter on the half that landed.
- Never delete or edit by a line number after a formatter ran, since it may have shifted the lines. Edit by content, and gate the commit on the type check's exit code ([Gate Commits on Exit Codes](../commits/gate-commits-on-exit-codes.md)).

## Related

- [Review Changes Before Reporting Done](review-changes-before-reporting-done.md)
