# Substring Locator Collisions

`getByText('X')` matches by substring. Any new UI string that contains `X` makes the locator match two nodes, and Playwright's strict mode then fails. The collision shows up the moment the new text ships, long after the test was written.

## Why

A new loading label that contains a panel heading's word breaks every spec that locates the heading by that word, demo reels included. Substring matchers age badly because they depend implicitly on every other string in the rendered DOM.

## How to Apply

- Before introducing new UI text in app code, grep the e2e specs for `getByText\('<short>'` and similar. If the new text contains an existing literal, change the locator first.
- `getByRole('button', { name: 'X' })` matches the name by substring too, so names within one family must not contain each other: a helper that waits for the `Save` button to disappear keeps finding `Save All`. Pick names that stand alone or locate with `exact: true`.
- Locate headings and buttons by role (`getByRole('heading', { name })`, `getByRole('button', { name })`).
- Use `{ exact: true }` for short identifiers (codes, ribbons, status words), or scope the locator to the page region it lives in.
- The same holds in reverse when a subtitle overlay or narration adds text containing a short literal used as a locator elsewhere.

## Related

- [Playwright Video Recording](../tooling/playwright-video-recording.md)
- [Implementation-Agnostic Locators](../tests/implementation-agnostic-locators.md)
