# Advanced Release Workflow

For a product that is live, stories merge into a development branch, which is promoted to a release branch, accepted there and merged into main. Main holds only what is live.

## Why

Users run main, so nothing reaches it before the director accepts it, and work goes on while a version is accepted.

## How To Apply

- A project names the release workflow it runs in its decisions, and switches from the simplified one ([Parallel Agents](../tooling/parallel-agents.md#landing)) when its product goes live.
- Stories land whole on `develop`, the way the simplified workflow lands them on main: rebased onto it, through the merge script, the main checks green. Where a standard says main for a landing, read `develop`.
- When the director calls a version, `release/<version>` is cut from `develop`.
- The director accepts the version's stories on the release branch's build ([Work Workflow](work-workflow.md)). A finding becomes a ticket that lands on the release branch, which merges back into `develop` after each landing.
- Once accepted, the release branch merges into main, tagged `v<version>`, and main goes live ([Changelog Per Version](../records/changelog-per-version.md)).
- A fix to what is live branches from main as `hotfix/<version>`, merges into main tagged as a patch, and back into `develop`.

## Related

- [Main Stays Green, Work Stays Clean](../commits/main-stays-green-work-stays-clean.md)
- [Parallel Agents](../tooling/parallel-agents.md)
- [Work Workflow](work-workflow.md)
