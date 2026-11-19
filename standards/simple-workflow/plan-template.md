# Plan Template

`docs/plan.md` is the workspace plan: a thin parent. The detailed, in-flight items live in the per-app plans (`docs/<app>/plan.md`). The workspace plan stays short and points down to them.

## Purpose

The short-horizon working doc: what's in flight right now, what's queued for immediately after. Distinct from the roadmap (longer-horizon goals) and the inbox (the unsorted dead drop).

## Workspace Plan (Parent)

- Title: `# Plan`.
- Active focus statement: a one-liner right under the title naming the current focus across the workspace.
- A flat dash list of pointers to the per-app plans that hold the detail - not the detailed items themselves.
- Keep it short. It should rarely need editing as app-level work churns.

## App Plan (`docs/<app>/plan.md`)

- Same shape, scoped to the app: title + active-focus one-liner, then a `## Summary` contents list.
- The flat dash list of immediate items lives here, led by the summary (see [Summary section](#summary-section)). Promote an item to a `##` subsection only when it needs explanation ([No Faux Headers In Lists](../docs/no-faux-headers-in-lists.md)). The subsection is titled the same as its summary entry.

## Summary Section

- Open the plan with a `## Summary` flat list of every item it tracks - a table-of-contents that makes the whole plan scannable before any detail. This mirrors the overview list that bugs/tech-debt/roadmap already lead with. The norm across docs is a TOC/summary at the top.
- Label the one item in flight `(active)`, at most one active at a time. Done items are stripped, never labeled or kept as a trophy.

## Describe a Shift

- When the focus pivots away from previously-planned work (pausing an in-flight cleanup for a client-priority feature, say), name the shift in the active-focus one-liner: what it moved from, its new state (paused), and why.
- The next session should see why the active item isn't what the plan used to be about, without digging through git history.

## What Belongs

- Items in flight right now or about to be picked up next (in the app plan).
- The one-line current direction (in both, scoped accordingly).

## What Doesn't Belong

- Long-horizon goals - those live in [Roadmap Template](roadmap-template.md).
- Small unsorted follow-ups - the workspace inbox (the free-form dead drop).
- Status snapshots ("E2E harness: complete..."). They go stale fast and belong in commit history or release notes.
- Speculation about future work, restart notes, decision logs.
- Detailed immediate items in the workspace plan - those belong in the app plan.

## Strip Aggressively

- As an item ships, remove it from the plan. Git history preserves what was there.
- Don't leave done items as a trophy wall.

## Related

- [Workspace Template](../docs/workspace-template.md)
- [Application Template](../docs/application-template.md)
- [Roadmap Template](roadmap-template.md)
- [Documentation Philosophy](../docs/documentation-philosophy.md)
