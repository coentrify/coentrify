# Don't Filter Data Without a Spec

Never drop or filter out data - client-side or server-side - unless that exclusion is explicitly specified: documented as intended behavior and covered by a test.

## Why

Filtering data away sweeps issues under the rug: an unexpected status, a malformed record or a backend bug disappears instead of surfacing. An undocumented filter is a behavior nobody agreed to and nobody can see.

## How to Apply

- Before adding any filter - a `.filter()`, a narrowing request param, a guard that skips records - confirm the exclusion is specified. If it isn't, surface the data and get it specced first.
- When the exclusion is genuinely wanted, document it (feature doc or spec) and add a test that asserts it.
- Server-side filters count: a request param that drops rows needs a documented reason and a test as much as a client-side filter does.
- Default to surfacing unexpected data as a distinct state or error over quietly removing it.

## Related

- [Never Obscure Information the User Needs](../ui/never-obscure-information-the-user-needs.md)
- [Communicate State](../ui/communicate-state.md)
- [Verify APIs Against Docs And The Installed Artifact](verify-apis-against-docs-and-the-installed-artifact.md)
- [Note Issues](note-issues.md)
