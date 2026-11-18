# Sweeps Enumerate Into Tech-Debt First

A sweep for a pattern begins by finding every instance and listing them in one debt ticket, before any fix; a sweep too big for one item becomes an epic.

## Why

A sweep fixes every instance, with none missed.

## How to Apply

- First pass: scan thoroughly for every instance - watch for casing, singular/plural, and shape variants that a narrow grep misses - and list each in the debt ticket's body.
- Then work the list, removing items as they are fixed, per [Remove Completed Items from Docs](../simple-workflow/remove-completed-items-from-docs.md).
- State the scope honestly: if the scan can miss instances, say so rather than imply full coverage.

## Related

- [Note Issues](note-issues.md)
- [Work Tracking](../tickets-workflow/work-tracking.md)
- [Always Work from a Plan](always-work-from-a-plan.md)
- [Code Review Compounds Into Patterns and Sweeps](code-review-compounds-into-patterns-and-sweeps.md)
