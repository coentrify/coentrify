# Backward-Trace Missing Prerequisites

When the next step in the [Feature Workflow](feature-workflow.md) needs infrastructure that doesn't exist - no e2e harness, no spec template, no mock for the area, no tests for the affected area - pause and build the prerequisite first.

## Why

A bypass hides the gap, and the next feature hits it again.

## How to Apply

- File the prerequisite as a ticket of its own, named in the current ticket's Depends On; it goes on the planning page for its go, then on the plan above the current item ([Work Tracking](../tickets-workflow/work-tracking.md)).
- Start the prerequisite once it has its go. Recurse if its prerequisite is also missing.
- Resume only after the prerequisite is committed and verified.
- Never fold prerequisite work into the current feature's diff. Never write a throw-away bypass to get past the gap.
