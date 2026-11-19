# Barrel Imports

Within a lib, import a symbol through its folder's barrel index, not the deep file path - `from '../constants'`, not `from '../constants/sort-order.const'`. The IDE surfaces the barrel import as a quick-fix hint. Take it.

## Why

An import path stays the same when a file moves.

## How To Apply

- Import from the nearest barrel that re-exports the symbol.
- Scope is intra-lib sibling imports. This does not override the [App-Shield](../architecture/app-shield.md) rule against static imports across lazy-loaded edges, nor the narrow-alias exception of the [E2E Mock Contract](../e2e/e2e-mock-contract.md).
- Enforce it with a lint rule that flags deep-path imports ([Pre-Empt Recurring Code-Review Nits](../code/pre-empt-recurring-code-review-nits.md)).
- Barrel imports are shorter, and group well.
- A cycle between modules shows quickly through the barrels, which keeps the architecture in line.

## Related

- [One Artifact Per File](one-artifact-per-file.md)
- [App-Shield](../architecture/app-shield.md)
- [E2E Mock Contract](../e2e/e2e-mock-contract.md)
