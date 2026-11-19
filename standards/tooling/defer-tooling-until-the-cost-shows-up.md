# Defer Tooling Until The Cost Shows Up

Don't add heavyweight tooling (reporting dashboards, contract testing, visual regression, accessibility automation, monitoring SaaS) preemptively. Wait until the cost of not having it becomes concrete, then add it.

## Why

The project carries only the weight it needs.

## How to Apply

- Tooling carries weight: setup, a learning curve, an integration surface, CI minutes and maintenance.
- Don't pre-commit to heavyweight tooling as "phase 2" or "we'll add it later" - that signals it's coming, which it isn't until the cost is concrete.
- When evaluating a tool, name the specific cost that justifies it. "Drift is happening and the mock layer no longer reflects production" beats "we should probably add contract testing".
- Maturity bumps the threshold. As a workspace climbs the [Workspace Levels](../docs/workspace-levels.md), lighter alternatives start to visibly fail. That is the signal heavy tools have earned their keep, never a calendar milestone.

## Related

- [Workspace Levels](../docs/workspace-levels.md)
- [Lightweight Test Reporting Only](lightweight-test-reporting-only.md)
