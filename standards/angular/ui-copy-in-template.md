# UI Copy in Template

UI copy (labels, errors, tooltips) lives in the template. The component exposes booleans/enums for the condition; the template inlines the literal text inside the matching `@if` or `@switch` branch.

Flag names describe the state (`hasForbiddenError`), not the message.

```html
@if (hasForbiddenError) { <callout>No access to this app.</callout> }
```

With a translate pipe:

```html
@if (hasForbiddenError) { <callout>{{ 'errors.forbidden' | translate }}</callout> }
```

## Why

Copy is presentation. Inline copy reduces review noise on text tweaks and keeps the component class free of presentation concerns.
