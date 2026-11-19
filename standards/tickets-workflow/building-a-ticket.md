# Building A Ticket

The builder's page: how a ticket with its go is built, and when it counts as done. The path around it is in [Work Workflow](work-workflow.md).

## Why

The director can trust a ticket that is called done.

## Building

- Work comes from the plan only, and the plan holds only ready tickets with a go and an agent. Every commit traces to a ticket on the plan and starts with its id ([Commits](../commits/commits.md)). Something found mid-work that is not on the plan becomes a ticket first ([Note Issues](../behavior/note-issues.md)).
- One item in flight per agent: the first ticket of its plan section ([Work Tracking](work-tracking.md#the-lists)). A bare line stands in the plan's Tasks section with its go linked, and a line without one cannot stand there.
- Every word and number a change shows, configuration data included, is weighed along the ticket's entry points by what it means to the user at that moment ([Walk The User's Journey](../ui/walk-the-users-journey.md)). A text the user reads speaks the product's own words, never the workspace's internal terms.
- A feature runs the feature workflow inside its ticket ([Feature Workflow](../behavior/feature-workflow.md)).
- Easy-to-change choices are made and written under Veto.
- Only costly-to-undo choices wait, as a question in their ticket.

## A Ticket Lands Right

- A ticket leaves the codebase no worse: no new risk, debt or bad code, and no lower quality or value.
- Whatever its own work needs to be right is done in it, taking the time it takes: a design risk mitigated by design belongs in the ticket, and so does a small, relevant fix.
- The right solution is solved now, never pushed out as a follow-up. A follow-up ticket exists only when the work outgrows one ticket, which is a split, named under Veto when the build finds it.

## Definition Of Done

A ticket or a line is done only when every one of these holds. Until then it stays on the plan.

- Every acceptance criterion is met and verified, and the spec covers each one.
- The touched suites, hygiene, types and the development build are green, each by its own exit code ([Gate Commits On Exit Codes](../commits/gate-commits-on-exit-codes.md)).
- A bug's test reproduces the director's steps with real input and was seen failing before the fix ([A Bug's Test Reproduces With Real Input](../tests/a-bugs-test-reproduces-with-real-input.md)).
- A new hygiene check lands with its implementation, and its builder's report shows the run that failed before the change.
- The Done part holds proof the director can open and verify ([The Done Part](the-done-part.md), [Review Every Capture Before Reporting](../behavior/review-every-capture-before-reporting.md)).
- Visual work meets its Visual Quality points and the project's visual checklist.
- The docs are synced: the feature doc, the spec, and every reference to a changed name ([Sync The Docs After Every Change](../behavior/sync-the-docs-after-every-change.md)).
- No new tech debt: what the change made unused or duplicated is cleaned in the same commit.
- The agent's own decisions stand under Veto ([Flag Every Addition Of Your Own](../behavior/flag-every-addition-of-your-own.md)).
- The change lands as its own commit, staging read before committing ([Verify Staging Before Committing](../commits/verify-staging-before-committing.md)).
- Captures and archive moves are never batched for later. The version's changelog lists the ticket by itself ([Changelog Per Version](../records/changelog-per-version.md)).
- A debt ticket is archived in its landing commit and its branch deleted ([Work Tracking](work-tracking.md#the-archive)).

## Related

- [Work Workflow](work-workflow.md)
- [The Done Part](the-done-part.md)
- [Work Tracking](work-tracking.md)
- [Gate Commits On Exit Codes](../commits/gate-commits-on-exit-codes.md)
