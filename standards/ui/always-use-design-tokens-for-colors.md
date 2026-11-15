# Always Use Design Tokens for Colors

Every color comes from a design-system token, referenced through its sanctioned SCSS API: the `@use`'d namespace, `color.$bg-brand-default` and the like. Never hardcode a hex or rgb literal, never invent your own color, and never reach past the SCSS tokens to the raw `var(--color-...)` custom property.

## Why

The custom property is the design system's internal plumbing: referencing the raw `var()` bypasses the token API and breaks when the underlying variable is renamed. A hex that happens to equal a token is still a magic literal that drifts and skips theming.

## How to apply

- Color belongs in SCSS, pulled from the `@use`'d token namespace: `@use '...scss/color'; stroke: color.$bg-brand-default;`. The same discipline covers spacing, radius and typography tokens.
- When the color is dynamic or chosen in TS, the component emits a key or variant, never a hex or a `var(--...)` string, and the SCSS maps that key to the token (a modifier class, an `@each` over a `$key: color.$token` map). SVG `stroke=`/`fill=` presentation attributes can't resolve tokens, so bind a class instead of a style string.
- Pick an existing color as it is before any new one: no lightened, darkened or blended shade of a token for a new element when an existing color reads well.
- A genuinely missing token is a design-system gap: add it to the project's own token layer and surface the gap to the director ([Library Feedback](../docs/library-feedback.md)); never a raw value in its place.
- Prefer to lint-enforce: no raw hex and no `var(--color-...)` in component code outside the token definitions.

## Related

- [UI Refactor: Preserve, Don't Redesign](ui-refactor-preserve-dont-redesign.md)
- [Dark Mode Through Tokens](dark-mode-through-tokens.md)
- [Don't Introduce Tech Debt](../behavior/dont-introduce-tech-debt.md)
