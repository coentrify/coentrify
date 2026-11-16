# Init Scripts Need a Navigation

`page.addInitScript` registers a script that runs at the start of every navigation. State set by helpers built on it, such as a scenario or flag setter, takes effect only after the next navigation, never when the helper resolves.

## Why

A spec that boots in `beforeEach` (sign-in plus `page.goto('/')`) has already navigated when the test body runs, so a scenario set inside the test still meets the old one at the mock. Writing the value with `page.evaluate` into session storage is no substitute: the app has already bootstrapped, and only later reads see the new value.

## How to Apply

- Per-test scenario change in a suite that navigates in `beforeEach`: `await setScenario(...); await page.reload();` before exercising the feature.
- A test that needs the scenario before its only navigation sets it first, then calls `page.goto`; no reload needed.

## Related

- [E2E Test Conventions](e2e-test-conventions.md)
- [E2E Mock Contract](e2e-mock-contract.md)
- [Develop Against Mocks](../tooling/develop-against-mocks.md)
