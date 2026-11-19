# UI Variants By Function, Not By Color

When a UI component supports multiple visual variants, the input describes the function of the variant, not the color. The component decides what the variant looks like.

```
<alert variant="warning" />   // function-named input; component picks the color
<alert color="orange" />      // visual leak; caller dictates implementation
```

## Why

The look stays the UI layer's to decide, so a rebrand touches one place.

## How to Apply

- Name inputs after intent: `severity`, `tone`, `variant`, `state`, `type`.
- Accept a closed set of semantic values in generic presentation vocabulary (`'info' | 'warning' | 'error' | 'success'`), never domain values (`'active' | 'ended'`). The consumer maps a domain value to a variant ([UI Library Is Domain-Agnostic](ui-library-is-domain-agnostic.md)).
- Keep color, font and shadow choices inside the component's styles.
- A variant with only one visual treatment today is still worth typing functionally. Future variants slot in without a rename.

## Related

- [UI Component Design](ui-component-design.md)
