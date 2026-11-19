# No Describe-What Comments

Don't add comments that describe what a class/function does or which other code consumes it. Naming and reading the code is enough. Behavior and feature description live in feature docs. Rationale lives in PR descriptions and commit messages.

## Why

What the code does is said once, by the code and its names.

## How To Apply

Default is no comment. Only keep one for:

- Hidden constraints (an invariant the code doesn't make obvious).
- Library quirks that would tempt a wrong rewrite.
- Workarounds for a specific bug.
- Escape hatches that must stay.

Two kinds of comment to drop on sight:

- A call-graph paraphrase, such as `Builds one config per entity; triggered by the selection page...`.
- A hardcoded route or path, which rots the moment the route moves.

## Related

- [Feature Template](../docs/feature-template.md)
- [Escape Hatch Comments](escape-hatch-comments.md)
