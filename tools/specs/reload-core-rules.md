# Reload Core Rules

A spec for a hook that puts the Core Rules back in context after a compaction ([Reload The Standards After Compacting](../../standards/behavior/reload-the-standards-after-compacting.md)).

## Where It Runs

- When a session starts again after a compaction, where the agent's app supports such a hook and does not read the entry point again by itself.

## What It Does

- It reads the index, `standards/overview.md` unless the project keeps it elsewhere.
- It prints every standard that the Core Rules section of the index links to, in full and in order.
- It skips a link to a file that is not on disk.
- It prints nothing, and still succeeds, when the project has no index.

## The Check

- With an index that links three Core Rules, it prints all three in order.
- With one of them missing on disk, it prints the other two.
- Without an index, it prints nothing and exits 0.
