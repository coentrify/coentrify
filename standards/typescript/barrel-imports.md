# Barrel Imports

Within a lib, import a symbol through its folder's barrel index, not the deep file path - `from '../constants'`, not `from '../constants/observation-origins.const'`. The IDE surfaces the barrel import as a quick-fix hint; take it.

## Why

- One stable import path per folder; moving or renaming the source file doesn't ripple to consumers.
- The import reads cleaner and matches the index layer that one-artifact-per-file creates.

## How to Apply

- Import from the nearest barrel that re-exports the symbol.
- Scope is intra-lib sibling imports. This does not override the app-shield rule against static imports across lazy-loaded edges, nor the e2e mock narrow-alias exception.
- Worth enforcing with a lint rule so deep-path imports get flagged automatically.

## Related

- [One Artifact Per File](one-artifact-per-file.md)
- [App-Shield](../architecture/app-shield.md)
- [E2E Mock Contract](../e2e/e2e-mock-contract.md)
