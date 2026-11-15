# One Component per Folder, Flat

Every component gets its own folder, named after it, under the right `components/` directory: `<components>/<component-name>/` holding `<component-name>.{ts,html,scss}` and an `index.ts`. Sibling components (for example `switcher` and `switcher-item`) are sibling folders, never nested or sharing a folder.

## Why

Predictable lookup, clean barrel exports and easy moves, in a shallow, grep-friendly tree. An inner file hidden in another component's folder is an "I'll clean it up later" smell.
