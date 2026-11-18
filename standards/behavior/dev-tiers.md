# Dev Tiers

Pick work in a fixed order, higher tiers first: CI/CD and build, then bugs, then tech debt, then features, each tier counting only what hurts the current phase's goal. A broken build makes bugs irrelevant, and no additions land over the current phase's bugs. Bugs and tech debt may blur into each other; that is fine.

## Why

Work builds on a stable foundation.

## How to Apply

- Before starting a feature, check the build, the bug tickets and the debt tickets; work the highest non-empty tier first.
- Only bugs that hurt the current phase's goal take the bug tier: early on, a bug in a core feature or one that stops the product from being used from start to finish. Every other bug is filed for a later phase, under the epic it belongs to there ([Work Tracking](../tickets-workflow/work-tracking.md#phases)).
- Only debt that hurts the current phase's goal takes the debt tier: it slows the current work, causes a bug, or blocks a check. Every other debt is noted all the same and filed for a later phase, where a ticket that touches its code often resolves it on the way.
- Debt in code that will not reach the product, a prototype or a throwaway probe, is never scheduled ahead of the work that decides whether the code stays.
- A fun glitch may be kept on purpose; then it is documented as a feature, not left as a bug.

## Related

- [Note Issues](note-issues.md)
- [Feature Workflow](feature-workflow.md)
