# Per-Application Split Over Shared Branching

Prefer per-application components over shared components that branch on application flags. Duplication is acceptable. Visibility gates are opt-in whitelists.

## Why

A shared component stays simple, free of every application's branches.

## How To Apply

- Visibility gates list the applications that should see the feature, never the ones that shouldn't.
- One application-specific branch in a shared component is the cap. Never add the second branch: split or otherwise decouple the component, or note the split as tech debt when it is out of the change's scope ([Note Issues](../behavior/note-issues.md)).
- A negation gate leaks a feature when a new application lands or the backend returns an unexpected status, so an application silently inherits actions it shouldn't have. A whitelist fails closed.

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
