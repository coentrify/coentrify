# UI Library Is Domain-Agnostic

The shared `ui` library must stand on its own, extractable as-is into another app in a different domain. A ui component therefore knows nothing about the domain: it takes generic presentation primitives (a `severity` or `tone`, an `icon` name, a `label`, a generic `variant`) as inputs and renders them, and never maps a domain value to a presentation value.

## Why

The library can drop into an unrelated app unchanged.

## How To Apply

- The consumer in the app layer owns the domain-to-presentation map, such as a record status to a badge `tone`, and passes the resolved `tone` in.
- `data`, the data layer of [App-Shield](../architecture/app-shield.md), holds no such map either: it stays design-system-free and imports no design-system package.
- A duplicated map consolidates into one shared feature module instead of moving to ui.
- A component whose name or inputs encode a domain concept (an order status badge, a table with fixed domain columns) does not belong in ui. Generic primitives (badge, table, chart) do.

## Related

- [UI Variants By Function, Not By Color](ui-variants-by-function-not-by-color.md)
- [App-Shield](../architecture/app-shield.md)
- [UI Component Design](ui-component-design.md)
