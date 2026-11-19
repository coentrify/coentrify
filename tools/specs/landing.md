# Landing

A spec for the three scripts that land work on the main branch when several agents work at once ([Parallel Agents](../../standards/tooling/parallel-agents.md)). The main branch and the repository are settings, `main` and the current folder by default.

## Pick

- It cherry-picks one commit onto the main branch.
- It refuses while a pick is in progress, on a tree with tracked changes, off the main branch, and without exactly one commit named.
- It takes a lock first, and refuses while another pick holds it, so two picks never run at once.

## Main Checks

- It runs every check it is given, as the project's own scripts, and prints each one's exit code.
- It refuses with no check named, while a pick is in progress, and while a pick holds the lock.
- A failed check leaves its output in a log and the script prints where. The script exits with the failure.

## Docs Commit

- It runs every check it is given, then stages the paths it is given and commits them with the message, only when every check exits 0.
- It refuses without a check, without a path, off the main branch, and while a pick is in progress.

## The Check

- A pick on a clean main lands the commit.
- A pick on a dirty tree, off main, or while the lock is held refuses and changes nothing.
- Main checks with no check named refuses. With a passing and a failing check, it prints both codes and exits with the failure.
- A docs commit with a failing check commits nothing.
