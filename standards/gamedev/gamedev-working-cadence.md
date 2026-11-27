# Gamedev Working Cadence

A game day runs in one loop: the director plays and writes, the conductor logs, plans and lands item by item with proof, closes the version, and the director plays the next one. All work runs through the [Work Workflow](../tickets-workflow/work-workflow.md). This file adds the rhythm of the day around it. Every step leaves a file behind, so any session can pick the day up.

## Why

Every playtest plays a named version, and knows what changed in it.

## Session Start

- The wiki runs and its URL is handed over ([VitePress Wiki](../tooling/vitepress-wiki.md)), and the director's inboxes are pointed to in the order of [Work Workflow](../tickets-workflow/work-workflow.md), the accept list first.

## Intake

- A big dump of ideas and feedback is logged and processed, then the report offers a few focus areas for the next iteration and the director picks one. The bugs are scheduled the way intake schedules any work ([Work Workflow](../tickets-workflow/work-workflow.md#intake)). The rest is grouped into epics of the current and the next phase, and an idea for a later phase joins the dump in `docs/ideas/`, so nothing is lost and the work keeps its focus ([Processing The Ideas](../tickets-workflow/processing-the-ideas.md)).
- Feedback on an open version is a cutoff, never more scope: close the version as it stands and plan what is open plus the new feedback for the next one. One cycle of playtest, review and changelog per version.
- Dev Tiers recommends the order, and the director decides it ([Dev Tiers](../behavior/dev-tiers.md)).
- Content the agent names (names, numbers, hints) follows [Game Work Workflow](game-work-workflow.md#content) and [Incremental Pacing](incremental-pacing.md).

## Per Item

- Every item lands with its proof, since an item without proof has to be checked again by hand.
- Tests run as [Building A Ticket](../tickets-workflow/building-a-ticket.md#building) says, and the full suites once at the version's close.

## Version Close

- What a version is follows the game's phase ([Game Phases](game-phases.md)). A version closes on the director's go, and the day may go on after it. Once builds go out, a version is a build, and a playtest names the version it played.
- The version closes with the suites green and the version tagged.
- Nothing lands between the full suites and the tag without its touched suite run again.

## In A Browser

- Green at the close includes the whole pre-push hook (`npm run hooks:pre-push`, the project's full pre-push chain) by its exit code, run before the tag and never left for the push, which skips it.
- The full browser suite runs as two halves when it outlasts the background cap ([Playwright Parallel Runs](../tooling/playwright-parallel-runs.md)).

## Wind-Down

- Once the director calls a wind-down, a soft freeze, no new agent is started to build, not even for a chore already approved. The work in progress finishes and the close runs to its end, so the work halts without a forced stop.
- Everything the director says during it is logged and filed as usual, and briefed in the next session, however small or close to an item in hand it looks.

## Day Close

- The day closes with the activity log ([Activity Log](../records/activity-log.md)).
- The report in chat references the changelog on the wiki instead of summarizing. It names an addition of the agent's own made outside a ticket for a veto ([Flag Every Addition Of Your Own](../behavior/flag-every-addition-of-your-own.md)), since a ticket's stand in its Veto.

## Related

- [The Conductor](../tickets-workflow/the-conductor.md)
- [Agent Roles](../tickets-workflow/agent-roles.md)
- [Game Work Workflow](game-work-workflow.md)
- [Request Log](../records/request-log.md)
- [Playtest Files](../records/playtest-files.md)
