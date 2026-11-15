# Seed Surfaces Every State on Page 1

When a feature paginates and a test asserts contrast between states (A and B visible at the same time), the first page of the test seed includes every state the test mentions. Otherwise the test has to navigate, filter or sort first just to put the contrast on screen, which makes it a test of pagination instead of the property under test.

## Why

A correct test can fail with "element not found" because the state it asserts lives past the seed's first page: the data exists, but pagination hides it at the entry point. This is easy to misdiagnose as a broken assertion when the fault is the seed ordering.

## How to apply

- Before writing an e2e test that combines pagination and contrast, scan the seed and confirm every state the test names is in the first-page slice.
- If reordering the seed isn't an option (shared fixture data ordered for another reason), open with a filter or sort that surfaces the contrast first, then assert.

## Related

- [Realistic Test Data Variance](realistic-test-data-variance.md)
