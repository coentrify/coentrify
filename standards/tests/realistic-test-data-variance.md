# Realistic Test Data Variance

Test datasets should mirror production variance across every dimension a feature filters, sorts, groups, or branches on. Uniform seeds hide bugs.

## Why

A role filter that does nothing still looks fine when every seeded user is an admin. A status sort produces the right (uniform) order when every record has the same status. A "show mine" toggle passes when every record has the same owner. The bug only surfaces in production, where data actually varies.

## How to Apply

- Vary every dimension a feature acts on: role, status, organization, owner, dates, counts.
- Factories randomize these dimensions by default; tests pin specific values only when the assertion requires them.
- For any feature that filters or branches on a property, the dataset must contain at least one matching and one non-matching record - otherwise the test can't distinguish "works" from "is a no-op".
