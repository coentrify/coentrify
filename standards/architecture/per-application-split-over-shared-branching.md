# Per-Application Split Over Shared Branching

Prefer per-application components over shared components that branch on application flags; duplication is acceptable. Visibility gates are opt-in whitelists.

## Why

An application orchestrates its components, so no shared component has to branch on the application.

## How to Apply

- Visibility gates list the applications that should see the feature, never the ones that shouldn't.
- A negation gate leaks a feature when a new application lands or the backend returns an unexpected status, so an application silently inherits actions it shouldn't have. A whitelist fails closed.
- One application-specific branch in a shared component is the cap. Two or more is the signal to split or otherwise decouple; flag it as tech-debt instead of refactoring inline.
- Duplicating two simple components beats one component with conditionals.
- Once branches outnumber the shared shape, the shared component is really several components stitched together with `if`s.

## Example

One branch is the exception, still fine:

```
@if (isAdminApp) { <admin-only-badge /> }
```

Two branches is the signal to split:

```
@if (isAdminApp) { ... }
@if (isClientApp) { ... }   // stop - extract per-application components instead
```

## Related

- [Note Issues](../behavior/note-issues.md)
