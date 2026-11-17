# Dates And Time

- A day is written as `2026-11-16`, and a week as `2026-W47`.
- A week starts on Monday, and belongs to the year of its Thursday.
- All dates are UTC. No function reads the local time zone.
- A duration is held in whole seconds, as an integer.
- A duration is written with hours and minutes, as in `1h 30m`. Seconds are never written.
- A duration of zero is written as `0m`.
- Minutes are rounded to the nearest whole minute when a duration is written.
- No library for dates. `src/dates.js` holds what is needed.
- No function calls `Date.now()` or `new Date()` without an argument. The caller passes the day.
- A range of days includes its first and its last day.
