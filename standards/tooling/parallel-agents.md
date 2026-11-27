# Parallel Agents

Each agent works in a git worktree and on ports of its own, and every landing goes through the project's scripts.

## Why

Agents that work at the same time should not conflict.

## Worktrees

- Each agent works in a git worktree of its own, with the main tree's node modules linked, its own e2e port by argument, its own scratchpad folder for logs and captures, and a second port of its own for any second run.
- No Electron is launched from a worktree without the shell's own ignored node modules copied in.
- Every brief starts with `git reset --hard main` on the new branch, before any code is read: the worktree branches from origin's main, which lags the local one.
- A check against old code goes through a scratch branch of its own.
- Agents commit per item and rebase onto main right after each commit, so main's latest is under the next item. A rebase refuses a dirty tree and git stash is shared by every worktree, so the commit comes first.
- Builders run on the cheaper model.

## Watching Agents

- An agent with no commit for about half an hour gets a look: its uncommitted files, its suite logs, its servers. A builder polishing a detail or rerunning suites then is stopped and told to close from what it has. A long run of several suites with finished items sitting uncommitted is stopped and split into one commit per item with the touched suite only.
- Whatever watches for agent commits lists every agent branch by pattern and never marks waiting commits as seen when it restarts. After any restart, list what waits with `git cherry` and land it.

## Landing

- A story lands on main whole, once its tickets are done, and again after rework: the simplified release workflow. A live product runs the [Advanced Release Workflow](../tickets-workflow/advanced-release-workflow.md). Its branch goes through the project's merge script, in a command of its own, never beside anything else. The merge commit takes the story's id as its scope ([Commits](../commits/commits.md#ticket-scope)).
- The main checks go through the project's main checks script with the checks named as npm scripts, such as the hygiene, types, unit and wiki checks and the development build. A docs landing names hygiene and the wiki at least.
- A docs commit outside a landing goes through the project's docs commit script, hygiene among its checks, which commits only when every check exits 0.
- After any `git merge --abort`, `git cherry main <branch>` runs before a landing is reported.
- Before its story merges, the builder rebases the branch onto main and runs the main checks green on its last commit, with nothing beside it, the development build's warnings read. The merge script refuses a branch that main has moved past, and names the checks that passed on the tree it lands.
- A landing that changes the app's shell, its routes, how screens load or what boots first gets the whole browser suite in its builder's worktree before it merges.
- A docs commit that adds spec cases lands together with the commit tagging their tests.

## Cleanup

- A builder's branch and worktree go when its story is done: at its verdict, or at its last landing when none is due. Another agent's worktree goes after its final report, never at a landing.
- A branch is deleted only after `git cherry main <branch>` was read for it and every `+` traced to a landing, never by a wider pattern than the branches checked.

## Related

- [The Builder](../tickets-workflow/the-builder.md)
- [Agent Roles](../tickets-workflow/agent-roles.md)
- [The Conductor](../tickets-workflow/the-conductor.md)
- [Playwright Parallel Runs](playwright-parallel-runs.md)
- [Own Ports, Own Processes](../behavior/own-ports-own-processes.md)
- [Start Playwright On A Clean Port](start-playwright-on-a-clean-port.md)
