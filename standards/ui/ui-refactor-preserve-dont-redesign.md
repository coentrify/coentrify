# UI Refactor: Preserve, Don't Redesign

Extracting feature markup into shared `ui` primitives, or consolidating duplicated styles, is a refactor: the rendered result must look exactly as before. Where two consumers had genuinely different styling, preserve both as named variants on the primitive; never silently normalize them to one "consistent" treatment.

## Why

Design decisions stay with the director.

## How to Apply

- Before extracting, diff the old per-consumer values (color, font scale and weight, spacing, border and fill). Every difference becomes a variant input with a functional name (`size`, `tone`, `variant`), defaulting to the most common case; the other consumers opt in.
- Verify fidelity by comparing computed styles in preview against the originals; "looks close" is not enough.
- Use theme tokens for every value: color (`color.$text-*`), spacing (`dimension.$space-*`), typography mixins (`typography.ui-secondary-md()`), radius (`radius.$*`). Hardcode only when no token exists (a layout cap like a 320px scroll height), as a justified escape hatch with a note. The same bar holds for `ViewEncapsulation.None` and casts.
- A genuine consistency improvement (normalizing incidental drift) is a separate, opt-in change: propose it on its own instead of bundling it into the refactor.

## Examples

- A consolidation can quietly change the visuals: a brand-colored count goes gray, compact details grow, a panel's padding shifts.

## Related

- [General Working Rules](../behavior/general-working-rules.md)
- [UI Variants By Function, Not By Color](ui-variants-by-function-not-by-color.md)
- [UI Library Is Domain-Agnostic](ui-library-is-domain-agnostic.md)
- [Escape Hatch Comments](../code/escape-hatch-comments.md)
