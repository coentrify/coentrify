# Overview

The Commits standards: how work is committed.

- [Commits](commits.md) - a ticket's commits start with its id, FEAT-123: description; every other commit is a lowercase conventional commit; NO AI attribution anywhere; split by review interest
- [Gate Commits on Exit Codes](gate-commits-on-exit-codes.md) - commit and tag hang on the check's exit code with &&; never a grep, tail or ;
- [Main Stays Green, Work Stays Clean](main-stays-green-work-stays-clean.md) - main always green and versionable; nothing lands red; agents clean their own mess
- [Verify Staging Before Committing](verify-staging-before-committing.md) - read the staged list before every commit; explicit paths when others share the tree
