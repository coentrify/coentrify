# canMatch + Wildcard for Route Access

For route access guards (logged-in / logged-out gating):

- Use CanMatch in favor of CanActivate in order to allow multiple root redirects.
- Pair with `{ path: '**', redirectTo: '/' }` wildcard at the bottom of the route table.
- Guards stay route-agnostic in `core` - no `Router`, no path strings, no `UrlTree`.
- Route table in `apps` owns all redirect targets.
- Structure `appRoutes` as parallel `canMatch`-gated subtrees (logged-in / logged-out), ending with the wildcard.

## Why

A `CanActivateFn` returning `false` cancels the in-flight navigation in place: no redirect, no retry, the URL just stops. Returning a `UrlTree` works but forces the guard to know the redirect target, which leaks app routing concerns into core. With `canMatch`, a `false` skips the route definition during matching and Angular continues to the next match; the `**` wildcard catches anything that fell through and bounces back to root, where matching re-runs and lands on the correct subtree.
