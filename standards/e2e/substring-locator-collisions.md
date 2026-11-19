# Substring Locator Collisions

New UI text is checked against the substring locators in the e2e specs before it ships. `getByText('X')` matches by substring, so any new UI string that contains `X` makes the locator match two nodes, and Playwright's strict mode then fails.

## Why

A locator finds one element, whatever other text is on the page.

## How To Apply

- Before introducing new UI text in app code, grep the e2e specs for `getByText\('<short>'` and similar. If the new text contains an existing literal, change the locator first.
- The same holds in reverse when a subtitle overlay or narration adds text containing a short literal used as a locator elsewhere.
- Substring matchers age badly because they depend implicitly on every other string in the rendered DOM. A collision shows up the moment the new text ships, long after the test was written.

## Examples

- A new loading label that contains a panel heading's word breaks every spec that locates the heading by that word, demo reels included.
- Once the `Save` button is gone, `getByText('Save')` keeps finding `Save All`. A helper that waits for `Save` to disappear times out, and a check that `Save` shows passes silently on the wrong node.

## Related

- [Playwright Video Recording](../tooling/playwright-video-recording.md)
- [Implementation-Agnostic Locators](../tests/implementation-agnostic-locators.md)
