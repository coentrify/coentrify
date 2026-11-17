# Projected Content Is Never Styled by the Host

A component's styles never reach content projected through `ng-content`. The content is styled from its own component, or the host renders the element itself.

## Why

An overlay's `pointer-events: auto` for projected panels never applies, so no button takes clicks; an empty-state paragraph projected into a section renders unstyled.

## How to Apply

- Style projected children from their own component, or give the host an input that renders the element itself (the section's `empty` line).
- Put state that must affect projected content on the container the host owns (the column, not the projected panel).
- Never reach for `::ng-deep` or `ViewEncapsulation.None` for this; treat the miss as a design smell.

## Related

- [No Inline Templates](no-inline-templates.md)
- [Prefer Content Projection over Props (Angular)](prefer-content-projection-over-props-angular.md)
