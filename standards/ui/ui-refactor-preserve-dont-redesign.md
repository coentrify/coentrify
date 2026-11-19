# UI Refactor: Preserve, Don't Redesign

Extracting feature markup into shared `ui` primitives, or consolidating duplicated styles, is a refactor: the rendered result must look exactly as before. Where two consumers had different styling, preserve both as named variants on the primitive, and never silently normalize them to one "consistent" treatment.

## Why

Design decisions stay with the director.

## How To Apply

- Before extracting, diff the old per-consumer values (color, font scale and weight, spacing, border and fill). Every difference becomes a variant input with a functional name (`size`, `tone`, `variant`), defaulting to the most common case. The other consumers opt in.
- Verify fidelity by comparing computed styles in preview against the originals. "Looks close" is not enough.
- Every value comes from the design system's tokens for color, spacing, typography and radius, such as `color.$text-*`. A missing token is added as [Always Use Design Tokens For Colors](../web/always-use-design-tokens-for-colors.md) says. A layout value that is no design token, such as a 320px scroll cap, is hardcoded as a justified escape hatch with a note. The same bar holds for `ViewEncapsulation.None` and casts.
- A consistency improvement (normalizing incidental drift) is a separate, opt-in change: propose it on its own instead of bundling it into the refactor.

## Examples

- A consolidation can quietly change the visuals: a brand-colored count goes gray, compact details grow, a panel's padding shifts.

## Related

- [General Working Rules](../behavior/general-working-rules.md)
- [UI Variants By Function, Not By Color](ui-variants-by-function-not-by-color.md)
- [UI Library Is Domain-Agnostic](ui-library-is-domain-agnostic.md)
- [Escape Hatch Comments](../code/escape-hatch-comments.md)
