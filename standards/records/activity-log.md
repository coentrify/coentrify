# Activity Log

Completed work goes to `docs/records/activity/<date>.md`, one file per day, H1 the date with the DEV day (`2026-09-14 - DEV day 6`). The days before the agent are reconstructed from the commit history. Plans and lists still drop finished items; the activity log is where a day's progress stays readable.

## Why

The plan shrinks toward empty by design, so without an activity log the only record of progress is the commit list. A dated page gives the director the progression view a project management tool would, and Standing plus Next lets a session, or a new person, start from the last one.

## The Page

- The Standup first: what the director would tell a colleague who is not close to the work.
- The Summary next: a paragraph naming the day, then three bullets, Done, Standing and Next. Standing names the suites' counts and the open bugs and debt; Next names the plan's head.
- The Done list last: one bullet per outcome, outcomes only, never process.

## The Standup

- Bulleted lists, never a paragraph.
- First a breadth-first overview: one bullet per topic, biggest and most important first, with the highlight, how many versions were built and roughly how many hours it took as sibling bullets in plain words.
- Then a section per topic in the same order, its things worked on as short sub-bullets.
- Topic names are one or two plain words (Menu, Wiki, Audio); the items under them are short noun phrases ("Volume kept between sessions"). The order says what was biggest; the text never says so.
- Terse: "worked on the prologue", never "we worked mainly on".
- The new things introduced are the main content under each topic, a short mention each, enough for a colleague to notice every one.
- No version numbers, links, times, agent or process talk.
- The hours run from the log's first entry to the day's last commit.

## How to Apply

- Write the day's file when the first batch closes, in the commit after the tag, and extend it with every batch after: the standup and the summary rewritten to cover the whole day, Done growing. A batch's close is never called the day's close while the day goes on.
- The day closes on the director's word: the batch closes, the file is extended once more, and the report says so.
- The day's close adds its row to the activity folder's Hours page (day, DEV day, from, to, hours) and updates that week's and month's totals.

## Related

- [Request Log](request-log.md)
- [Remove Completed Items from Docs](../simple-workflow/remove-completed-items-from-docs.md)
- [Gamedev Working Cadence](../gamedev/gamedev-working-cadence.md)
