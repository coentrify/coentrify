# Main Stays Green, Work Stays Clean

Main is always green. Every unit of work leaves the codebase better than it found it, tests included. Agents work clean: no agent makes a mess for another to clean up.

## Why

A version can be cut from main at any moment, and red always means something.

## How To Apply

- A story's branch is rebased onto main, and its types, unit specs, build and touched suites run green, before it merges ([Parallel Agents](../tooling/parallel-agents.md#landing)). Two branches green apart can be red together (a new field from one, a spec without it from the other).
- A red main is priority one: it is fixed before anything else lands ([Dev Tiers](../behavior/dev-tiers.md)).
- Nothing lands red. Tests written failing first live with their work until the implementation turns them green, and land together with it.
- A failing test gets fixed - the code or the test, whichever is wrong.
- A flaky test is surfaced as debt and fixed at its cause, never by faking load. Most often the test is not written to be predictable: it waits on time where it should wait on the state it checks, races a frame or a clock, or leans on another case's leftovers. Sometimes the machine runs more suites than it carries, and fewer run at once. A flaky test is never retried until green and never waved through.
- A test that is no longer relevant is removed only with proof or a solid argument, stated in the commit and the report.
- A test that exposes a bug becomes that bug's reproducing test: it lands with the fix, never red on its own and never marked to fail.
- A violation the agent finds is fixed or noted as [Don't Introduce Tech Debt](../behavior/dont-introduce-tech-debt.md) says.

## Related

- [Work Workflow](../tickets-workflow/work-workflow.md)
- [Gate Commits On Exit Codes](gate-commits-on-exit-codes.md)
