# UI Copy in Template

UI copy (labels, errors, tooltips) lives in the template. The component exposes booleans/enums for the condition. The template inlines the literal text inside the matching `@if` or `@switch` branch.

## Why

Everything the user reads is found in the template.

## How to Apply

Flag names describe the state (`hasForbiddenError`), not the message.

```html
@if (hasForbiddenError) { <callout>No access to this app.</callout> }
```

With a translate pipe:

```html
@if (hasForbiddenError) { <callout>{{ 'errors.forbidden' | translate }}</callout> }
```

## Related

- [Name by Concept, Not Copy](../code/name-by-concept-not-copy.md)
- [Static Attribute, Not Literal Binding](static-attribute-not-literal-binding.md)
