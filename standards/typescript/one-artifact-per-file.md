# One Artifact Per File

Each exported artifact - a type, a class, an interface, each half of the `as const` and `Enum<T>` pattern - should live in its own file named after it, under the matching folder (`*.type.ts` in `types/`, `*.const.ts` in `constants/`). Never bundle several artifacts into one file. A folder's file list then is the list of artifacts: a navigable index layer.

## Why

A read stays on the one artifact it needs.

## How To Apply

- Split any bundle (wire-type god-files are the usual offender) into one file per artifact.
- Re-export siblings from the folder barrel so consumers still import from one place.
- The one exception is the mock contract's single `.const.ts` ([E2E Mock Contract](../e2e/e2e-mock-contract.md)).

## Related

- [Barrel Imports](barrel-imports.md)
- [No Magic Values](no-magic-values.md)
- [Folder Concerns](../architecture/folder-concerns.md)
