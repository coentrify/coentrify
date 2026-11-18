# Docs Describe Behavior, Not Wiring

Write docs at product/behavior altitude: describe what something does for the user - flows, routes, use cases, states - as if it were a feature. Don't restate or mirror the code.

## Why

A doc that mirrors the code goes stale with it. A doc of behavior is an implementation-agnostic spec.

## How to Apply

Default to stripping implementation detail. These belong in the code (or a dedicated reference doc), not in concern/architecture/overview docs:

- library and package names, class/service/guard/component/config-object names, file paths
- token and wiring mechanics, DI/provider details
- environment-specific URLs and credentials (centralize those in the environments doc)

When a doc reads like a copy of the code, cut to the throughline (the "red line"): keep the essence, drop the specifics. Reference docs (api, environments) are the one place concrete endpoints and URLs live.

## Related

- [Documentation Philosophy](documentation-philosophy.md)
