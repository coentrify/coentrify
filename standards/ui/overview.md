# Overview

The UI standards: components and styling.

- [Always Use Design Tokens for Colors](always-use-design-tokens-for-colors.md) - colors only from SCSS tokens, never raw hex or var(); prefer existing colors
- [Communicate State](communicate-state.md) - every state is visible; never let error look like empty
- [Dark Mode Through Tokens](dark-mode-through-tokens.md) - a fill that follows the color mode comes from a token with a dark value, or is a transparent cutout; never a literal override
- [Hidden Attribute Loses To Display](hidden-attribute-loses-to-display.md) - pair [hidden] with display: none; verify what is painted
- [Never Obscure Information the User Needs](never-obscure-information-the-user-needs.md) - never collapse distinct states or offer ambiguous choices
- [SCSS Shared Partial Imports](scss-shared-partial-imports.md) - shared SCSS partials via `@use '@styles/<name>'`, no alias
- [Transitions Only On User Toggle](transitions-only-on-user-toggle.md) - transitions only on user toggles, never on load or resize
- [UI Component Design](ui-component-design.md) - shared ui is pure: inputs, slots, strict BEM
- [UI Layout via Slot Composition](ui-layout-via-slot-composition.md) - layout through generic slots, not config props
- [UI Library Is Domain-Agnostic](ui-library-is-domain-agnostic.md) - ui stays domain-agnostic; domain maps live in the feature
- [UI Refactor: Preserve, Don't Redesign](ui-refactor-preserve-dont-redesign.md) - a ui extraction looks exactly as before; differences become variants
- [UI Styleguide](ui-styleguide.md) - every ui layer gets a styleguide with variants and a testbox
- [UI Variants By Function, Not By Color](ui-variants-by-function-not-by-color.md) - variant inputs are named by function, not color
- [Validation Errors Fire on Submit](validation-errors-fire-on-submit.md) - submit reveals validation errors from any gesture
- [Walk The User's Journey](walk-the-users-journey.md) - design and check every screen as the user's journey: who, experiencing what, wanting what, the next question at each step; show what means something to the user
