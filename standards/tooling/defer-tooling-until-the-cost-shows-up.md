# Defer Tooling Until The Cost Shows Up

Don't add heavyweight tooling (reporting dashboards, contract testing, visual regression, accessibility automation, monitoring SaaS) preemptively. Wait until the cost of not having it becomes concrete, then add it.

## Why

Tooling carries weight: setup, learning curve, integration surface, CI minutes, maintenance, and one more thing to keep working. Speculative tooling pays that cost now for benefit that may never materialize. Reactive tooling waits for the actual pain point and pays only when there's confirmed value.

## How to Apply

- Don't pre-commit to heavyweight tooling as "phase 2" or "we'll add it later" - that signals it's coming, which it isn't until the cost is concrete.
- When evaluating a tool, name the specific cost that justifies it. "Drift is happening and the mock layer no longer reflects production" beats "we should probably add contract testing".
- Maturity bumps the threshold. As a workspace climbs the [Workspace Levels](../docs/workspace-levels.md), lighter alternatives start to visibly fail; that is the signal heavy tools have earned their keep, never a calendar milestone.
