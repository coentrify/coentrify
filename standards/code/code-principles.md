# Code Principles

Code follows four principles: a single responsibility, composition over extension, generic types, and responsibilities kept apart.

## Why

Code with a single responsibility per piece stays stable.

## Single Responsibility

- A piece of code should do one thing. Coupling several responsibilities into one unit via flags or conditionals is a split signal.

## Dependency Injection

- Compose, don't extend.

## Generic Types

- Use generic types for content that may vary, even though the base interface differs.

## Decouple Responsibilities

- Branching on caller identity (which application, which role) inside a shared unit means the responsibilities should live in separate units.
- An effect and its source stay apart:
  - The target carries a generic state (`isEnabled`, a discount factor) and never names what grants it.
  - The source declares what it grants in configuration (`enablesExport: true` on the granting plan), and a mapper of its own resolves it.
- A target flag that names its source (`isWaitingForX`) is fundamentally bad design. The pattern applies to every modifier, permission and feature flag.

## Related

- [Per-Application Split Over Shared Branching](../architecture/per-application-split-over-shared-branching.md)
- [App-Shield](../architecture/app-shield.md)
