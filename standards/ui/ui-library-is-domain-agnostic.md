# UI Library Is Domain-Agnostic

The shared `ui` library must stand on its own, extractable as-is into another app in a different domain. A ui component therefore knows nothing about the domain: it takes generic presentation primitives (a `color` or `severity`, an `icon` name, a `label`, a generic `variant` or `tone`) as inputs and renders them. It never encodes a map from a domain value to a presentation value.

## Why

The library can drop into an unrelated app unchanged.

## How to Apply

- A domain-to-presentation map, such as a record status to a badge color, is domain knowledge, and stays out of ui.
- The consumer (feature or app) owns the domain-to-primitive mapping and passes the resolved value in, such as a `color` to a generic badge.
- Domain-to-presentation maps live in the feature or app layer, never in ui or `data`; `data` stays design-system-free and imports no design-system package. A duplicated map consolidates into one shared feature module instead of moving to ui.
- A component whose name or inputs encode a domain concept (an order status badge, a table with fixed domain columns) does not belong in ui. Generic primitives (badge, table, chart, with a domain-flavored name at most) do.

## Related

- [UI Variants By Function, Not By Color](ui-variants-by-function-not-by-color.md)
- [App-Shield](../architecture/app-shield.md)
- [UI Component Design](ui-component-design.md)
