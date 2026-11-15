# Tools

The scripts and hooks that enforce a standard, for a project to copy.

## Scripts

- `scripts/pick.sh` - one guarded cherry-pick onto main ([Parallel Agents](../standards/tooling/parallel-agents.md))
- `scripts/main-checks.sh` - the named checks on main, by exit code
- `scripts/docs-commit.sh` - a docs commit that only lands when the hygiene check passes
- `scripts/changelog-append.py` - adds one entry to a version's changelog, in a fixed shape, so the changelog is never written free hand

## Hooks

- `hooks/gate-commit-on-exit-codes.py` - refuses a commit that does not hang on its check ([Gate Commits on Exit Codes](../standards/behavior/gate-commits-on-exit-codes.md))
- `hooks/reload-read-first.sh` - prints the Read First standards after a compaction ([Reload The Standards After Compacting](../standards/behavior/reload-the-standards-after-compacting.md))
- `hooks/refuse-wrap-up-questions.sh` - refuses answer buttons at the end of a turn ([Free Text Replies, No Buttons](../standards/behavior/free-text-replies-no-buttons.md))
