# Log Append

A spec for the script that adds the heading of a message to the request log, on the page of its DEV day ([Request Log](../../standards/records/request-log.md), [The DEV Day](../../standards/records/the-dev-day.md)).

## What It Does

- It picks the page by the DEV day's date. Before 04:00 local time the date is the day before, so a session past midnight stays on its page.
- A page that does not exist yet opens with its H1, the date and its DEV day: `# 2026-09-14 - DEV day 6`.
- The DEV day is counted from git, from the date of the page that carries DEV day 1: the days with a commit since, each turning at 04:00, with the new day counted. A log without such a page starts at DEV day 1.
- It appends the time heading from the clock, `## HH:MM`, and prints the page, for the agent to write the entry under it.

## The Check

- At 21:00 on 2026-09-14, it appends to `2026-09-14.md`.
- At 00:30 on 2026-09-15, it appends `## 00:30` to `2026-09-14.md`.
- At 04:10 on 2026-09-15, with no page for that date, it opens `2026-09-15.md` with its H1 and the next DEV day.
- A commit at 01:00 on 2026-09-15 counts toward 2026-09-14.
- A day without a commit adds nothing to the count.
