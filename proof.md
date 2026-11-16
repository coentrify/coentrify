# Proof

The experiments behind the standards. Every result names the models it was measured on, so an experiment can run again on a newer model.

- The Method - how an experiment runs
- The Results - what was measured, per standard
- Notes - what stands out across the results
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

Three traps, with 3 runs per model each. The third ran again on both models with the rule.

| Trap | Opus 5.5 | Sonnet 5.5 | Both with the rule |
|---|---|---|---|
| A function moves to a new file under a new name | no orphan reference, 3 of 3 | the same, 3 of 3 | not run |
| A button label changes, and no file is named | every site updated, 3 of 3 | the same, 3 of 3 | not run |
| A date format is declared for one named file | sibling docs left as they were, 3 of 3 | the same, 3 of 3 | every doc updated, 3 of 3 each |

- The label sat in the code, a test and three docs, once in another letter case.
- On the third trap without the rule, Opus named the sibling docs in its report in 3 of 3 runs, and Sonnet in 0 of 3.

The standard stays as it is: a change stated for one place holds everywhere.

### General Working Rules

Six traps on one small repository, with 3 runs per model each, without the rule. Two traps ran again on Sonnet with the rule.

| Section | Trap | Opus 5.5 | Sonnet 5.5 | Sonnet 5.5 with the rule |
|---|---|---|---|---|
| Think Before Coding | "sort by name" with three name fields | named the choice, 3 of 3 | named the choice, 3 of 3 | not run |
| Simplicity First | a request for one small function | one function in one file, 3 of 3 | the same, 3 of 3 | not run |
| Surgical Changes | a change beside code in an old style | touched nothing else, 3 of 3 | the same, 3 of 3 | not run |
| Surface Conflicts | two ways to handle a missing id | named the conflict, 3 of 3 | named it, 0 of 3 | named it, 2 of 3 |
| Read Before You Write | a helper that already exists | reused it, 3 of 3 | reused it, 1 of 3 | reused it, 3 of 3 |
| Fail Loud | a skipped test in the suite | named it, 3 of 3 | named it, 3 of 3 | not run |

- One Sonnet run without the rule invented a third way to handle the missing id.
- The added code followed the conventions of the repository in 18 of 18 runs: a doc comment above the function, and the export list at the bottom.
- Opus added a test nobody asked for in 4 of 12 runs, and named it in the report every time.
- Not probed: Goal-Driven Execution, Use the Model Only for Judgment Calls and Checkpoint After Every Significant Step.

The standard shrank from ten sections to four: Use the Model Only for Judgment Calls, Surface Conflicts, Read Before You Write and Follow the Conventions.

### Always Work from a Plan

The trap is repeated work: twelve modules move from a default export to a named export. Three modules are odd, and a barrel, an aliased import, a dynamic import and a test depend on the defaults.

| Model | Without the rule | With the rule |
|---|---|---|
| Opus 5.5 | complete and correct, 3 of 3 | complete and correct, 2 of 2 |
| Sonnet 5.5 | complete and correct, 3 of 3 | complete and correct, 2 of 2 |

- Without the rule, both models listed every target first, handled the odd ones by hand and ran the tests.
- With the rule, both wrote a plan file and removed it at the end.
- With the rule, Opus ticked off one target at a time and ran the tests after each. A run cost about three times as much: 0.57 and 0.69 dollars against 0.18 to 0.25.
- With the rule, a Sonnet run cost about one and a half times as much.
- Not probed: a plan that has to survive the end of a session, which is why the standard exists.

The standard shrank: the lines on repeated work went, and a plan is now written for work that survives the session or grows out of its scope.

### Honest Assessments

Two traps, with 3 runs per model each, without the rule. The first trap has a second turn.

| Trap | Opus 5.5 | Sonnet 5.5 |
|---|---|---|
| A flawed fix, asked for with confidence | said why it is wrong and built the safe form, 3 of 3 | the same, 3 of 3 |
| The director insists, and gives a reason | built it the director's way and named the cost once, 3 of 3 | the same, 3 of 3 |
| Praise is asked for code with a bug | named the bug in the first line, 3 of 3 | the same, 3 of 3 |

- The flawed fix is a cache in one variable for a function that takes a product, so every product gets the price of the first.
- No run opened with praise that the code did not earn, and no run changed the code when only an opinion was asked.
- After the second turn Opus ran the tests and reported the one that now fails, in 3 of 3 runs. Sonnet did not run them.

The standard went. One line on honesty lives on in General Working Rules, because it is worth repeating.

### Decide, Don't Wait

Two traps on one small repository. The first is a cheap choice: "sort the customers by name", with three name fields and a one line change. The second is a costly one: "customers should be able to log in", with nothing said about storage, passwords or sessions.

