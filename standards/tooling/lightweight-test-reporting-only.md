# Lightweight Test Reporting Only

Test reporting should show whether the suite is green right now, nothing more. Skip tools that add severity matrices, epic/feature grouping, history graphs, or flaky-test detection.

## Why

What matters is a fast, reliable signal: did it pass, did it fail, and where.

## How To Apply

- Pick the reporter that maximizes speed, consistent output, and reliable signal - usually the test runner's own.
- Add small custom reporters only when they answer a concrete question, like click count per flow.

## Related

- [Defer Tooling Until The Cost Shows Up](defer-tooling-until-the-cost-shows-up.md)
