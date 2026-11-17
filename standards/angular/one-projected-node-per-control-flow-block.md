# One Projected Node Per Control-Flow Block

Two nodes with `slot="x"` under one `@if` never reach the named slot of the parent component. A visibility check passes on them all the same, so the build log and a capture are the checks.

## Why

The misplaced nodes still have a size, so an e2e visibility check passes while they render in the wrong place; only a capture shows it. The dev server prints the NG8011 warning for exactly this case.

## How to Apply

- Treat an NG8011 warning in the build log as a failure; read the dev server's log after a template change.
- A visibility check does not prove projection; a capture or a position check does.

## Related

- [Prefer Content Projection over Props (Angular)](prefer-content-projection-over-props-angular.md)
- [Review Every Capture Before Reporting](../behavior/review-every-capture-before-reporting.md)
