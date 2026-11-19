# Healing Append

A spec for the script that adds one entry to the healing log ([Healing Log](../../standards/records/healing-log.md)).

## What It Does

- It takes the log, what went wrong, what changed, and the commit, which defaults to the current one.
- It appends one line: `- <date> - <what went wrong> - <what changed> - <commit>`, with today's date.
- It creates the log with its title when it does not exist.
- It refuses an empty part, a part that holds ` - `, which would break the shape, and a semicolon, since one entry holds one change.

## The Check

- Two appends give two lines in the same shape, under the title.
- A part with ` - ` or a semicolon refuses and changes nothing.
