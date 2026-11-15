# No Abbreviated Names

Every identifier carries the full name of what it holds, never a single letter or clipped abbreviation. This is language-agnostic: TypeScript locals, params and aliases, SCSS variables, map keys, and CSS/BEM class modifiers all spell things out.

## Why

A clipped name makes the reader carry "c means child" (or "c means categorical") for the whole block, and it obscures intent at the call site. Spelling it out is free; the readability cost of the abbreviation outlasts the keystrokes saved.

## How to apply

- Name a control-flow alias after the value it holds: `@if (child(); as child)`, never `as c`.
- In SCSS, name map keys and loop variables for what they are: `@each $modifier, $color in ...`, keys like `categorical-1`, not `c1`.
- Class/BEM modifiers spell out the concept: `--categorical-1`, `--brand`, not `--c1`.
- When the source getter, signal, or token already has a good name, reuse it.
- Prefer a lint rule over catching this by eye in review.

## Related

- [Code Principles](code-principles.md)
- [Pre-empt Recurring Code-Review Nits](pre-empt-recurring-code-review-nits.md)
