# One Projected Node Per Control-Flow Block

Two nodes with `slot="x"` under one `@if` never reach the named slot of the parent component. A visibility check passes on them all the same, so the build log and a capture are the checks.

## Why

Projected content lands in the slot it was written for.

## How to Apply

- Treat an NG8011 warning in the build log as a failure. Read the dev server's log after a template change.
- A visibility check does not prove projection.
- A capture or a position check proves projection.
- The misplaced nodes still have a size, which is why a visibility check passes on them.

## Related

- [Prefer Content Projection over Props (Angular)](prefer-content-projection-over-props-angular.md)
- [Review Every Capture Before Reporting](../behavior/review-every-capture-before-reporting.md)
