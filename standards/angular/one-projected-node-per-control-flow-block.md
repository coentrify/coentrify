# One Projected Node Per Control-Flow Block

A control-flow block around projected content holds one projected node. Two nodes with `slot="x"` under one `@if` never reach the named slot of the parent component.

## Why

Projected content lands in the slot it was written for.

## How To Apply

- Set `extendedDiagnostics.checks.controlFlowPreventingContentProjection` to `error` in `angularCompilerOptions`, so the build fails on NG8011.
- A visibility check does not prove projection.
- A capture or a position check proves projection.
- The misplaced nodes still have a size, which is why a visibility check passes on them.

## Related

- [Prefer Content Projection Over Props (Angular)](prefer-content-projection-over-props-angular.md)
- [Review Every Capture Before Reporting](../behavior/review-every-capture-before-reporting.md)
