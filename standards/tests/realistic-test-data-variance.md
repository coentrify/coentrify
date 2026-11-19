# Realistic Test Data Variance

Test datasets should mirror production variance across every dimension a feature filters, sorts, groups, or branches on. Uniform seeds hide bugs.

## Why

A bug that only shows in varied data is caught before production.

## How To Apply

- Vary every dimension a feature acts on: role, status, organization, owner, dates, counts.
- Factories spread these dimensions across the dataset by design, the same on every run. Tests pin specific values only when the assertion requires them.
- For any feature that filters or branches on a property, the dataset must contain at least one matching and one non-matching record - otherwise the test can't distinguish "works" from "is a no-op".

## Examples

- A role filter that does nothing still looks fine when every seeded user is an admin.
- A status sort gives the right order when every record has the same status.
- A "show mine" toggle passes when every record has the same owner.

## Related

- [Seed Surfaces Every State On Page 1](seed-surfaces-every-state-on-page-1.md)
- [Bracket State Changes With Contrast Assertions](bracket-state-changes-with-contrast-assertions.md)
