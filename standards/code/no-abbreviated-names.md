# No Abbreviated Names

Every identifier carries the full name of what it holds, never a single letter or clipped abbreviation. This is language-agnostic: TypeScript locals, params and aliases, SCSS variables, map keys, and CSS/BEM class modifiers all spell things out.

## Why

An abbreviation is an unnecessary abstraction: working out what it stands for costs extra compute.

## How to Apply

- Name a control-flow alias after the value it holds: `@if (order(); as order)`, never `as o`.
- In SCSS, name map keys and loop variables for what they are: `@each $modifier, $color in ...`, keys like `categorical-1`, not `c1`.
- Class/BEM modifiers spell out the concept: `--categorical-1`, `--brand`, not `--c1`.
- When the source getter, signal, or token already has a good name, reuse it.
- Prefer a lint rule over catching this by eye in review.

## Related

- [Code Principles](code-principles.md)
- [Pre-empt Recurring Code-Review Nits](pre-empt-recurring-code-review-nits.md)
