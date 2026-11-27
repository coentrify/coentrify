# Landing

A spec for the three scripts that land work on the main branch when several agents work at once ([Parallel Agents](../../standards/tooling/parallel-agents.md)). The main branch and the repository are settings, `main` and the current folder by default.

## Merge

- It merges one branch into the main branch with `--no-ff` and the message it is given.
- It refuses a branch that does not hold the latest main, so the tree that lands is the one its builder checked.
- After the merge it prints one of two lines: the checks that passed on the landed tree, from the main checks' record, or that the tree is new.
- It refuses while a merge is in progress, on a tree with tracked changes, off the main branch, without exactly one branch named, and with a message whose scope is not a story's or a ticket's id.
- It takes a lock first, and refuses while another merge holds it, so two merges never run at once.

## Main Checks

- It runs every check it is given, as the project's own scripts, and prints each one's exit code.
- It refuses with no check named, while a merge is in progress, and while a merge holds the lock.
- A failed check leaves its output in a log and the script prints where. The script exits with the failure.
- It records each check that exited 0 against the tree it ran on, only where the working tree held nothing past its commit, untracked files included, at the run's start and at its end. The record stands in the repository's shared git folder, so a run in a builder's worktree is read where the branch lands.
- It prints the five-minute load average and the core count last, for the conductor's next agent ([Agent Roles](../../standards/tickets-workflow/agent-roles.md#how-many)).

## Docs Commit

- It runs every check it is given, then stages the paths it is given and commits them with the message, only when every check exits 0.
- It refuses without a check, without a path, off the main branch, and while a merge is in progress.

## The Check

- A merge of a branch that holds the latest main lands it in one merge commit, its message's scope the story's id, `feat(STORY-1): description`.
- A merge of a branch that main has moved past refuses, and main is as it was.
- A merge on a dirty tree, off main, while the lock is held, or with a message without an id refuses and changes nothing.
- Main checks with no check named refuses. With a passing and a failing check, it prints both codes and exits with the failure.
- Main checks end with a line holding the load average and the core count.
- Main checks that pass on a clean tree in a worktree, and a merge of that branch on main, print the checks as passed on the landed tree.
- Main checks on a tree with a change or an untracked file record nothing, and a merge after them prints the tree as new.
- A docs commit with a failing check commits nothing.
