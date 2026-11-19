# Hidden Attribute Loses To Display

An element toggled with the hidden attribute carries no display rule of its own, or its display rule yields to `[hidden]`. Its closed state is verified by what is painted.

## Why

A closed state is judged by what the user sees.

## How To Apply

- Verify the closed state with the computed display, a negated visibility assertion or a screenshot on load. A boolean read back from the element proves only the flag.
- The first time a new overlay ships, take one screenshot of the page with it closed before calling it done.
- The browser's `[hidden]` rule loses to any display rule of the element's own, so the element renders anyway.

## Examples

- An overlay with its own flex display and the hidden flag set covers the whole page. A check that reads the flag back from the DOM calls it closed, while the computed display stays flex.

## Related

- [Bracket State Changes With Contrast Assertions](../tests/bracket-state-changes-with-contrast-assertions.md)
- [Review Every Capture Before Reporting](../behavior/review-every-capture-before-reporting.md)
