# Per-Feature Overview Test

For every feature with e2e tests, the spec file ends with one overview test that chains the happy-path actions into a single scenario, so the recording becomes a one-take view of the feature. It strings the per-flow flows together without duplicating their assertions.

## Why

An overview video per feature isolates that feature: for onboarding a user or a director, for showing a stakeholder and for visual testing.

## How To Apply

- One overview test per feature spec, at the bottom of the file. Living in the same spec keeps it in step with the code on every run.
- Title `<Feature> - Overview`, tagged `@demo`, `@<feature-id>-overview` and the pattern tags the per-flow tests use ([E2E Test Conventions](e2e-test-conventions.md)). The overview tag carries no use-case number, since it identifies the take.
- Reuse the locators and boot helper of the per-flow tests. No new helpers, no new scenarios.
- An application-wide take (`<Application> Demo`) stays a separate, broader artifact.
- The overview narrates the happy path and skips the bracketing.
- The strict per-flow tests carry the contrast assertions.
- Per-flow tests are short and atomic, which is good for diagnosis, and their recordings come out fragmented.

## Keep It In Step With The Use Cases

When a use case is added to or removed from a feature spec, re-read the overview and decide whether it should absorb the change.

- Adding a use case: extend the overview when a viewer benefits from seeing it (a new state, branch or outcome). An edge case, error variant or no-op stays with its per-flow test.
- Removing or renaming a use case: update or drop the overview steps that referenced it.
- The overview tells one coherent story. A use case that doesn't thread into it is skipped in the take, or a sign it belongs to another feature.

## Related

- [Bracket State Changes With Contrast Assertions](../tests/bracket-state-changes-with-contrast-assertions.md)
- [Reels And Video Proof](../reporting/reels-and-video-proof.md)
