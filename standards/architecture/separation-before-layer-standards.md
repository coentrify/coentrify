# Separation Before Layer Standards

When cleaning up the codebase, getting app-shield layer separation clean comes first: every file should sit in its correct layer (ui / app / data / core / config) before any per-layer standards work begins. This is the top cleanup priority.

## Why

Layer placement is the foundation that the work on each layer stands on.

## How to Apply

- Land layer-placement moves first, for example domain data-access out of core into its proper data or feature layer.
- Then go layer by layer against each one's standards (ui: content projection over props; data: mappers / types / DTOs; core: generic infra only; and so on).

## Related

- [App-Shield](app-shield.md)
- [Always Work from a Plan](../behavior/always-work-from-a-plan.md)
