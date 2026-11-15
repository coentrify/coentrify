# A Quiet Tree While A Suite Runs

Make no source edits while a browser suite runs against a watching dev server.

## Why

The server sees every save and rebuilds the app under the tests, so a half-written state, a field used before it is declared, breaks the build for whatever cases run in that window. The failures look real and are not, and the rerun costs the whole run's duration.

## How to apply

- While a suite runs, work on what the server does not watch: docs, memory, the plan, reading code.
- Start the next code edit after the result is in.
- A run that overlapped with edits is invalid; rerun it before reading anything into it.

## Related

- [Always Verify Before Reporting Done](always-verify-before-reporting-done.md)
- [Gate Commits on Exit Codes](gate-commits-on-exit-codes.md)
