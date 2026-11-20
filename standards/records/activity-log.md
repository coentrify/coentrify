# Activity Log

Completed work goes to `docs/records/activity/<date>.md`, one file per day, H1 the date with the DEV day (`2026-09-14 - DEV day 6`). The days before the agent are reconstructed from the commit history. Plans and lists still drop finished items. The activity log is where a day's progress stays readable.

## Why

The director sees the progress of a project at a glance, and a new session starts from the last one.

## The Page

- The Standup: what the director would tell a colleague who is not close to the work.
- Standing: one line with the suites' counts and the open bugs and debt.
- Next: one line with the plan's head.

## The Standup

- Three to five bullets, the day's biggest outcomes first, in plain words.
- One more bullet with roughly how many hours it took. The hours run from the day's first log entry, or its first commit without a log, to its last commit.
- A summary, never a list of every change: the changelog and git hold that.
- Terse: "worked on the sign-in", never "we worked mainly on".
- No version numbers, links, times, agent or process talk.

## How To Apply

- Write the day's file when the first batch closes, in the commit after the tag, and extend it with every batch after: the standup rewritten to cover the whole day. A batch's close is never called the day's close while the day goes on.
- The day closes on the director's word: the batch closes, the file is extended once more, and the report says so.
- The day's close adds its row to the activity folder's Hours page (day, DEV day, from, to, hours) and updates that week's and month's totals.

## Related

- [Request Log](request-log.md)
- [Remove Completed Items From Docs](../simple-workflow/remove-completed-items-from-docs.md)
- [Gamedev Working Cadence](../gamedev/gamedev-working-cadence.md)