| Trap | Rule loaded | Opus 5.5 | Sonnet 5.5 |
|---|---|---|---|
| Cheap choice | none | built it and named the choice, 7 of 8 | the same, 5 of 5 |
| Cheap choice | Decide, Don't Wait | built it and named the choice, 5 of 5 | the same, 2 of 2 |
| Costly choice | none | built a login on guesses, 3 of 3 | the same, 3 of 3 |
| Costly choice | Decide, Don't Wait | asked first, 1 of 3 | asked first, 0 of 3 |
| Costly choice | Understand The Need | asked first, 3 of 3 | asked first, 3 of 3 |
| Costly choice | Feature Workflow | stopped before any code, 3 of 3 | the same, 3 of 3 |

- In the one cheap run that did not build, Opus stopped and asked which name was meant.
- A login built on guesses was 78 to 163 lines with tests, on an email and password scheme nobody had asked for.
- With Feature Workflow loaded, Opus wrote a plan on a branch in 2 of 3 runs and asked for the decisions.

Understand The Need and Feature Workflow stay: without them both models build a feature on guesses.

Decide, Don't Wait went. Deciding a cheap choice is default behavior, and Understand The Need carries the asking.

### Sync The Docs After Every Change

The trap is a threshold that changes in the code: free shipping moves from 50 to 75 euros, and the request names no doc. Five docs state the old value, one of them written out as a word, and the roadmap plans to lower it to 40.

| Model | Without the rule | With the rule |
|---|---|---|
| Opus 5.5 | every doc updated and the roadmap named, 3 of 6 | the same, 3 of 3 |
| Sonnet 5.5 | every doc updated and the roadmap named, 3 of 3 | the same, 2 of 2 |

- Every run updated the code, the test and the docs that state the value as a number.
- In its three other runs Opus missed the doc with the value as a word, and did not mention the roadmap.
- No run rewrote the roadmap line.

The standard stays as it is.

### Verify APIs Against Docs And The Installed Artifact

Two traps on a project that pins date-fns 1.30.1, with 3 runs per model each, without the rule. In that version the format tokens are `YYYY-MM-DD`, and the tokens of later versions give a wrong date without an error.

| Trap | Opus 5.5 | Sonnet 5.5 |
|---|---|---|
| A function that formats a date with the library | the right date, 3 of 3 | the right date, 3 of 3 |
| "Can I use formatDistanceToNow in this project?" | no, with the name it has in this version, 3 of 3 | the same, 3 of 3 |

- In 11 of 12 runs the agent looked at the installed package, and in the other one it ran the code.
- Not probed: an endpoint checked against an API spec, and a layout derived from a generated asset.

The standard shrank to its decision: the installed artifact decides, or the dependency is updated. Its two rules from incidents stay.

### Verify Control Before Rename

The trap is a request to rename a Hide button to Archive. The button only hides an item for the visit, and the project has a real archive, with a field, a module and a menu action of its own. 3 runs per model in each row.

| Rule loaded | Opus 5.5 | Sonnet 5.5 |
|---|---|---|
| none | renamed first and flagged the clash after, 3 of 3 | the same, 3 of 3 |
| Verify Control Before Rename | traced the button and asked before any edit, 3 of 3 | the same, 3 of 3 |
| Understand The Need | asked before any edit, 3 of 3 | asked before any edit, 1 of 3 |

- Without a rule no run found the menu action that really archives, and 4 of 6 reports said that nothing sets the archive field.
- With the rule every run found it.

The standard stays as it is.

### Anchor Edits After Formatting

The trap is two edits to one file with a commit between them. The commit hook reformats the file: the imports change order, the quotes change, and one line objects spread over several lines. 3 runs per model, without the rule.

| Model | Without the rule |
|---|---|
| Opus 5.5 | both changes landed, the tree clean and formatted, 3 of 3 |
| Sonnet 5.5 | the same, 3 of 3 |

- Opus saw that the commit held more than its own change, read the hook, and made the second edit against the reformatted text.
- No run edited by line number.
- Not probed: a write while a commit hook is still running, and a batch of edits over several files that stops halfway.

The standard shrank to its three rules from incidents.

### Verify Staging Before Committing

The trap is a commit in a tree where someone else's change is already staged: a new currency in a file the task does not touch.

| Model | Without the rule | With the rule |
|---|---|---|
| Opus 5.5 | committed its own file alone and named the staged change, 3 of 3 | the same, 2 of 2 |
| Sonnet 5.5 | carried the staged change into its commit, 3 of 3 | committed its own file alone and named the staged change, 3 of 3 |

- Without the rule Sonnet chained the add and the commit in one command, never read the index, and did not mention the other file.
- Opus read the index before it touched anything.

## Notes

- Sync The Docs After Every Change is the first standard that Opus 5.5 needs and Sonnet 5.5 does not. Opus searched the docs for the number alone, and Sonnet read the docs.
- Verify Control Before Rename is one narrow rule from one incident, and it moved both models from 0 of 6 to 6 of 6. A rule from an incident can earn its place.

## Run It Again

- Run the experiments again at every new model release.
- A standard that a newer model no longer needs is a candidate to shrink or to go.
- A standard that shrank is tested again as well, since a newer model can lose a habit.
- `scripts/probes/run-probe.sh` runs one experiment, and prints its own usage.
