# Request Log

Keep a raw, dated log of everything the director says in `docs/records/log/<date>.md`: requests, feedback, questions, asides and go-aheads alike, written before any of it goes where the project's workflow files new work, such as the intake of [Work Workflow](../tickets-workflow/work-workflow.md). Minimal cleanup only: spelling, careful rewording, prose into a flat list. The essence stays. The wiki lists the log newest first as the Request Log.

## Why

Every doc and ticket can be checked against the words that produced it.

## The File

- The H1 is the date with its DEV day: `2026-09-14 - DEV day 6` ([The DEV Day](the-dev-day.md)).
- One `##` per message, titled with its time. The heading and the page are written by the append script, built from the Log Append spec in the tools, never typed: typed headings run ahead of the clock, and a page picked by hand past midnight lands on the wrong day.
- The days before the agent are reconstructed from the commit history as entries of their own, so the log starts at the project's first day.

## How To Apply

- Log first, in the same turn, then file the work.
- A message that lands mid-turn is logged the same way, with its own time, before the work goes on.
- A question the director asks is logged too, since the answer shapes the project.
- A secret in a message is left out ([Keep Secrets Away From Agents](../security/keep-secrets-away-from-agents.md)).
- A link to an entry, and a ticket's `go` and `feedback`, is written from the entry's heading read back, never from memory. A check built from the Anchor Check spec in the tools holds it.
- Past entries only get typo fixes.
- New understanding gets a new entry.
- The log entry is committed with the turn's other records, in the same pass as what was parsed from it ([A Turn's Records Land Together](../commits/a-turns-records-land-together.md)). Never left uncommitted waiting for a go.
- The raw chat transcripts stay where the tool keeps them, on disk and uncommitted. The log is the curated record. Now and then a debt ticket schedules a gap analysis of the raw transcripts against the log and the docs, looking for interpretation errors.

## Related

- [Docs Hold Only What The Director Decided](../behavior/docs-hold-only-what-the-director-decided.md)
- [Activity Log](activity-log.md)
- [Playtest Files](playtest-files.md)
- [The DEV Day](the-dev-day.md)
- [A Turn's Records Land Together](../commits/a-turns-records-land-together.md)
