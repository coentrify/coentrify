# Overview

The Commits standards: how work is committed.

- [Commits](commits.md) - every commit is a lowercase conventional commit, and a ticket's commits take its id as the scope, feat(FEAT-123): description. NO AI attribution anywhere. Split by review interest
- [Gate Commits On Exit Codes](gate-commits-on-exit-codes.md) - only `&&` stands between the exit-code test and the commit or tag. Never pipe a check into grep or tail
- [Main Stays Green, Work Stays Clean](main-stays-green-work-stays-clean.md) - main always green and versionable. Nothing lands red. Agents clean their own mess
- [Verify Staging Before Committing](verify-staging-before-committing.md) - read the staged list before every commit. Explicit paths when others share the tree
