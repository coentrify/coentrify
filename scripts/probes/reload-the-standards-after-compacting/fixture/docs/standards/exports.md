# Exports

An export is a file this code writes for another program.

- An export is a CSV file with a semicolon between the columns, since the bookkeeping reads it that way.
- The file is named after its kind and its week: `report-2026-W47.csv`.
- The first line is a comment with the kind and the week: `# report 2026-W47`.
- The second line holds the column names, in lower case.
- A project is written by its code, never by its name.
- A duration is written in whole seconds.
- An amount is written in cents, as [Money](money.md) says.
- The last line holds the totals, with `TOTAL` in the first column.
- No quotes around a value. A value never holds a semicolon.
- An export of a week without rows is still written, with the comment, the column names and the totals.
