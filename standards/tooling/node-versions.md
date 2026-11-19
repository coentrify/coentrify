# Node Versions

Use a Node.js major that is in Long-Term Support.

## Why

Production runs on a stable release with long-term support.

## How To Apply

Through Node 26 only even majors reach LTS. From Node 27 on, every major does, in the October after its April release.

When picking a Node version, pin an LTS major in every place Node is pinned:

- `.nvmrc` / `.node-version`.
- `engines.node` in `package.json`.
- `@types/node` and other Node-related type packages.
- CI workflow `setup-node` versions.
- Docker base images (`node:22-alpine`, etc.).

## Related

- [Pre-Empt Recurring Code-Review Nits](../code/pre-empt-recurring-code-review-nits.md)
- [Things Of One Kind Are Consistent](../behavior/things-of-one-kind-are-consistent.md)
