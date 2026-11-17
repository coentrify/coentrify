# Hidden Attribute Loses To Display

An element toggled with the hidden attribute that carries its own display rule renders anyway. Verify the closed state of every such element by what is painted.

## Why

An overlay with its own flex display and the hidden flag set covers the whole page. A check that reads the flag back from the DOM calls it closed, while the computed display stays flex.

## How to Apply

- Verify the closed state with the computed display, a negated visibility assertion or a screenshot on load; a boolean read back from the element proves only the flag.
- On a first publish of any new overlay, take one screenshot of the page with it closed before calling it done.

## Related

- [Bracket State Changes With Contrast Assertions](../tests/bracket-state-changes-with-contrast-assertions.md)
- [Review Every Capture Before Reporting](../behavior/review-every-capture-before-reporting.md)
