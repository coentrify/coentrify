# Gestures In Tests

A feature that offers several ways to trigger one action (send via Enter or the send button) gets its gestures tested once, through one dispatcher test, while every helper defaults to the gesture a real user makes at that viewport.

## Why

Tests stay as close to real usage as possible.

## One Test Per Dispatcher

Two tests that differ only in how the user triggers the same dispatcher exercise the dispatcher twice and add nothing for the gestures. Collapse them into one test that drives the dispatcher with both gestures in sequence.

- Fold two tests whose bodies differ only in `press('Enter')` versus `button.click()`. The natural home for the alternative gesture is a multi-step happy path (first action via Enter, follow-up via click).
- Keep the tests separate when the alternative gesture trips a different code path (Enter picks a dropdown option, a click triggers a route change). That is a different dispatcher.
- Validation that routes through a shared submit handler gets no "via X" variant. Test the handler once.

## Every Edge Case Keeps Its Test

Collapsing applies only to same-dispatcher, same-outcome tests. Every edge case is tested: outcomes that differ in result, state or user-facing message (a failed hide and a failed show, each with its own error copy) are distinct edge cases, each with its own test. Never drop a distinct edge's coverage, or delete its now-unused fixture or export, as redundant. Add the missing test instead.

## Gesture By Device

Multi-gesture helpers default to the gesture a real user makes at that viewport: mobile users tap the send button, tablet and desktop users press Enter or click. Phone soft keyboards often lack an Enter key, so a mobile test pressing Enter misses the path users take.

- Compare the viewport width with the tablet breakpoint:
  - Below is mobile and clicks.
  - At or above uses keyboard or click.
- Keep an explicit `gesture` parameter so the dispatcher test can drive both paths in sequence.
- The same holds anywhere a test touches the UI: swipe or scroll wheel, long-press or right-click.

## Related

- [Bracket State Changes With Contrast Assertions](bracket-state-changes-with-contrast-assertions.md)
- [Validation Errors Fire on Submit](../ui/validation-errors-fire-on-submit.md)
- [E2E Tests Must Demonstrate Behavior](../e2e/e2e-tests-must-demonstrate-behavior.md)
