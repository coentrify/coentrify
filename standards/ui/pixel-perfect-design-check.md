# Pixel-Perfect Design Check

When building or reviewing UI against a design, compare the rendered pixels to the design directly. A "looks about right" glance is not enough where the design is the contract.

## Why

Color, padding, spacing, and alignment drift is invisible to type checks, lint, and unit tests - it shows only in the rendered output, where a side-by-side comparison makes it obvious and a prose review walks past it.

## How to Apply

- Capture the design (Figma screenshot) and the running app at the same view, and compare them side by side: colors, padding, spacing, type, alignment.
- Check at the resolutions that matter - the breakpoints the view targets - since responsive rules change layout (e.g. callouts hidden at narrow widths, so verify at a width where they show).
- Where the view is meant to match the design it must match, or the difference must be explainable. Flag every unexplained inconsistency.
- Treat this as part of verification, alongside the functional checks.

## Related

- [Always Verify Before Reporting Done](../behavior/always-verify-before-reporting-done.md)
- [Review Changes Before Reporting Done](../behavior/review-changes-before-reporting-done.md)
- [Always Use Design Tokens for Colors](../web/always-use-design-tokens-for-colors.md)
- [Note Issues](../behavior/note-issues.md)
