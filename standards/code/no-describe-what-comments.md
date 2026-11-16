# No Describe-What Comments

Don't add comments that describe what a class/function does or which other code consumes it. Naming and reading the code is enough. Behavior and feature description live in feature docs; rationale lives in PR descriptions and commit messages.

## Why

Comments duplicate or drift from the code. Something like "Builds one config per entity; triggered by the selection page..." is just a call-graph paraphrase. Hardcoded routes or paths inside comments are a smell because they rot the moment a route moves.

## How to Apply

Default is no comment. Only keep one for:

- Hidden constraints (an invariant the code doesn't make obvious).
- Library quirks that would tempt a wrong rewrite.
- Workarounds for a specific bug.
- Escape hatches that genuinely must stay.

## Related

- [Feature Template](../docs/feature-template.md)
- [Escape Hatch Comments](escape-hatch-comments.md)
