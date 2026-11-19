# Request Log

Keep a raw, dated log of everything the director says in `docs/records/log/<date>.md`: requests, feedback, questions, asides and go-aheads alike, written before intake turns any of it into work ([Work Workflow](../tickets-workflow/work-workflow.md)). Minimal cleanup only: spelling, careful rewording, prose into a flat list. The essence stays. The wiki lists the log newest first as the Chat Log.

## Why

Every doc and ticket can be checked against the words that produced it.

## The File

- The H1 is the date with the day count: `2026-09-14 - DEV day 6`. The count is days worked on the project, not calendar days: a week off raises no number, so read the previous page's header first. DEV day 1 is the first AI-driven day. The prototype before it counts as POC days, and every test session and changelog carries its day too.
- One `##` per message, titled with its time. The heading is written by the shell itself in the append, `printf '\n## %s\n\n' "$(date +%H:%M)"`, never typed: typed headings run ahead of the clock.
- The days before the agent are reconstructed from the commit history as entries of their own, so the count starts at the project's first day.

## How to Apply

- Log first, in the same turn, then run intake.
- A message that lands mid-turn is logged the same way, with its own time, before the work goes on.
- A question the director asks is logged too, since the answer shapes the project.
- Past entries only get typo fixes.
- New understanding gets a new entry.
- The log entry is committed as its own `docs(log)` commit, in the same go as what was parsed from it. Never left uncommitted waiting for a go.
- The raw chat transcripts stay where the tool keeps them, on disk and uncommitted. The log is the curated record. Now and then a debt ticket schedules a gap analysis of the raw transcripts against the log and the docs, looking for interpretation errors.

## Related

- [Docs Hold Only What the Director Decided](../behavior/docs-hold-only-what-the-director-decided.md)
- [Activity Log](activity-log.md)
- [Playtest Files](playtest-files.md)
