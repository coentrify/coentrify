# Anchor Edits After Formatting

An anchored text edit (replace this exact snippet) should be made against the file as it is on disk right now, not as it was last read.

## Why

A formatter pass, a lint-staged commit hook, or a migration in between rewrites line breaks and import order, and the anchor silently stops matching.

## How to Apply

- After any formatter run or commit, re-read the lines you are about to anchor on, or rewrite the whole file when it is small.
- Never write files while a commit hook is running; lint-staged stashes and restores the working tree, and a concurrent write can be lost.
- When an anchor fails, treat it as a signal the file moved on, not as a typo to retry.
- In a batch of anchored edits across several files, check every anchor first and write only when all of them match; a batch that aborts halfway leaves the first files changed, and the next attempt fights the formatter on the half that landed.
- Never delete or edit by a line number after a formatter ran, since it may have shifted the lines. Edit by content, and gate the commit on the type check's exit code ([Gate Commits on Exit Codes](../commits/gate-commits-on-exit-codes.md)).

## Related

- [Review Changes Before Reporting Done](review-changes-before-reporting-done.md)
