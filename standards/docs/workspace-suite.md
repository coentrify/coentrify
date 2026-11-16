# Workspace Suite

What makes a workspace complete. Flat list of deliverables a coentrified workspace eventually grows into. Missing items become epics on `roadmap.md` per [Workspace Template](workspace-template.md).

- Documentation
- READMEs
- Unit tests
- E2E tests
- UI styleguide
- Component library
- Design system
- Reports
- Docs wiki
- Demo videos

## Levels

Maturity scale for a workspace, in the spirit of the Kardashev scale. Each level builds on the last; coentrify pushes upward.

- Level 0 - Unknown. Nobody can say what the product does, when or why.
- Level 1 - Primary framework on the latest release (e.g. latest Angular).
- Level 2 - Documented. All workspace and app docs in place.
- Level 3 - Fully tested. Unit and e2e coverage in place.
- Level 4 - Fully up to date. All dependencies current, not just the primary framework.
- Level 5 - Tool complete. Every suite deliverable exists and its deployment is green.

## Tooling and the Levels

Heavyweight tooling (visual regression, contract testing, reporting dashboards, accessibility automation) follows level maturity rather than leading it. See [Defer Tooling Until The Cost Shows Up](../tooling/defer-tooling-until-the-cost-shows-up.md): a workspace at Level 1-2 doesn't need them; a workspace approaching Level 5 has likely earned them.
