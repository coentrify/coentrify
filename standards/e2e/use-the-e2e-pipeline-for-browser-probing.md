# Use the E2E Pipeline for Browser Probing

When investigating live browser DOM (e.g. how a third-party component renders, what roles its options expose, where a clear button lives), drop the probing into a Playwright spec under `apps/<app>-e2e/src/` and run it through the normal `nx e2e` / `e2e` command.

## Why

Ad-hoc `node ./probe.mjs` style scripts trigger per-invocation permission prompts. They also reinvent the wheel - the project already has a configured Playwright + dev-server harness via the e2e target.

## How to Apply

- Name the file with a clear probe prefix (e.g. `_probe-<topic>.spec.ts`) so it's easy to find and remove.
- Tag tests with a unique tag (e.g. `@probe`) and grep for it: `e2e -- --grep @probe`.
- Use `console.log` inside the test - Playwright surfaces it in the reporter output.
- Remove the probe file before declaring the work done, or commit it intentionally if it earns its keep.

## Related

- [Non-Destructive Documenting and Test Automation](../behavior/non-destructive-documenting-and-test-automation.md)
