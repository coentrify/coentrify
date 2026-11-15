# Node Versions

Only use even-numbered Node.js major versions (22, 24, 26, etc.). Never upgrade to odd-numbered versions (21, 23, 25) - they are not stable releases.

## Why

Only even Node major versions enter LTS (Long-Term Support). Odd versions are "Current" releases that get deprecated when the next even version hits LTS. Production should be LTS.

## How to apply

When picking a Node version, stick to even majors across every place Node is pinned:

- `.nvmrc` / `.node-version`.
- `engines.node` in `package.json`.
- `@types/node` and other Node-related type packages.
- CI workflow `setup-node` versions.
- Docker base images (`node:22-alpine`, etc.).
