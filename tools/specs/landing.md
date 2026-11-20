# Landing

A spec for the three scripts that land work on the main branch when several agents work at once ([Parallel Agents](../../standards/tooling/parallel-agents.md)). The main branch and the repository are settings, `main` and the current folder by default.

## Merge

- It merges one branch into the main branch with `--no-ff --no-commit`, runs the main checks it is given on the merged tree, and commits with the message it is given only when every check exits 0.
- A failed check aborts the merge and leaves main as it was.
- It refuses while a merge is in progress, on a tree with tracked changes, off the main branch, without exactly one branch named, and with a message that does not open with a story's or a ticket's id.
- It takes a lock first, and refuses while another merge holds it, so two merges never run at once.

## Main Checks

- It runs every check it is given, as the project's own scripts, and prints each one's exit code.
- It refuses with no check named, while a merge is in progress, and while a merge holds the lock.
- A failed check leaves its output in a log and the script prints where. The script exits with the failure.

## Docs Commit

- It runs every check it is given, then stages the paths it is given and commits them with the message, only when every check exits 0.
- It refuses without a check, without a path, off the main branch, and while a merge is in progress.

## The Check

- A merge on a clean main with passing checks lands the branch in one merge commit, its message opening with the story's id.
- A merge with a failing check aborts, and main is as it was.
- A merge on a dirty tree, off main, while the lock is held, or with a message without an id refuses and changes nothing.
- Main checks with no check named refuses. With a passing and a failing check, it prints both codes and exits with the failure.
- A docs commit with a failing check commits nothing.
