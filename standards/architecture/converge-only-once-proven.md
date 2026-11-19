# Converge Only Once Proven

In a multi-app workspace, apps can start divergent - different designs, different wiring - and converge into a shared style over time. Intentional divergence is not debt to flatten on sight.

## Why

A shared design or wiring fits every app that uses it.

## How to Apply

- Collapsing apps early couples every app to one app's choices and breeds app-flag branching. Premature uniformity costs as much as premature abstraction.
- Fold a pattern up to the shared layer only once it has repeated, stabilized and the apps have shown they agree on it. Convergence is earned, never scheduled.
- A UI primitive goes in the ui layer from its first use, also when one place uses it ([UI Components First](../ui/ui-components-first.md)). Convergence is about the designs and the wiring of apps.
- Keep per-app technical specifics in per-app docs (`docs/<app>/architecture.md`). The workspace architecture doc holds only shared concerns and points to the per-app docs.
- Whether a given app is currently diverging or converging is a project fact. Record it in the project's docs.

## Related

- [Per-Application Split Over Shared Branching](per-application-split-over-shared-branching.md)
- [Defer Tooling Until The Cost Shows Up](../tooling/defer-tooling-until-the-cost-shows-up.md)
- [Separation Before Layer Standards](separation-before-layer-standards.md)
- [Application Template](../docs/application-template.md)
