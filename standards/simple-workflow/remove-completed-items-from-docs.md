# Remove Completed Items from Docs

A list holds only what remains. When an item is completed, its line leaves the list entirely: never `~~text~~`, a "Done" label or a ticked checkbox.

## How to Apply

- A completed line on the plan or any other list is deleted; the version's changelog lists its ticket.
- A done ticket is archived, never deleted, so the changelog can link it ([Work Tracking](../tickets-workflow/work-tracking.md)).
- A plan file outside a project shrinks the same way: each finished step is deleted.

## Why

Strikethrough sections add noise and make a list harder to scan. The changelog, the archive and git history keep what was done.
