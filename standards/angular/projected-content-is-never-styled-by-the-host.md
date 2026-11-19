# Projected Content Is Never Styled by the Host

A component's styles never reach content projected through `ng-content`. The content is styled from its own component, or the host renders the element itself.

## Why

A style belongs with the component that owns the element.

## How to Apply

- Style projected children from their own component, or give the host an input that renders the element itself (such as an `emptyText` input).
- Put state that must affect projected content on the container the host owns (the host's own wrapper element, not the projected child).
- Never reach for `::ng-deep` or `ViewEncapsulation.None` for this. Treat the miss as a design smell.

## Examples

- An overlay's `pointer-events: auto` for projected panels never applies, so no button takes clicks.
- An empty-state paragraph projected into a section renders unstyled.

## Related

- [No Inline Templates](no-inline-templates.md)
- [Prefer Content Projection over Props (Angular)](prefer-content-projection-over-props-angular.md)
