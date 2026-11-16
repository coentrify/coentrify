# Converge Only Once Proven

In a multi-app workspace, apps can legitimately start divergent - different designs, different wiring - and converge into a shared style over time. Intentional divergence is not debt to flatten on sight.

## Why

Collapsing apps early couples every app to one app's choices and breeds app-flag branching; premature uniformity costs as much as premature abstraction. Waiting keeps the shared layer honest: it only holds what has proven shared.

## How to Apply

- Fold a pattern up to the shared layer only once it has repeated, stabilized and the apps demonstrably agree on it; convergence is earned, never scheduled.
- Keep per-app technical specifics in per-app docs (`docs/<app>/architecture.md`); the workspace architecture doc holds only genuinely shared concerns and points to the per-app docs.
- Whether a given app is currently diverging or converging is a project fact; record it in the project's docs.

## Related

- [Per-Application Split Over Shared Branching](per-application-split-over-shared-branching.md)
- [Defer Tooling Until The Cost Shows Up](../tooling/defer-tooling-until-the-cost-shows-up.md)
- [Separation Before Layer Standards](separation-before-layer-standards.md)
- [Application Template](../docs/application-template.md)
