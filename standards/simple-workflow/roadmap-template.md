# Roadmap Template

`docs/development/roadmap.md` uses a fixed shape.

## Purpose

Answers "what's next?" at a glance. Active surfaces the current focus. Priorities show what comes after. Blocked vs Waiting For Response splits "we'll unblock ourselves" from "we need someone else". Nice To Have parks future ideas without polluting commitment.

## Sections

- Title: `# Roadmap`.
- `## Active` - the current focus. Usually one item.
- `## Priorities` - upcoming work, top-down execution order. Top is what we do next once Active completes.
- `## Blocked` - paused on internal prerequisites (another roadmap item, an e2e harness, a tooling gap). We can unblock ourselves.
- `## Waiting For Response` - paused on external dependencies (third parties, partners, vendors). We can't unblock ourselves.
- `## Nice To Have` - future ideas, no current commitment.

## Item Shape

- Every item name makes three things clear at a glance: the type of work, the topic, and the direction of the issue or outcome. That is the focus level a top-level list needs. Each type of work reads slightly differently:
  - A feature epic is a goal from the user's perspective: `Create an account`, `Place your first order`. It says it is a feature, names the topic and hints at the outcome (you can create an account). A feature is the state left after its epics have run their course, so an item is an epic, never a bare feature name.
  - An addition leads with its verb: `Add Contact Search`.
  - A fix leads with `Fix`: `Fix Auth Session Redirect` says it is a bug, names the topic and hints at what goes wrong.
  - An investigation leads with `Investigate`: `Investigate Multi-Role Editing`, for work that starts with understanding the problem before a solution is picked.
- Flat dash list within each section.
- One-liner items. No parenthetical bloat, no trailing periods.
- Blocked / Waiting items: include the blocker inline, e.g. ``X - blocked by Y`` or ``X - waiting for Z``.
- Reference the feature doc when an item maps to one, e.g. ``[Mobile Responsive](features/responsive.md) - blocked on ...``.

## What Doesn't Belong on the Roadmap

- Specific bugs - they live in [Bugs Template](bugs-template.md).
- Tech-debt entries - they live in `tech-debt.md`.
- "Resolve bugs" or "Fix tech debt" as roadmap items - those are continuous activities, not roadmap goals.
- Generic "Write unit tests" or "Add tests" - if testing is a priority, name it as an initiative (e.g. `Automated Testing`). Specific test backlogs live in the affected feature's spec.

## The Lists Beside It

The inbox, the todo and the plan stand beside the roadmap, each with its own job ([The Simple Workflow](the-simple-workflow.md#the-lists)). Before asking the director whether an unbuilt item is still wanted, check which of them holds it.

## Related

- [Workspace Template](../docs/workspace-template.md)
- [Documentation Philosophy](../docs/documentation-philosophy.md)
- [Bugs Template](bugs-template.md)
