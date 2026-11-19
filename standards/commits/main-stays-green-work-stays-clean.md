# Main Stays Green, Work Stays Clean

Main is always green. Every unit of work leaves the codebase better than it found it, tests included. Agents work clean: no agent makes a mess for another to clean up.

## Why

A version can be cut from main at any moment, and red always means something.

## How To Apply

- A builder's branch merges into main with `--no-commit` first. The merged tree's types, unit specs and build run, and the touched suites when two branches meet the same screen, before the merge commit lands. Two branches green apart can be red together (a new field from one, a spec without it from the other).
- A red main is priority one: it is fixed before anything else lands ([Dev Tiers](../behavior/dev-tiers.md)).
- Nothing lands red. Tests written failing first live with their work until the implementation turns them green, and land together with it.
- A failing test gets fixed - the code or the test, whichever is wrong.
- A flaky test is surfaced as a debt ticket and fixed at its cause, never by faking load. Most often the test is not written to be predictable: it waits on time where it should wait on the state it checks, races a frame or a clock, or leans on another case's leftovers. Sometimes the machine runs more suites than it carries, and fewer run at once. A flaky test is never retried until green and never waved through.
- A test that is no longer relevant is removed only with proof or a solid argument, stated in the commit and the report.
- A test that exposes a bug becomes that bug's reproducing test: it lands with the fix, never red on its own and never marked to fail.
- What the agent's own change caused is fixed in the same go ([Don't Introduce Tech Debt](../behavior/dont-introduce-tech-debt.md)).
- What the agent finds but did not cause:
  - A small fix rides on the current ticket's go as a Veto line.
  - Anything bigger becomes a ticket or a question ([Note Issues](../behavior/note-issues.md)).

## Related

- [Work Workflow](../tickets-workflow/work-workflow.md)
- [Gate Commits On Exit Codes](gate-commits-on-exit-codes.md)
