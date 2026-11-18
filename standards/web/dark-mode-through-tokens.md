# Dark Mode Through Tokens

A design system's surface and shadow tokens may carry no dark-mode value, and code then tends to hardcode light literals as opaque fills for masks, scroll fades and shadows. In dark mode those stay bright. The fix is a token, never a literal: every color, its dark value included, comes from the token layer ([Always Use Design Tokens for Colors](always-use-design-tokens-for-colors.md)).

## Why

Every color flips with the mode, everywhere it is used.

## How to Apply

- A literal override is a magic value per color mode: it drifts from the palette, has to be found again for every new mode, and skips theming.
- When adding or auditing dark mode, find the hardcoded color literals used as opaque fills and replace each with a token.
- A token without a dark value gets one in the token layer, derived from the composite the element sits on: the surface's alpha over the dark page background. Where the design system is not the project's own, the project's token layer adds it and the gap is surfaced to the director ([Library Feedback](../docs/library-feedback.md)).
- An element that can render over more than one surface has no single fill that matches every surface. Carve its cutout transparently instead (a mask over the gradient), so the gap shows whatever background is behind it and needs no color at all.

## Related

- [SCSS Shared Partial Imports](scss-shared-partial-imports.md)
