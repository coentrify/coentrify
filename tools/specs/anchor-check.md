# Anchor Check

A spec for a check that holds every link's anchor to a heading on its target page, and a ticket's `go` and `feedback` fields to the log ([Request Log](../../standards/records/request-log.md)).

## Where It Runs

- In the pre-commit hook, beside the hygiene checks, on every commit.
- It reads the docs in the working tree, the way the wiki build does, and refuses with a message that names the file, the line, the link and the fix.

## What It Does

- A link with an anchor to a page of the docs, from the wiki's root, by a relative path, or within its own page, lands on a heading of its target: one heading slugs to the anchor the way GitHub slugs it, lower case, punctuation dropped and spaces as dashes, with a repeated heading numbered `-1`, `-2` and on.
- A link to a log entry, `/records/log/<date>#<hhmm>`, needs that day's log, and an entry heading that slugs to the anchor. Its refusal names the fix: read the entry's heading back, `## 12:57` as `#1257`.
- A ticket's `go` and `feedback` fields, `<date>#<hhmm>`, are held to the log the same way.
- A link without an anchor stays with the wiki's dead link check, and a link outside the docs is left alone.

## The Check

- A link to `/records/log/2026-10-25#1257` passes against a log with `## 12:57`.
- The same link refuses against a log whose entry is `## 12:55`, and the refusal names the read-back.
- A link to a day with no log refuses.
- A link to the second `## 12:57` of a day, `#1257-1`, passes.
- A `go: 2026-10-23#1405` passes against `## 14:05`, and refuses against a log without it. A `feedback` field holds the same.
- A link to `/features/upload#retries` passes against a page with `## Retries`, and refuses once the heading is gone.
- A link to another site with an anchor passes unread.
