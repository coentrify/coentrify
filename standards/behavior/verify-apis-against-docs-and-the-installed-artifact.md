# Verify APIs Against Docs And The Installed Artifact

When uncertain whether a package feature exists or how it behaves, check the documentation and the installed artifact both, before answering or writing code against it. Never answer from training data or memory alone, and especially never say "X doesn't exist" without checking - for package configs, CLI flags, framework hooks, and API endpoints.

## Why

Docs, types and training data each drift on their own. Live docs describe the newest release, so a name that is right in general can be wrong for the version the project sits on. The shipped types lag, and some behavior is never typed at all. Training data blurs several versions; only the installed code is what actually runs.

## How to Apply

- Read the docs for what a feature is meant to do and whether a newer version has it; cite the URL.
- Read the installed types and sources for what this version actually offers; when the types look incomplete, read the shipped code behind them.
- When a dependency is pinned and the two disagree, the installed artifact decides; when an upgrade is on the table, the docs show what it would add.
- Say which source an answer came from.
- Treat a missing-symbol error on a plausible name as a version signal, not a typo, and check the artifact rather than guessing a neighboring name.
- For API endpoints, verify existence, path, method, and request/response shape against the OpenAPI/Redoc spec itself before documenting them - don't infer from client code or assume an endpoint is missing.
- Do the same for generated assets: derive any layout the framework unwraps or parses from its own documented rule, then render the result and look at it, rather than positioning by eye.

## Related

- [Always Verify Before Reporting Done](always-verify-before-reporting-done.md)
