# Sync The Docs After Every Change

When something changed or a feature landed, check the docs for related information before calling it done: statements the change made stale, and statements about future plans the change now conflicts with. The docs should be as up to date as possible at all times.

## Why

A feature's own doc gets updated when it is built, while the docs that mention it in passing drift. Every duplicate statement is a place to go stale.

## How to Apply

- After an item lands, grep the docs for its feature's terms (names, labels, the old behavior) and read every hit, beyond the feature's own doc.
- A statement the change made untrue gets fixed in the same commit or the next one.
- A future plan the change conflicts with (a roadmap line, a concept, a law) is raised in the report as a question for the director, never silently rewritten.
- Prefer one source of truth: a summary doc links to the feature doc rather than repeating its status.

## Related

- [Propagate Renames and Convention Changes Everywhere](propagate-renames-and-convention-changes-everywhere.md)
- [Regular Layered Gap Analysis](regular-layered-gap-analysis.md)
- [Docs Hold Only What the Director Decided](docs-hold-only-what-the-director-decided.md)
