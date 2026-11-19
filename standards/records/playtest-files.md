# Playtest Files

Every playtest gets its own file in `docs/records/playtests/`, dated and numbered (`<date>-playtest-<n>.md`), listed newest on top in the wiki. It holds the date and DEV day, the version played with a link to its changelog, the focus, a short summary and the feedback as a flat list, one item per bullet, reworded from the log but never reinterpreted.

## Why

A playtest file records what was felt about a build, and the next build is held against it.

## The File

- The number gives the director and the playtesters a shared name for a session.
- The H1 carries the number and the DEV day, the way the log's does: `# Playtest 46 - DEV day 13`, so the wiki's menu shows it. The head repeats the day (`- Day: DEV day 13`), counted as in the log ([Request Log](request-log.md)).
- A playtest on an untagged build names the version in progress.
- The summary is two or three lines naming the themes. The items stay in the list.

## What Counts As A Playtest

- A session playing the build.
- A review of the changelog, its captures or its reels instead of the build: even one line of feedback on a reel gets a file.
- Notes that come in while the director plays a version in progress: the file opens with the first such note of the session and grows with every note after, each in its own commit right after its log entry.

## How To Apply

- Write the file right after the log entry, before anything else is done with the feedback. Never afterward on request.
- Feedback stays feedback: its units go through intake ([Work Workflow](../tickets-workflow/work-workflow.md)), where the director's "feedback for now" or "not for now" means built later in its epic and phase, never held.

## Outside Playtesters

- Each outside playtester gets a page listing everything that playtester said by date, so the director sees the whole view at once.
- The director's own sessions keep the numbered files.
- An outside playtester's feedback, even relayed by the director, stays on the playtester's page until the director has reviewed it: no ticket or agent brief from it before that review.
- A workspace doc names every outside playtester for later thanks and indexes the pages.

## Related

- [Changelog Per Version](changelog-per-version.md)
- [Gamedev Working Cadence](../gamedev/gamedev-working-cadence.md)
- [User Test Files](user-test-files.md)
