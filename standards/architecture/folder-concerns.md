# Folder Concerns

Inside any folder, sub-folders are either all **domain** (functional, by-feature) or all **technical** (categorical, by-artifact-type), never a mix. Keep the tree as flat as possible.

## Why

Mixed folders force a reader to keep two mental models active at the same level: "is this a feature or a type?". Splitting cleanly means every level answers exactly one question. Flat is preferable to nested when neither concern dominates.

## Examples

Domain (functional) - sub-folders are entities, features, or apps:

- `apps/` -> `admin/`, `client/`, `supplier/`.
- `components/` -> `button/`, `icon/`, `card/`.

Technical (categorical) - sub-folders are types of artifact:

- `ui/` -> `components/`, `types/`, `generics/`.
- `admin/` -> `pages/`, `dialogs/`, `routes/`.

## How to Apply

When adding a sub-folder, match the kind of its existing siblings. If it would be the other kind, refactor first: insert a level above to separate the concerns, or rethink the structure.

## Related

- [App-Shield](app-shield.md)
- [One Component per Folder, Flat](../angular/one-component-per-folder-flat.md)
