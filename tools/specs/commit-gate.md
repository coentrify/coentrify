# Commit Gate

A spec for a hook that refuses a commit an agent did not gate on its check ([Gate Commits On Exit Codes](../../standards/commits/gate-commits-on-exit-codes.md), [Verify Staging Before Committing](../../standards/commits/verify-staging-before-committing.md)).

## Where It Runs

- Before every shell command an agent runs, where the agent's app supports such a hook.
- It reads the command and nothing else, and refuses it with a message that says what to do instead.

## What It Does

- It refuses a `git commit` or a `git tag` that follows a `;`.
- It refuses one that follows a check piped into `grep`, `tail` or `head` within an `&&` chain, since the pipe hides the check's exit code.
- It refuses a `git commit` that follows a `git add` in the same command, since the staged list was not read in between.
- It ignores what is quoted, a heredoc body, a command substitution and a comment, so a message with a `;` in it passes.
- A `git tag` that only lists tags passes.

## The Check

- `npm test && git commit -m x` passes.
- `npm test; git commit -m x` refuses.
- `npm test | tail -3 && git commit -m x` refuses.
- `git add a && git commit -m x` refuses.
- `git commit -m "a; b"` passes.
- A commit message given in a heredoc that holds a `;` passes.
- `ls` passes.
