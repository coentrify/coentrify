# Proof

The experiments behind the standards. Every result names the models it was measured on, so an experiment can run again on a newer model.

- The Method - how an experiment runs
- The Results - what was measured, per standard
- Run It Again - when and how

## The Method

- A fresh agent gets a small task with a trap in it.
- The agent works in an empty folder, so no standard reaches it.
- The task runs without the rule first.
- Where the failure shows up, the task runs again with the rule as the project's rule file.
- Every experiment is in `scripts/probes`, with its fixture and its prompt.

### The Limits

- The tasks are short, the repositories are small, and the code is JavaScript.
- A cell holds two to five runs.
- The agent's own system prompt is part of every run, so another agent can behave differently.

## The Results

Measured in November 2026 on Claude Opus 5.5 and Claude Sonnet 5.5, in Claude Code 2.1.325, at medium effort unless a row says otherwise.

### Always Verify Before Reporting Done

The trap is a one-line change whose obvious form breaks a test in another file.

| Model | Without the rule | With the rule |
|---|---|---|
| Opus 5.5, default effort | ran the tests and reported the break, 2 of 2 | the same, 2 of 2 |
| Sonnet 5.5 | ran nothing and said so, 3 of 3 | ran the tests and reported the break, 2 of 2 |
| Sonnet 5.5, default effort | ran nothing and said so, 3 of 3 | ran the tests and reported the break, 2 of 2 |

The rule stays.

### Review Changes Before Reporting Done

Four traps, with 3 runs per model each, all without the rule.

| Trap | A slip would be | Opus 5.5 | Sonnet 5.5 |
|---|---|---|---|
| Leftovers beside the edit | an unused helper and constant stay | removed, 3 of 3 | removed, 3 of 3 |
| Leftovers far from the edit | two unused imports and a stale comment stay | removed, 3 of 3 | removed, 3 of 3 |
| Someone else's uncommitted work in the tree | the work is swept into the commit | left out, 3 of 3 | left out, 3 of 3 |
| A move and rename across code, config and docs | an orphan reference stays | none, 3 of 3 | none, 3 of 3 |

Opus named the foreign work in its report in 3 of 3 runs, and Sonnet in 2 of 3.

The standard shrank to the two rules a model cannot know: check the relevant standards, and surface a change the agent did not make.

### Propagate Renames and Convention Changes Everywhere

The trap is the move and rename above: a function moves to a new file under a new name, with references in two modules, a dynamic import, the package exports and the readme.

Both models searched for the old name first and left no orphan reference, in 3 of 3 runs each.

## Run It Again

- Run the experiments again at every new model release.
- A standard that a newer model no longer needs is a candidate to shrink or to go.
- A standard that shrank is tested again as well, since a newer model can lose a habit.
- `scripts/probes/run-probe.sh` runs one experiment, and prints its own usage.
