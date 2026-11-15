# Application Template

A workspace contains one or more applications. Each application has its own docs under `docs/<app>/`. Anything cross-app belongs in workspace docs at `docs/`.

## overview.md

Entry point for the application - a PM or QA should grasp the application's size and what it does at a glance. Basis for feature-specific docs that go deeper. Functional only, no implementation detail.

- Title: `# <Name>` (optionally with alias in parentheses).
- Subtitle: one sentence stating the application's purpose.
- Sections: Users, Features, Views, Functional Debt, Notes.

### Sections

- `Users` - functional user roles (e.g. "Administrator"). A flat list, then a `###` subheader with a short description per role.
- `Features` - brief noun phrases in Title Case (e.g. "User Overview", "Create User"). A flat list, then a `###` subheader with a short description per feature (same shape as `Users`).
- `Views` - user-facing pages and dialogs (e.g. "User List (/users)", "Create User (dialog)").
- `Functional Debt` - product-level feature gaps (e.g. "Sort Users", "User Detail").
- `Notes` - caveats and product quirks (e.g. "Role is set on Create; it cannot be changed on Edit.").

### Status markers

- Mark a not-yet-built feature or view with a `(Not Yet Implemented)` suffix rather than explaining the gap.
- The mark stands only on the feature itself, where it is described; a page that merely refers to it carries no mark, since marks spread over references rot once the feature lands.
- Each `Functional Debt` item links to the roadmap item that resolves it.

### Features Ordering

- Overview/landing view first.
- Group by entity (e.g. all User features together).
- Core features first, secondary later.

### Features Naming

Lookup/info features use a noun: `<Entity> <Noun>` (e.g. "User Overview").
Action features use a verb: `<Verb> <Entity>` (e.g. "Create User").

Standard nouns:

- `Overview` - landing view.
- `Table` - tabular listing.
- `Pagination` - paginated listing.
- `Summary` - condensed entity info (e.g. inline row).
- `Detail` - full entity info (page or drawer).

Standard verbs:

- `Filter` - narrow a set by criteria.
- `Sort` - order a set by columns or values.
- `Search` - targeted lookup by query.
- `Create` - new entity.
- `Edit` - mutate existing entity.
- `Delete` - remove entity.

Pluralization:

- Nouns: singular (entity type, not instance) - "User Overview", "User Detail".
- Verbs: plural for set-level operations ("Filter Users", "Sort Users"); singular for single-entity actions ("Create User", "Edit User", "Delete User", "Search User").

### Views Naming

Dialog labels follow Features Naming - most are user actions and use the verb pattern (e.g. "Create User (dialog)"). Confirmation dialogs prefix with "Confirm" (e.g. "Confirm Delete User (dialog)").

Common kinds: view, dialog, drawer, card.

Split logically distinct views even if they share code (e.g. Create and Edit User dialogs).

## architecture.md

- Technical companion to the app's overview.md - the wiring specific to this app, linking out to the workspace docs for shared concerns.
- Holds per-app technical detail while apps diverge.

## Work

- An application's work is tracked in the workspace's `docs/development/`; an epic can group the work of one application.

## Related

- [Documentation Philosophy](documentation-philosophy.md)
- [Docs Folder Structure](docs-folder-structure.md)
- [Workspace Template](workspace-template.md)
- [Converge Only Once Proven](../architecture/converge-only-once-proven.md)
- [Work Tracking](../tickets-workflow/work-tracking.md)
