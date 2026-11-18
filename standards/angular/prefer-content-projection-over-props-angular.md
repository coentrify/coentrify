# Prefer Content Projection over Props (Angular)

For UI and app components in Angular, use content projection (`ng-content` slots) for content - not data props. The consumer composes children inline with labels, icons, and conditionals.

## Why

Responsibility and authority over content stay with the consumer: content lives where it is listened to. The consumer orchestrates, and the component presents.

## How to Apply

For collections, define a `<*-item>` child component and read it via `contentChildren()`. Conditionals live in the consumer template (`@if`), not in TS.

## Related

- [UI Component Design](../ui/ui-component-design.md)
- [UI Layout via Slot Composition](../ui/ui-layout-via-slot-composition.md)
