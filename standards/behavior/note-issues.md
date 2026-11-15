# Note Issues

When you encounter a problem during other work (bug, code smell, lint suppression, deprecated pattern, missing test, broken doc), write it down in the most relevant doc - never silently absorb it - without letting it block the work in front of you.

## Why

Issues found in passing are easy to forget once the current work is shipped. Silent suppression compounds: every workaround that goes unnoted becomes invisible debt.

## Where to note

Pick the most specific home; every ticket follows [Work Tracking](../tickets-workflow/work-tracking.md):

- Technical (smell, suppression, deprecated pattern, missing test, missing tool or process) -> a debt ticket.
- A clear bug, where the build does not do what its feature doc or spec says -> a bug ticket.
- A functional doubt, where the intended behavior itself is unclear -> a question in the ticket it is about, which the refine list shows ([Work Tracking](../tickets-workflow/work-tracking.md#the-open-questions)), never a bug ticket and never a fix.
- Functional doc out of date or wrong (feature doc, spec) -> a small fix rides on the current ticket's go as a Veto line; a larger gap is a docs ticket.
- Friction with a library -> surfaced to the director in the report ([Library Feedback](../docs/library-feedback.md)).
- A ticket filed this way lands in the phase where it hurts the goal, a later one unless it hurts the current goal now ([Dev Tiers](dev-tiers.md)), and stays unscheduled until the director plans it; the report names it.

## How to apply

- Stop briefly, add a short entry to the right doc, return to current work. One line is enough most of the time; supporting context only when necessary.
- Never just suppress (eslint-disable, ts-ignore, swallowed error) without a matching note.
- Filing means writing it to a doc. Mentioning it in chat, or asking "want me to file this?", is not filing: the mention scrolls away. If you flag it at all, write it down the same turn.
- When unsure whether it's worth tracking or where it belongs, file it (a debt ticket, or a question when it is functional) rather than drop it.
