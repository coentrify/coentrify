# Bugs Template

Workspace-level `docs/workspace/bugs.md` and per-app `docs/<app>/bugs.md` use a fixed shape.

## Purpose

Catalogues user-facing bugs in the current build. A reader scans bugs.md to know exactly what's broken for real users right now, sorted by impact.

## Bug vs Tech-Debt

- User-facing bug -> bugs.md.
- Test-tooling limitation, dev-mock gap, internal-only issue -> [tech-debt.md].
- If real users never hit it, it's not a bug.

## Sections

- Title: `# Bugs`.
- Overview list: flat dash list, one bullet per bug, formatted as ``- <description> (`<priority>`)``. Always present, even when there's only one bug. Sorted by priority, highest first.
- Per bug: `## <title>` subheading, then the bug shape below.

## Bug Shape

- Subheading: `## <user-perspective title>`. The title is the user-experienced symptom, not the suspected cause.
- Priority line right after the title: `Priority: <level>`. Levels: `high`, `medium`, `low` (extend as needed).
- Description paragraph: what the user experiences when the bug fires. Don't speculate on causes - speculation belongs in PR/commit discussion or investigation notes, not the bug doc.
- `### Reproduce` subheading: steps that trigger the bug, ending with `Expected:` and `Actual:` lines so the deviation is explicit. Reuse the matching spec use case's structure - the bug entry describes the deviation from the spec, not an alternate spec.
- `### References` subheading: metadata bullets for navigation (Feature, Use case, E2E status).

## Why

Bugs need to be skimmable and actionable. The overview gives a one-glance summary; the `##` sections give a fix-now reader everything they need (what, how to see it, where it lives). Splitting bugs out from tech-debt keeps the urgency signal honest: every bugs.md entry is user-impact.

## Related

- [Workspace Template](../docs/workspace-template.md)
- [Documentation Philosophy](../docs/documentation-philosophy.md)
- [Feature Spec Template](../docs/feature-spec-template.md)
- [No Faux Headers In Lists](../docs/no-faux-headers-in-lists.md)
