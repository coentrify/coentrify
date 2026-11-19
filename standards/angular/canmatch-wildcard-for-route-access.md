# canMatch + Wildcard for Route Access

Route access guards, for logged-in and logged-out gating, use `canMatch` with a wildcard at the bottom of the route table.

## Why

A user who may not enter a route still lands on the right page.

## How to Apply

- Use CanMatch in favor of CanActivate in order to allow multiple root redirects.
- Pair with `{ path: '**', redirectTo: '/' }` wildcard at the bottom of the route table.
- Guards stay route-agnostic in `core` - no `Router`, no path strings, no `UrlTree`.
- Route table in `apps` owns all redirect targets.
- Structure `appRoutes` as parallel `canMatch`-gated subtrees (logged-in / logged-out), ending with the wildcard.
- A `CanActivateFn` returning `false` cancels the in-flight navigation in place: no redirect, no retry, the URL just stops.
- Returning a `UrlTree` works but forces the guard to know the redirect target, which leaks app routing concerns into core.
- With `canMatch`, a `false` skips the route definition during matching and Angular continues to the next match. The `**` wildcard catches anything that fell through and bounces back to root, where matching re-runs and lands on the correct subtree.

## Related

- [App-Shield](../architecture/app-shield.md)
