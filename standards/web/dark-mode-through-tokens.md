# Dark Mode Through Tokens

A fill that follows the color mode, such as a mask, a scroll fade or a shadow, comes from a token with a dark value ([Always Use Design Tokens For Colors](always-use-design-tokens-for-colors.md)), or is a transparent cutout.

## Why

Every color flips with the mode, everywhere it is used.

## How To Apply

- When adding or auditing dark mode, find the hardcoded color literals used as opaque fills and replace each with a token.
- Give a token without a dark value one, derived from the composite the element sits on: the surface's alpha over the dark page background. It is added like any missing token ([Always Use Design Tokens For Colors](always-use-design-tokens-for-colors.md)).
- An element that can render over more than one surface has no single fill that matches every surface. Carve its cutout transparently instead (a mask over the gradient), so the gap shows whatever background is behind it and needs no color at all.
- A design system's surface and shadow tokens may carry no dark-mode value, and code then tends to hardcode light literals as opaque fills. In dark mode those stay bright.

## Related

- [Always Use Design Tokens For Colors](always-use-design-tokens-for-colors.md)
- [SCSS Shared Partial Imports](scss-shared-partial-imports.md)
