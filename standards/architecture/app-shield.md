# App-Shield

The five-layer architecture for front-end web apps. Every file in the workspace belongs to exactly one layer. Dependencies flow one direction only. Keeping each piece in its proper layer is what shields the app against creep.

## Why

Every layer stands on its own, with its own responsibility and its own qualities, so the whole works in harmony.

## The Five Layers

### ui

Pure, dumb, standalone UI components and their styles. ALL visual presentation - both markup and styling - lives here. No app-specific assets, copy (including i18n/translation strings and their defaults), env values, app state, or domain logic. Composition via slots and content projection. Inputs/outputs for direct access only (see [Prefer Content Projection Over Props (Angular)](../angular/prefer-content-projection-over-props-angular.md)). Every ui component is covered in the styleguide ([UI Styleguide](../ui/ui-styleguide.md)), exercised across its states in isolation - which is the reason they must stay dumb. Favor many small components over fewer bespoke ones.

### app

Feature and domain libs that WIRE ui components together, hold pages and routes, and orchestrate user-facing behavior (state, app logic). The app layer owns no presentation, with no exceptions and no "acceptable composition residue": its templates only arrange ui components, and it holds no SCSS, no hand-authored presentational markup, no bare `:host {}` rule (even `display:`), no inline `style="..."` attribute and no `[style.x]`/`[ngStyle]` binding. Any of these means a missing or under-built ui component: build it, cover it in the styleguide, then compose it. This is MVC kept strict: app components are wiring, ui components are the view.

### data

Data-access layer (API services, mappers, DTOs). Talks to backends. No UI imports.

### core

Shared cross-cutting infrastructure that the app layer consumes: services, guards, interceptors, stores. No business logic. Stores and services are content-agnostic / generic. Eagerly loaded.

### config

Environment shape, types, and configuration tokens. Pure types/interfaces and DI tokens.

## Dependency Direction

- app depends on ui, core, data, config.
- data depends on core.
- core depends on config.
- ui is standalone - depends only on design-system packages, nothing else in the workspace.
- Never reach upwards (e.g. core importing from app).

## How To Apply

Before creating a new file, ask "which layer does this belong to?":

- A `Type`/`Interface`/`InjectionToken` describing config or env shape -> config.
- A guard/interceptor/cross-cutting service -> core.
- A backend client / mapper / DTO -> data.
- A page/component tied to a feature -> that feature's app lib.
- A reusable, presentation-only component -> ui.
- Stylesheet rules or hand-authored presentational markup -> a ui component, covered in the styleguide.

Misplacing a file (e.g. putting a guard in a lazy-loaded route lib) creates circular deps, breaks lazy-loading boundaries, and forces static imports across edges that should stay decoupled. In Nx workspaces this is enforced mechanically. Without Nx, the same discipline applies by convention.

If a new shared concept appears that doesn't fit, surface it before scattering it. Do not bypass the boundary by static-importing across lazy-loaded edges.

## Related

- [Code Principles](../code/code-principles.md)
