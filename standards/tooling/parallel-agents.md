# Parallel Agents

The toolchain that lets several agents work one repository at once: git worktrees, ports, the landing scripts and the cleanup. Who does what is in [Agent Roles](../tickets-workflow/agent-roles.md) and [The Conductor](../tickets-workflow/the-conductor.md).

## Why

Agents that work at the same time should not conflict.

## Worktrees

- Each agent works in a git worktree of its own, with the main tree's node modules linked, its own e2e port (`E2E_PORT`), its own scratchpad folder for logs and captures, and a second port of its own for any second run.
- No Electron is launched from a worktree without the shell's own ignored node modules copied in.
- Every brief starts with `git reset --hard main` on the new branch, before any code is read: the worktree branches from origin's main, which lags the local one.
- A check against old code goes through a scratch branch of its own.
- Agents commit per item and rebase onto main right after each commit, so main's latest is under the next item. A rebase refuses a dirty tree and git stash is shared by every worktree, so the commit comes first.
- A builder reads its story from main with the project's plan script, which shares the wiki's loader, never from a checkout that lags.
- Builders run on the cheaper model (`model: "sonnet"`).

## Watching Agents

- The app stops waking the conductor after many reports in a row with no message from the director, so a builder that waits on a merge stalls overnight.
- An agent with no commit for about half an hour gets a look: its uncommitted files, its suite logs, its servers. A builder polishing a detail or rerunning suites then is stopped and told to close from what it has. A long run of several suites with finished items sitting uncommitted is stopped and split into one commit per item with the touched suite only.
- Whatever watches for agent commits lists every agent branch by pattern and never marks waiting commits as seen when it restarts. After any restart, list what waits with `git cherry` and land it.

## Landing

- Every landing goes through the project's pick script: one commit per pick, in a command of its own, never in parallel with a pick or anything else. The script refuses while a pick is in progress, the tree has tracked changes or the branch is not main, and takes a lock.
- The checks on main go through the project's main checks script with the checks named as npm scripts, such as the hygiene, types, unit and wiki checks and the development build. A docs landing names hygiene and the wiki at least. The script refuses mid-pick and with none named.
- A docs commit outside a landing goes through the project's docs commit script, hygiene among its checks, which commits only when every check exits 0.
- After any `git cherry-pick --abort`, `git cherry main <branch>` runs before a landing is reported.
- Picks from different agents compose on main in an order none of them verified: after picks that touch shared files, and always before telling the director a batch has landed, the development build runs on main and its warnings are read.
- A landing that changes the app's shell, its routes, how screens load or what boots first gets the whole browser suite on main right after it lands.
- A docs commit that adds spec cases lands together with the commit tagging their tests.

## Cleanup

- A builder's worktree is removed only after its story's verdict, any other agent's after its final report or completion notice, never when a commit lands.
- A branch is deleted only after `git cherry main <branch>` was read for it and every `+` traced to a landing, never by a wider pattern than the branches checked.

## Related

- [Playwright Parallel Runs](playwright-parallel-runs.md)
- [Own Ports, Own Processes](../behavior/own-ports-own-processes.md)
