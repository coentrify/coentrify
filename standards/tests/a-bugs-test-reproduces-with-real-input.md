# A Bug's Test Reproduces With Real Input

A test that guards a reported bug reproduces the director's own steps with real input: key presses one by one, select-all and delete, a click on the close button, Escape. Never Playwright's `fill()` or a call into the app for what the user types. Before the fix counts as verified, the test is run against the pre-fix code and seen to fail.

## Why

A bug from real use becomes an edge case the tests guard, as it happened.

## How To Apply

- Write the case from the director's words before the fix: red on the old code, green after.
- `fill()` and a call into the app skip what real typing fires.
- When the director reports a bug the tests say is fixed, check what the running app serves (the dev server's bundle, the stored state) before hunting in the code.

## Related

- [Real Input For Frame Races](../e2e/real-input-for-frame-races.md)
- [E2E Tests Must Demonstrate Behavior](../e2e/e2e-tests-must-demonstrate-behavior.md)
