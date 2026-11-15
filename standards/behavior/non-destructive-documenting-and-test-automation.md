# Non-Destructive Documenting and Test Automation

Observation phases - docs, spec, mocks, test automation - describe what exists and verify it. They never modify production code. Implementation changes happen in their own [Feature Workflow](feature-workflow.md) step, their own commit.

- Diff during observation touches only `docs/`, `e2e/`, `mocks/`, test setup. Touching production source is a red flag.
- Mocks live outside the code under observation; the thing being mocked stays untouched.
- A failing test found while observing is a finding, not a fix trigger in this phase: file a bug ticket ([Note Issues](note-issues.md)); the test lands with the fix as its reproducing test, never red on main ([Main Stays Green, Work Stays Clean](main-stays-green-work-stays-clean.md)).
- Each phase commits separately. Never mix observation work and behavior change in one diff.
