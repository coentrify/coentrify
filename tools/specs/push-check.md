# Push Check

A spec for a hook that keeps main pushed with `push` on `automatic` ([A Turn's Records Land Together](../../standards/commits/a-turns-records-land-together.md)). Each app ends a turn its own way, so a project writes the hook for the app its agents run in.

## Where It Runs

- At the end of a turn, as a stop hook, where the app has one.
- It runs only with `push` on `automatic`, read the way `coentrify.json` sets it, which follows `agency` when it is left out.

## What It Does

- In the main checkout, with main checked out, it counts the commits main holds that its upstream lacks, `git rev-list --count main@{upstream}..main`, and refuses the end of the turn once when there are any.
- The refusal tells the agent to push main, and any tag it added, by name.
- A turn that goes on because a stop hook refused it is let through, so a failed push never loops.
- It reads local refs alone, so it costs nothing offline. A linked worktree, another branch and a main without an upstream pass.
- A tag gets no check, since git keeps no local record of the remote's tags.

## The Check

- With main level with its upstream, the end of a turn passes.
- With main a commit ahead, the end of a turn refuses once, and the next end passes.
- In a linked worktree, on another branch, or with main without an upstream, the end of a turn passes.
- With `push` on `review`, the end of a turn passes.
