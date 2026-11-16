# Hygiene Tests Run on Their Own Runner

Source hygiene checks (import boundaries, banned legacy APIs, dead components, TODO trails) are plain vitest specs that read the source tree with node's file system, kept in their own top-level folder with their own vitest config in the node environment and their own npm script. They never go through the framework's unit-test builder, which bundles specs for a browser-like environment where node modules are not available.

## Why

A separate, tiny config runs in milliseconds and stays independent of the app build.

## How to Apply

- Put the checks in `hygiene/` with a `vitest.hygiene.config.ts`, script `test:hygiene`, and add it to the pre-push chain.
- Resolve relative imports against the file's directory before judging a layer crossing; a subfolder named like a layer (`ui/core`) otherwise triggers false positives.
- Each rule sweeps the whole tree and reports offenders as a list, so a failure names every file to fix.

## Related

- [Always Verify Before Reporting Done](../behavior/always-verify-before-reporting-done.md)
- [Code Review Compounds Into Patterns and Sweeps](../behavior/code-review-compounds-into-patterns-and-sweeps.md)
