# Implementation-Agnostic Assertions

Any test that asserts on rendered UI should assert what the user perceives. Prefer visibility, enabled, editable and visible-text checks over DOM count, attached-state and attribute checks.

## Why

An assertion phrased as DOM state (count of matching nodes, attached or detached, attribute presence) breaks the day someone changes how visibility is achieved: a conditional render swapped for `display: none`, a lazy render, an exit animation, a portal. The user sees no change, yet the test fails. User-perceived assertions survive those refactors and match what the feature promises.

## How to Apply

- For presence: `toBeVisible` (and `not.toBeVisible` for absence).
- For interaction state: `toBeEnabled` / `toBeDisabled`, `toBeEditable`, `toBeChecked`, `toBeFocused`.
- For content: `toHaveText` / `toContainText`, `toHaveValue`.
- Reach for `toHaveCount` only when the assertion is genuinely about cardinality ("the list shows exactly three results"), never as a stand-in for "this element is gone".
- Reach for `toHaveAttribute` only when the attribute is part of the user-facing contract (`aria-label`, `href`, `for`), never for internal data attributes.

## Related

- [Implementation-Agnostic Locators](implementation-agnostic-locators.md)
