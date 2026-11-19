# Seed Surfaces Every State On Page 1

When a feature paginates and a test asserts states side by side (A and B visible at the same time), the first page of the test seed includes every state the test mentions. Otherwise the test has to navigate, filter or sort first just to put those states on screen, which makes it a test of pagination instead of the property under test.

## Why

A test fails only for the property it tests.

## How To Apply

- Before writing an e2e test that combines pagination and states side by side, scan the seed and confirm every state the test names is in the first-page slice.
- If reordering the seed isn't an option (shared fixture data ordered for another reason), open with a filter or sort that surfaces those states first, then assert.
- An "element not found" for a state past the first page looks like a broken assertion, while the fault is the seed's order.

## Related

- [Realistic Test Data Variance](realistic-test-data-variance.md)
