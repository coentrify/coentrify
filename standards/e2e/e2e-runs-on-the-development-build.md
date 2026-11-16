# E2E Runs On The Development Build

The e2e suites serve the app in the framework's development mode, so its development-only errors (Angular's NG0100 and the like) surface, stacks stay readable, and a shared fixture fails a case on such an error.

## Why

A production build steadies the suites on a busy machine but drops the development errors the suites exist to catch.

## How to Apply

- Never point the e2e web server at a production build; a slow dev server gets a prebuilt development build served statically instead.
- A trade-off that drops a class of errors from the checks is the director's call, asked before it lands.

## Related

- [Kill a Lingering Playwright Server Before Captures](../tooling/kill-a-lingering-playwright-server-before-captures.md)
- [Honest Assessments](../behavior/honest-assessments.md)
