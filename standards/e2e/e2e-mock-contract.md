# E2E Mock Contract

Mock scenario values, storage keys and toggle flags are a shared contract between the mock layer (which lives inside the app) and any consumer that drives mock state (e2e tests, dev-mode toggles). They live in a single `.const.ts` in the mock module that every consumer imports.

## Why

The constants are the protocol between the layers, so every side shares one copy.

## How To Apply

- Literals duplicated across the mock interceptor and the spec files drift: a renamed scenario or storage key leaves every spec type-checking against its own stale copy, and tests pass falsely on a broken flow.
- The const file exports grouped `as const` objects for storage keys, scenario values and the flag-on sentinel ([No Magic Values](../typescript/no-magic-values.md)).
- Mock interceptors and providers import them relatively within the module.
- E2E specs and helpers import them through a narrow path alias that points straight at the const file, never through an Angular barrel. The runner that loads spec files cannot bootstrap Angular, so a barrel that pulls Angular code crashes it with JIT-compile errors.
- Distinct use cases that represent distinct backend states get distinct scenarios, even when the UX outcome is the same. Two use cases driving one scenario exercise one code path, so only one is verified.

## Related

- [Develop Against Mocks](../tooling/develop-against-mocks.md)
- [E2E Tests Must Demonstrate Behavior](e2e-tests-must-demonstrate-behavior.md)
