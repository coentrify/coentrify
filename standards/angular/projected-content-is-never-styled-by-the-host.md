# Projected Content Is Never Styled by the Host

With Angular's emulated encapsulation a component's styles only reach the
elements of its own template. Content projected through `ng-content`
carries the parent's scoping attribute, so selectors like
`.overlay > * > *` or `.section__empty` in the host's SCSS silently miss
it.

## Why

An overlay's `pointer-events: auto` for projected panels never applies,
so no button takes clicks; an empty-state paragraph projected into a
section renders unstyled.

## How to apply

- Style projected children from their own component, or give the host an
  input that renders the element itself (the section's `empty` line).
- Put state that must affect projected content on the container the host
  owns (the column, not the projected panel).
- Never reach for `::ng-deep` or `ViewEncapsulation.None` for this; treat
  the miss as a design smell.

## Related

- [No Inline Templates](no-inline-templates.md)
- [Prefer Content Projection over Props (Angular)](prefer-content-projection-over-props-angular.md)
