# Workspace Template

A workspace is a collection of applications for one client. Workspace docs live at `docs/` and describe the whole repo at a cross-app level. Anything app-specific belongs in `docs/<app>/`.

## Why

Every workspace's docs have the same structure, and keep the focus of the workspace.

## overview.md

Functional only - what the product is, who it serves, what shared concerns exist at a product level. Technical wiring lives in architecture.md.

- Title: `# <Workspace Name>`.
- Subtitle: one sentence on the workspace's purpose.
- Sections: Client (who the client is, brief scope), Applications (list of apps with one-line purpose), Shared Concerns (auth, design system, language, etc. - one-line functional summaries), External Services (third-party APIs / backends the workspace consumes).
- Optional: a tail-of-file pointer to architecture.md for readers who want the implementation detail.

## architecture.md

Technical companion to overview.md, ordered by relevance / logical flow (not low-level-first). Leads with the core mental model, then catalogs, then conventions:

- Applications - apps are thin bootstrap shells under `apps/<app>/` (providers, top-level routes, a bare `<router-outlet />`). The app itself is implemented in a lazy-loaded feature lib. Where workspace libs live (`libs/shared/`, `libs/<app>/`).
- Layers - the five-layer app-shield briefly reiterated (app/ui/data/core/config + one-way dependency direction), mapping the `@my-application/*` libs onto their layer.
- Libraries - external deps grouped by origin: Internal (your own or the organization's packages), General (third-party e.g. `angular-auth-oidc-client`, `@jsverse/transloco`), Meta (tooling e.g. nx, playwright, jest, vitepress).
- Conventions (path aliases, prefixes, mock toggles).

Cross-cutting concerns that outgrow a section graduate to their own flat file under `docs/workspace/` (authentication.md, design-system.md, component-library.md, testing.md - collected in one workspace folder, not per-concern folders). architecture.md links them and they surface in the wiki sidebar automatically. Don't re-merge them back into architecture.md. Skip a "documentation layout" map - the auto-generated wiki sidebar covers discovery.

If a workspace doc accumulates implementation detail, move it here (or into the matching concern doc) rather than letting overview.md drift technical.

## development/

- All work tracking lives in `docs/development/`.
- The roadmap's technical epics feed off the workspace suite: each missing suite item becomes an epic once it has a target.

## Related

- [Documentation Philosophy](documentation-philosophy.md)
- [Things Of One Kind Are Consistent](../behavior/things-of-one-kind-are-consistent.md)
- [Workspace Suite](workspace-suite.md)
- [Work Tracking](../tickets-workflow/work-tracking.md)
