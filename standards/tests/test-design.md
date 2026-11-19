# Test Design

Tests are organized along the [App-Shield](../architecture/app-shield.md) layers. Each layer has its own test profile and tests only what that layer is responsible for. Lower-layer behavior is assumed to work because it has its own tests there.

## Why

A failing test points at the layer that broke.

## Test Profile Per Layer

- ui - presentational components, design tokens. Unit + integration + styleguide.
- app - app shells, routing, feature wiring. Unit + e2e.
- data - API clients, mappers, caches. Scenario tests, one per request and response variant against the client.
- core - pure logic, models, utilities. Unit only.
- config - per-application configuration. Scenario tests with maximum config variance to catch drift.

## Honor Each Test Type's Implied Principles

Unit, integration, e2e, scenario and styleguide tests each carry implied principles for what they cover and what they leave alone. Stick to those instead of bending a type to plug a coverage gap. An awkward fit signals that the design needs adjusting.

## Tests Must Be Independent

No test depends on state, fixtures or side effects left behind by another. Each test owns its setup and cleanup, so ordering, parallelism and partial reruns all produce the same result.

## One Mock Layer Per Test Type

Each test type mocks the backend at exactly one layer, never at two for the same flow. Doubling up multiplies setup, hides which mock is answering and makes the test brittle to either layer changing.

## Execution Strategy

- A fast subset (affected or critical path) runs on every change.
- The full suite runs on a nightly schedule.
- Reports upload as build artifacts every run.
- Expensive diagnostics (traces, videos, screenshots) upload only on failure.

## How To Apply

- When adding a test, pick the profile from its layer.
- A check that needs no browser is a unit test, never an e2e case.
- When behavior spans layers, test it once at the highest layer involved (usually app via e2e).
- Set coverage thresholds only after the test design has stabilized. Start with critical-path coverage and tighten over time.

## Related

- [App-Shield](../architecture/app-shield.md)
- [Test The System Behind A Mock](test-the-system-behind-a-mock.md)
- [Lightweight Test Reporting Only](../tooling/lightweight-test-reporting-only.md)
