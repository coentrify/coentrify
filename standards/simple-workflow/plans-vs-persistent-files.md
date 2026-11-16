# Plans vs Persistent Files

Two kinds of file, distinguished by lifecycle.

## Plans

Hold what's being done right now: status, ordered tasks, blockers, scope-of-effort. Items get deleted as they're done; the file shrinks toward empty. Examples: `PLAN.md`, workspace `plan.md`, `inbox.md`.

## Persistent

Hold knowledge, conventions, functionality, and reference. They evolve but never get "completed". Single responsibility per file: one purpose, one shape. Examples: standards, skills, architecture docs, library feedback docs.

## Why

Mixing rots both. Plans accumulate convention sections that drift out of sync with the persistent source of truth. Persistent files accumulate status text that goes stale and clutters every read.

## How to Apply

When writing, ask: is this *how* something works (or should), or *what* we're doing right now?

- *How* -> persistent (standard, skill, doc).
- *What* -> plan.

When reviewing a plan, extract any "always X" / "never Y" text to a persistent home and replace with a one-line pointer; keep status tables and ordered tasks in the plan. When reviewing a persistent file, strip any time-bound status into the relevant plan.
