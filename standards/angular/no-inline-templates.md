# No Inline Templates

Components reference their template via `templateUrl: 'name.html'` in a sibling `.html` file. Anything with attributes, multiple elements, or control flow goes there.

Inline `template:` is only for the app-root single-element wrapper (e.g. `<router-outlet />`).

## Why

External templates get formatter, lint, and IDE template-language support. "Small enough to inline" creep quietly buries non-trivial template logic inside a tagged template string.
