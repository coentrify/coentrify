# Gamedev Working Cadence

A game day runs in one loop: the director plays and writes, the conductor logs, plans and lands item by item with proof, closes the version, and the director plays the next one. All work runs through the [Work Workflow](../tickets-workflow/work-workflow.md); this file adds the rhythm of the day around it. Every step leaves a file behind, so any session can pick the day up.

## Why

The director tests by hand between versions; work without a version has no name to play, and an item without proof has to be re-verified by hand. The loop keeps the playtest, the changelog and the code in step, so the next playtest reads the changelog and plays exactly that.

## Session Start

- The wiki runs and its URL is handed over ([VitePress Wiki](../tooling/vitepress-wiki.md)), and the refine list is pointed to.

## Intake

- A big dump of ideas and feedback is logged and processed, then the report offers a few focus areas for the next iteration and the director picks one. The bugs go to the planning page regardless and the small fixes are the plan meanwhile; the rest is grouped into epics on the roadmap, so nothing is lost and the work keeps its focus.
- Feedback on an open version is a cutoff, never more scope: close the version as it stands and plan what is open plus the new feedback for the next one. One cycle of playtest, review and changelog per version.
- The plan holds bugs first, then debt, then features ([Dev Tiers](../behavior/dev-tiers.md)).
- Content the agent names (names, numbers, hints) is recorded in the pacing doc and named in the report, never asked for one by one ([Pacing Docs](pacing-docs.md)).

## Per Item

- The suites whose cases touch the changed labels, names and orders (grep the e2e first) run once at the end of a story, not per item; the full suites run once at the version's close.
- While prototyping new things, per item only the cases that touch what changed run, never the whole feature suite.

## Version Close

- What a version is follows the game's phase ([Game Phases](game-phases.md)). In Pre-Alpha a version is a day of work: closing the day closes the version. Once builds go out, a version is a build, and a playtest names the version it played.
- The version closes with the suites green and the version tagged.
- Nothing lands between the full suites and the tag without its touched suite run again.
- The next version is bumped and its changelog page opened only when its first item lands ([Changelog Per Version](../records/changelog-per-version.md)).

## For A Browser Game

- Green at the close includes the whole pre-push hook (`npm run hooks:pre-push`: production build, bundle check, styleguide, wiki build, hygiene, types, unit, the stories in a browser) by its exit code, run before the tag and never left for the director's push.
- The full browser suite runs as two halves when it outlasts the background cap ([Playwright Parallel Runs](../tooling/playwright-parallel-runs.md)).

## Wind-Down

- Once the director calls a wind-down, nothing new starts, not even a chore already approved; the running items finish and the close runs to its end.
- A soft freeze is the same for the director's notes: every note after it is logged, filed to the playtest and put through intake for the next session, never briefed to an agent, however small or close to an item in hand it looks.

## Day Close

- The day closes with the activity log ([Activity Log](../records/activity-log.md)).
- The report in chat references the changelog on the wiki instead of summarizing, and names every addition of the agent's own for a veto ([Flag Every Addition of Your Own](../behavior/flag-every-addition-of-your-own.md)).

## Related

- [The Conductor](../tickets-workflow/the-conductor.md)
- [Agent Roles](../tickets-workflow/agent-roles.md)
- [Game Work Workflow](game-work-workflow.md)
- [Request Log](../records/request-log.md)
- [Playtest Files](../records/playtest-files.md)
