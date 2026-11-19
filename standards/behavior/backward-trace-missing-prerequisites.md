# Backward-Trace Missing Prerequisites

When the next step in the [Feature Workflow](feature-workflow.md) needs infrastructure that doesn't exist - no e2e harness, no spec template, no mock for the area, no tests for the affected area - pause and build the prerequisite first.

## Why

A gap is closed once, for every feature after it.

## How To Apply

- File the prerequisite as work of its own, ahead of the current item, where the project's workflow says: [The Simple Workflow](../simple-workflow/the-simple-workflow.md#where-a-finding-goes) or [Work Workflow](../tickets-workflow/work-workflow.md#where-a-finding-goes).
- Start the prerequisite once it has its go. Recurse if its prerequisite is also missing.
- Resume only after the prerequisite is committed and verified.
- Never fold prerequisite work into the current feature's diff. Never write a throw-away bypass to get past the gap.

## Related

- [Feature Workflow](feature-workflow.md)
- [The Simple Workflow](../simple-workflow/the-simple-workflow.md)
- [Work Workflow](../tickets-workflow/work-workflow.md)
