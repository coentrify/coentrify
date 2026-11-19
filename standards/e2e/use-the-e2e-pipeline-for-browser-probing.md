# Use The E2E Pipeline For Browser Probing

When investigating live browser DOM (e.g. how a third-party component renders, what roles its options expose, where a clear button lives), drop the probing into a Playwright spec in the project's e2e folder and run it through the project's e2e script.

## Why

The project already has a browser harness, and using it asks the director for no extra permissions.

## How To Apply

- Name the file with a clear probe prefix (e.g. `_probe-<topic>.spec.ts`) so it's easy to find and remove.
- Tag tests with a unique tag (e.g. `@probe`) and grep for it: `e2e -- --grep @probe`.
- Use `console.log` inside the test - Playwright surfaces it in the reporter output.
- Remove the probe file before declaring the work done, or commit it intentionally if it earns its keep.

## Related

- [Non-Destructive Documenting And Test Automation](../behavior/non-destructive-documenting-and-test-automation.md)
