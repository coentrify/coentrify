# Prefer Content Projection Over Props (Angular)

Angular UI and app components take their content through `ng-content` slots, following the projection rule of [UI Component Design](../ui/ui-component-design.md).

## Why

Responsibility and authority over content stay with the consumer: content lives where it is listened to. The consumer orchestrates, and the component presents.

## How To Apply

- For a collection, define a `<*-item>` child component and read it via `contentChildren()`.
- Conditionals live in the consumer template (`@if`), not in TS.

## Related

- [UI Component Design](../ui/ui-component-design.md)
- [UI Layout Via Slot Composition](../ui/ui-layout-via-slot-composition.md)
