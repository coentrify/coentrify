# Test Design

Tests are organized along the [App-Shield](../architecture/app-shield.md) layers. Each layer has its own test profile and tests only what that layer is responsible for; lower-layer behavior is assumed to work because it has its own tests there.

## Test Profile per Layer

- ui - presentational components, design tokens. Unit + integration + styleguide.
- app - app shells, routing, feature wiring. Unit + e2e.
- data - API clients, mappers, caches. Scenario tests, one per Action variant against the client.
- core - pure logic, models, utilities. Unit only.
- config - per-application configuration. Scenario tests with maximum config variance to catch drift.

## Honor Each Test Type's Implied Principles

Unit, integration, e2e, scenario and styleguide tests each carry implied principles for what they cover and what they leave alone. Stick to those instead of bending a type to plug a coverage gap; an awkward fit signals that the design needs adjusting.

## Tests Must Be Independent

No test depends on state, fixtures or side effects left behind by another. Each test owns its setup and cleanup, so ordering, parallelism and partial reruns all produce the same result.

## One Mock Layer per Test Type

Each test type mocks the backend at exactly one layer, never at two for the same flow. Doubling up multiplies setup, hides which mock is answering and makes the test brittle to either layer changing.

## Execution Strategy

- A fast subset (affected or critical path) runs on every change; the full suite runs on a nightly schedule.
- Reports upload as build artifacts every run; expensive diagnostics (traces, videos, screenshots) only on failure.

## Why

Layered scope keeps each test focused and each setup minimal. When test boundaries match responsibility boundaries, they align with adjacent disciplines (backend, design, product) and resist breaking when an adjacent layer changes.

## How to Apply

- When adding a test, pick the profile from its layer.
- When behavior spans layers, test it once at the highest layer involved (usually app via e2e).
- Set coverage thresholds only after the test design has stabilized; start with critical-path coverage and tighten over time.
