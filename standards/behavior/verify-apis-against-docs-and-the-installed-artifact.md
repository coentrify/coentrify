# Verify APIs Against Docs And The Installed Artifact

When a dependency is pinned and the docs disagree with it, the installed artifact decides what the code can use. The other path is to update the dependency.

## Why

Docs, types and training data each drift on their own. Live docs describe the newest release, so a name that is right in general can be wrong for the version the project sits on. The shipped types lag, and some behavior is never typed at all. Training data blurs several versions; only the installed code is what actually runs.

## How to Apply

- When an update is on the table, the docs show what it would add.
- For API endpoints, verify existence, path, method, and request/response shape against the OpenAPI/Redoc spec itself before documenting them - don't infer from client code or assume an endpoint is missing.
- Do the same for generated assets: derive any layout the framework unwraps or parses from its own documented rule, then render the result and look at it, rather than positioning by eye.

## Related

- [Always Verify Before Reporting Done](always-verify-before-reporting-done.md)
