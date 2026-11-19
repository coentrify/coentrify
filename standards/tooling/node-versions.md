# Node Versions

Only use even-numbered Node.js major versions (22, 24, 26, etc.). Never upgrade to odd-numbered versions (21, 23, 25) - they are not stable releases.

## Why

Production runs on a stable release with long-term support.

## How to Apply

Only even majors enter LTS. An odd major is a Current release, deprecated once the next even major reaches LTS.

When picking a Node version, stick to even majors across every place Node is pinned:

- `.nvmrc` / `.node-version`.
- `engines.node` in `package.json`.
- `@types/node` and other Node-related type packages.
- CI workflow `setup-node` versions.
- Docker base images (`node:22-alpine`, etc.).

## Related

- [Pre-empt Recurring Code-Review Nits](../code/pre-empt-recurring-code-review-nits.md)
- [Things Of One Kind Are Consistent](../behavior/things-of-one-kind-are-consistent.md)
