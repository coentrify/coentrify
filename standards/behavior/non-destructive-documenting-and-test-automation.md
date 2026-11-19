# Non-Destructive Documenting and Test Automation

Observation phases - docs, spec, mocks, test automation - describe what exists and verify it. They never modify production code. Implementation changes happen in their own [Feature Workflow](feature-workflow.md) step, their own commit.

## Why

Production code changes only in implementation, where it is reviewed.

## How to Apply

- Diff during observation touches only `docs/`, `e2e/`, `mocks/`, test setup. Touching production source is a red flag.
- Mocks live outside the code under observation. The thing being mocked stays untouched.
- A failing test found while observing is a finding, not a fix trigger in this phase: file a bug ticket ([Note Issues](note-issues.md)). The test lands with the fix as its reproducing test, never red on main ([Main Stays Green, Work Stays Clean](../commits/main-stays-green-work-stays-clean.md)).
- Each phase commits separately. Never mix observation work and behavior change in one diff.

## Related

- [Feature Workflow](feature-workflow.md)
- [Note Issues](note-issues.md)
- [Main Stays Green, Work Stays Clean](../commits/main-stays-green-work-stays-clean.md)
