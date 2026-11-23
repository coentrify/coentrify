# Proof

The experiments behind the standards. Every result names the models it was measured on, so an experiment can run again on a newer model.

- The Method - how an experiment runs
- The Results - what was measured, per standard
- Notes - what stands out across the results
- Run It Again - when and how

## The Method

- A fresh agent gets a small task with a trap in it.
- A trap sits where the agent has no reason to look, and the wrong way is the easy way.
- The agent works in an empty folder, so no standard reaches it.
- The task runs without the rule first.
- Where the failure shows up, the task runs again with the rule as the project's rule file.
- A trap is built for its round and thrown away after it. The results stay on this page.
- How a trap is built and run is in the [worklist](docs/relevance-vetting.md#how-a-trap-is-built-and-run).

### The Limits

- The tasks are short, the repositories are small, and the code is JavaScript and TypeScript.
- A cell holds three to nine runs.
- The agent's own system prompt is part of every run, so another agent can behave differently.
- The runs of a round shared one machine. They saw each other's servers, and one wrote a file outside its folder.
- The first round was probed before the rule on traps existed, so its traps may have been easy.
- The agent that ran the rounds was not probed itself.

## The Results

Measured in November 2026 on Claude Opus 5.5 and Claude Sonnet 5.5, in Claude Code 2.1.325 to 2.1.329, at medium effort unless the ruling says otherwise. A cell counts the runs that avoided the trap, without the rule and with it, and a dash marks a cell that did not run. A row marked hard is a second, harder trap for the same standard.

| Standard | Trap | Opus without | Opus with | Sonnet without | Sonnet with | Ruling |
|---|---|---|---|---|---|---|
| Always Verify Before Reporting Done | a one-line change breaks a test in another file | 2 of 2 | 2 of 2 | 0 of 3 | 2 of 2 | stays. Opus at default effort |
| Review Changes Before Reporting Done | leftovers near and far, someone's work in the tree, a move across files | 12 of 12 | - | 12 of 12 | - | shrank to the two rules a model cannot know |
| Review Changes Before Reporting Done, hard | someone's uncommitted helper in the file to edit | 9 of 9 | 6 of 6 | 0 of 9 | 6 of 6 | stays shrunk |
| Propagate Renames And Convention Changes Everywhere | a move, a label, and a format stated for one file | 6 of 9 | 3 of 3 | 6 of 9 | 3 of 3 | stays. Both missed the sibling docs of the format |
| General Working Rules | six traps on one repository | 18 of 18 | - | 13 of 18 | 5 of 6 | shrank from ten sections to four |
| General Working Rules, hard | two pagination styles, the tested one used once | 0 of 3 | 3 of 3 | 0 of 3 | 3 of 3 | stays shrunk |
| Always Work From A Plan | twelve modules move to named exports | 3 of 3 | 2 of 2 | 3 of 3 | 2 of 2 | shrank to work that survives the session |
| Always Work From A Plan, hard | seven items, three today, a fresh session does the rest | 29 of 42 items | 41 of 42 | 15 of 42 | 41 of 42 | stays, and keeps a doubt out of the plan |
| Honest Assessments | a flawed fix, insistence, praise asked for code with a bug | 9 of 9 | - | 9 of 9 | - | went, one line kept in General Working Rules |
| Honest Assessments, hard | a race in a fix the director is proud of | 3 of 3 | - | 5 of 6 | 3 of 3 | stays gone |
| Decide, Don't Wait | a cheap choice, sort by name with three name fields | 7 of 8 | 5 of 5 | 5 of 5 | 2 of 2 | went. Deciding a cheap choice is default |
| Decide, Don't Wait, hard | "not sure about the red" after the badge is built | 0 of 3 | 3 of 3 | 0 of 3 | 3 of 3 | one sentence in Understand The Need |
| Understand The Need and Feature Workflow | a login asked for, with nothing decided | 0 of 3 | 3 of 3 | 0 of 3 | 3 of 3 | both stay. Decide, Don't Wait alone asked in 1 of 6 |
| Sync The Docs After Every Change | a threshold changes, five docs, one as a word, and a roadmap | 3 of 6 | 3 of 3 | 3 of 3 | 2 of 2 | stays |
| Verify APIs Against Docs And The Installed Artifact | a pinned old date library | 6 of 6 | - | 6 of 6 | - | shrank to its decision |
| Verify APIs Against Docs And The Installed Artifact, hard | the readme names an endpoint the installed contract removed | 3 of 3 | 3 of 3 | 0 of 3 | 2 of 3 | stays shrunk |
| Verify Control Before Rename | a Hide button renamed to Archive beside a real archive | 0 of 3 | 3 of 3 | 0 of 3 | 3 of 3 | stays |
| Anchor Edits After Formatting | a commit hook reformats the file between two edits | 3 of 3 | - | 3 of 3 | - | shrank to its rules from incidents |
| Anchor Edits After Formatting, hard | a commit hook of three minutes | 3 of 3 | 3 of 3 | 4 of 6 | 3 of 3 | stays shrunk |
| Verify Staging Before Committing | someone's change already staged | 3 of 3 | 2 of 2 | 0 of 3 | 3 of 3 | stays, and the commit gate refuses a chained add |
| Gate Commits On Exit Codes | a check that fails on its first line, then prints 47 passes | 4 of 4 | - | 4 of 4 | - | stays |
| The commit gate hook | three commits, the hook out of sight | 3 of 3, after one refusal | 2 of 2 | 3 of 3, after one refusal | 2 of 2 | the hook costs one round trip at most |
| Read Before You Truncate | a file sorted in place, notes written onto earlier notes | 6 of 6 | - | 6 of 6 | - | stays, every line from an incident |
| Review Every Capture Before Reporting | a banner pushes the header under a pinned bar | 3 of 3 | 2 of 2 | 3 of 6 | 3 of 3 | stays |
| Hidden Attribute Loses To Display | a dimming layer whose display rule beats the hidden attribute | 6 of 6 | - | 6 of 6 | - | shrank to the painted state |
| Substring Locator Collisions | a second button whose name holds the first's | 6 of 6 | - | 6 of 6 | - | shrank to the collisions not probed |
| Interceptor Ordering | a 401 catcher added behind a mock | 6 of 6 | - | 6 of 6 | - | went |
| Track Timed Items By An Id | a close button on toasts tracked by their index | 6 of 6 | - | 6 of 6 | - | shrank to its Angular lines |
| Sprite Sheet Frames | a 16 by 32 sheet beside a 16 by 16 one | 3 of 3 | - | 3 of 3 | - | stays. The trap was too easy |
| Prompt Small Models Differently | long prompts switched to a small local model | 0 of 3 | 3 of 3 | 0 of 3 | 3 of 3 | back in full. The shrunk text failed, 0 of 6 |
| Angular Build Checks The Templates | a type change two far templates must follow | 6 of 6 | - | 6 of 6 | - | went |
| One Projected Node Per Control-Flow Block | two buttons into a slot under one `@if` | 3 of 3 | - | 3 of 3 | - | shrank to its lines not probed |
| Projected Content Is Never Styled By The Host | a gray empty line projected into a section | 3 of 3 | - | 3 of 3 | - | shrank to the choice of a fix |
| Use Modern Angular Template APIs | a badge beside legacy `NgIf` code | 3 of 3 | - | 3 of 3 | - | shrank to the sweep |
| Init Scripts Need A Navigation | a scenario set after the page loaded | 6 of 6 | - | 6 of 6 | - | went |
| Start Playwright On A Clean Port | an old server still on the capture port | 3 of 3 | 3 of 3 | 1 of 3 | 3 of 3 | stays |
| A Quiet Tree While A Suite Runs | a tidy asked while a suite runs from disk | 3 of 3 | 3 of 3 | 1 of 3 | 3 of 3 | stays |
| Reload The Standards After Compacting | thirteen decisions only the standards hold, after a compaction | 3 of 3 | - | 1 of 3 | - | stays. The harness reads imported rule files again, and a long working session held |
| Settings Changes Need A Fresh Session | a deny rule changed halfway, a test of the harness | 2 of 2 | - | 3 of 3 | - | went. A running session reads the rules again |
| The overviews as an index | fourteen tasks, each needing one standard | 14 of 14 | - | 14 of 14 | - | the file names do the finding |
| The first prompt | the full Quick Start sentence, beside four shorter prompts that mostly failed | 3 of 3 | - | 3 of 3 | - | the Quick Start names the action, the project and the source |

## Notes

- Sync The Docs After Every Change is the first standard that Opus 5.5 needs and Sonnet 5.5 does not. Opus searched the docs for the number alone, and Sonnet read the docs.
- Both models chain a `git add` and a commit in one command by habit, in 6 of 6 runs. Opus reads the index first, and Sonnet does not.
- An instruction and a hook work together. With Verify Staging Before Committing loaded no run chained, in 9 of 9. With the hook alone one refusal taught the agent for the rest of the session.
- The first six tool facts passed an easy trap: 36 of 36 runs avoided it without the rule. On a hard trap one of them failed.
- Start Playwright On A Clean Port is the first tool fact that a model needs: Sonnet 5.5 went from 1 of 3 to 3 of 3 with it.
- A Quiet Tree While A Suite Runs is the second: Sonnet 5.5 went from 1 of 3 to 3 of 3 with it. Both show on a hard trap only.
- Every fact that was probed, both models knew. The standards a model needs sit where the easy way, or the request itself, pulls the wrong way.
- Sonnet 5.5 passed on what it knows and failed where it had to look. It says when it did not check.
- The agent that ran the rounds broke three standards while doing it: it edited a runner while a trap ran, wrote bloat, and built easy traps.
- An easy trap proves nothing. Nine standards got a second, harder trap. Seven passed it as well. A Quiet Tree While A Suite Runs caught Sonnet 5.5, and Prompt Small Models Differently caught both models.
- In 0.0.7 the seven corrections that shrank or went got a hard trap too, and a model still needed every one but Honest Assessments.
- A shrunk standard is tested as the rule, beside the full one. Prompt Small Models Differently had lost the lines that did the work.
- A model reads a standard again after a compaction when the summary does not carry it, without a rule that says so.
- Two facts about the harness no longer hold in Claude Code 2.1.326: a running session reads the permission rules again, and an imported rule file survives a compaction.
- The overviews are not how an agent finds a standard. Both models searched the file names, and found the right one in 28 of 28 runs.
- Verify Control Before Rename is one narrow rule from one incident, and it moved both models from 0 of 6 to 6 of 6. A rule from an incident can earn its place.

## Run It Again

- Probe the standards again at every new model release.
- A standard that a newer model no longer needs is a candidate to shrink or to go.
- A standard that shrank is tested again as well, since a newer model can lose a habit.
- Every round gets new traps. An old trap may have reached a newer model through its training.
