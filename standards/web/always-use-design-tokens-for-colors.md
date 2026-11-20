# Always Use Design Tokens For Colors

Every color comes from the project's own token layer, which wraps the design system's tokens in one place: its SCSS namespace, the custom properties it documents as public, or a token object in code. Components use that layer, such as `color.$bg-brand-default`. Never hardcode a hex or rgb literal, never invent your own color, and never reach past the layer to the design system's own variables.

## Why

Every color follows the design system, its themes and its renames included.

## How To Apply

- Where the layer is SCSS, color is pulled from its `@use`'d namespace: `@use '...scss/color'; stroke: color.$bg-brand-default;`. The same discipline covers spacing, radius and typography tokens.
- When the color is dynamic or chosen in TS, the component emits a key or variant, never a hex or a `var(--...)` string, and the SCSS maps that key to the token (a modifier class, an `@each` over a `$key: color.$token` map). SVG `stroke=`/`fill=` presentation attributes can't resolve tokens, so bind a class instead of a style string.
- A scene drawn in code, such as a canvas, reads its colors from the token layer's object in code.
- Pick an existing color as it is before any new one: no lightened, darkened or blended shade of a token for a new element when an existing color reads well.
- A missing token is added to the project's own token layer, never a raw value in its place. Where the design system is large and mature enough to have owners, the gap is surfaced for them ([Library Feedback](../docs/library-feedback.md)).
- Lint against raw hex and the design system's own variables in component code outside the token layer ([Pre-Empt Recurring Code-Review Nits](../code/pre-empt-recurring-code-review-nits.md)).
- A design system variable used directly bypasses the token layer, and breaks when the design system renames it.
- A color literal, even one that equals a token, is a magic value per color mode: it drifts from the palette, has to be found again for every new mode, and skips theming.

## Related

- [UI Refactor: Preserve, Don't Redesign](../ui/ui-refactor-preserve-dont-redesign.md)
- [Dark Mode Through Tokens](dark-mode-through-tokens.md)
- [Don't Introduce Tech Debt](../behavior/dont-introduce-tech-debt.md)
