# E2E Assert Before Interacting

An e2e test never assumes an element is there. Before any interaction or deeper assertion that depends on presence, it asserts presence first.

## Why

When an element is missing, behind a closed dialog, replaced by a wrapper or not settled yet, the failure should land on the presence assertion with the locator named. Without it the failure surfaces deeper, as a fill on an uneditable element or a URL check timing out on the wrong screen, which points at the wrong line and hides the cause.

## How to Apply

- Before a fill, assert the input is editable, then fill.
- Before a click, assert the target is visible, then click.
- Before chained assertions on the contents of a dialog, sheet or drawer, assert the container is open.
- Before asserting a navigation result, assert the trigger landed (button gone, spinner shown, route in flight).
- Nullable returns from the test runner (bounding box, text content, attribute) go through a presence-asserting helper, never a bald cast or a manual throw.

## Related

- [Implementation-Agnostic Locators](../tests/implementation-agnostic-locators.md)
- [E2E Tests Must Demonstrate Behavior](e2e-tests-must-demonstrate-behavior.md)
