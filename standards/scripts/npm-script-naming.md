# npm Script Naming

Two patterns, depending on who runs the script.

## Why

A script's name says what it runs and for which context.

## Tasks (Run by Humans or Shared)

Format: `<verb>:<app>:<thing>`. App always comes second, never `<verb>:<thing>:<app>`. Omit `<app>` in single-app projects; omit `<thing>` when not needed.

### Verbs

- `start:` - long-running processes (dev server, report viewer).
- `test:`, `lint:`, `build:`, `e2e:` - one-shot runs.

### Examples

- `start:admin` - run the admin dev server.
- `e2e:admin:report` - run the full e2e suite with HTML report and videos.

## Contexts (Run by Automation)

Format: `<context>:<thing>`. Each automation context gets its own dedicated scripts, distinct from the human-run tasks above. The `hooks:` and `ci:` prefixes are examples of the general pattern: one prefix per context. Each context has its own env, flags and timing, and one generic `lint` script shared by local dev, CI and hooks couples them, so none can change without affecting the others.

- `hooks:pre-commit`, `hooks:pre-push` - called by git hooks.
- `ci:lint`, `ci:test` - called by CI workflow steps.

## Wrappers

For tools that ship as installable binaries (Playwright, MSW, etc.), add a thin wrapper script in `package.json`: `"playwright:install": "playwright install --with-deps chromium"`. Call it via `npm run playwright:install` rather than invoking the binary directly.

Don't expose internal env vars or build flags (`DEMO=1`, `CI=true`) in script names; keep them inside the script.
