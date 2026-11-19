# Bracket State Changes With Contrast Assertions

For any test that observes a state change - a toggle, a switch, an open/close, a navigation, a selection - assert both axes on both sides of the change. Before: A is true, B is false. After: A is false, B is true.

## Why

A test proves that the new state replaced the old one.

## How to Apply

- Toggle (collapse/expand, open/close):
  - Before, closed visible and open not.
  - After, open visible and closed not.
- Switch (app, theme, mode):
  - Before, A active and B not.
  - After, B active and A not.
- Navigation:
  - Before, source page visible and destination not.
  - After, destination visible and source not.
- Selection in a list:
  - Before, nothing selected.
  - After, the picked item selected and the rest not.
- No-op: identical assertions before and after prove the action changed nothing.
- Assert both axes with [Implementation-Agnostic Assertions](implementation-agnostic-assertions.md).
- Overview tests skip the bracketing ([Per-Feature Overview Test](../e2e/per-feature-overview-test.md)).

## Combine Simple Opposites into One Bracketed Test

Two tests for opposite sides of one binary toggle (`hidden when disabled` and `visible when enabled`, `disabled when invalid` and `enabled when valid`, `closed by default` and `open after click`) become one bracketed test of the transition. It carries both use-case ids, so the mapping in the feature spec stays intact and `e2e:case <id>` resolves either way.

- Two single-axis tests both pass on an implementation that always shows the positive state. One bracketed test catches it.
- It halves boot and teardown cost and reads as the behavior the user sees: flip the flag, see the change.
- Contrasts that are functionally distinct scenarios with different inputs keep separate tests: lookup hit and miss, mutation success, server error and validation error, normal flow and auth error.

## Related

- [E2E Tests Must Demonstrate Behavior](../e2e/e2e-tests-must-demonstrate-behavior.md)
