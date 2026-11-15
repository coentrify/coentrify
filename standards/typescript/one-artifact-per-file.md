# One Artifact Per File

Each exported artifact - a type, a `const … as const`, a class, an interface, an enum-pattern - should live in its own file named after it, under the matching folder (`*.type.ts` in `types/`, `*.const.ts` in `constants/`). Never bundle several artifacts into one file. A folder's file list then is the list of artifacts: a navigable index layer.

## Why

- A single artifact can be imported and read without loading every sibling, so reads stay focused and cheap on tokens.
- The file list reveals the app's scale and surface at a glance, without opening anything.
- Bundling obfuscates how much exists and forces a whole-file read just to use one symbol.

## How to apply

- Split any bundle (wire-type god-files are the usual offender) into one file per artifact.
- Re-export siblings from the folder barrel so consumers still import from one place.

## Related

- [Barrel Imports](barrel-imports.md)
- [No Magic Values](no-magic-values.md)
- [Folder Concerns](../architecture/folder-concerns.md)
