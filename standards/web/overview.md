# Overview

The Web standards: rules for HTML and CSS.

- [Always Use Design Tokens for Colors](always-use-design-tokens-for-colors.md) - colors only from SCSS tokens, never raw hex or var(); prefer existing colors
- [Dark Mode Through Tokens](dark-mode-through-tokens.md) - a fill that follows the color mode comes from a token with a dark value, or is a transparent cutout; never a literal override
- [Hidden Attribute Loses To Display](hidden-attribute-loses-to-display.md) - pair [hidden] with display: none; verify what is painted
- [SCSS Shared Partial Imports](scss-shared-partial-imports.md) - shared SCSS partials via `@use '@styles/<name>'`, no alias
- [Transitions Only On User Toggle](transitions-only-on-user-toggle.md) - transitions only on user toggles, never on load or resize
