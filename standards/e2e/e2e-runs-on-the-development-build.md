# E2E Runs On The Development Build

The e2e suites serve the app in the framework's development mode, so its development-only errors (Angular's NG0100 and the like) surface, stacks stay readable, and a shared fixture fails a case on such an error.

## Why

The suites exist to catch development errors, and only the development build shows them.

## How To Apply

- Never point the e2e web server at a production build. A slow dev server gets a prebuilt development build served statically instead.
- A trade-off that drops a class of errors from the checks is the director's call, asked before it lands.
- A production build steadies the suites on a busy machine, and drops the development errors.

## Related

- [Start Playwright On A Clean Port](../tooling/start-playwright-on-a-clean-port.md)
- [Honest Assessments](../behavior/general-working-rules.md#honest-assessments)
