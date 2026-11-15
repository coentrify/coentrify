# Feature Template

Per-feature functional docs follow the hierarchical page shape: summary, contents, a heading per item, aesthetics.

## Purpose

The functional source of truth for a single feature, the product as decided: a new joiner or a playtester should grasp what the feature does. Basis for the spec, the e2e tests and the feature's tickets. Pairs with a [spec](feature-spec-template.md).

## Sections

- Title: `# <Feature Name>` in Title Case.
- The summary is no link hub; cross-references go inline where the related concept is mentioned.
- Item headings are short Title Case noun phrases ("Inventory", "Map"). Under each: one short sentence per thing it does ("Shows the items the player carries"), each a spec that leads to a test.
- `## Edge Cases`: rules that fall out of the feature's boundaries with other features or contexts; `###` per edge case when needed.
- A part not built yet carries `(Not Yet Implemented)` and a link to its ticket.
- Optional closing pointer to the matching spec.

## Files

- A simple feature is one file, `docs/features/<feature>.md`, with its spec beside it as `<feature>.spec.md`.
- A feature whose items have pages of their own is a folder, `docs/features/<feature>/`, with `overview.md` as the feature's page, a page per item and its spec beside them.

## Content Rules

- Order items logically: broad-to-specific (universal rules first, item-specific after) and cause-before-effect (trigger before effect).
- One feature = one feature doc. Behaviors that belong to a sibling feature live in that feature's own doc; reference, don't duplicate.
- Skip baselines that aren't specific to the feature (e.g. "code is accessible") - they're quality bars, not features.
- Skip generic interaction patterns - submit buttons, validation and error states, toasts, loaders. A feature-specific constraint (e.g. "email must be a company address") is still a property; the generic mechanics around it are not.

## Use cases live in the spec

Don't write use cases, scenarios, or step-by-step flows in the feature doc; they go in the spec with stable IDs. The feature doc declares; the spec verifies.

## Functional only

No component names, library names, CSS terms, routes, framework detail, or status codes. Use functional UI vocabulary: "menu", never "hamburger button".

No work-tracking notes either - TODOs, placeholders, "copy to follow", plan-debt. State the functional fact ("an info callout explains the impact") and track the work left to do in a ticket.

## No UI copy

Don't quote button labels, error messages, field labels, or any literal UI strings. Reference actions by intent ("submits the form"), not by label ("clicks Opslaan"). The doc is in English even when the UI isn't. Literal UI strings are allowed in the spec.

## Don't enumerate values

Roles, statuses, types - give one example, not the full list. Lists rot; the source of truth is the code. Unless a status has a specific edge case.

## Why

Every rule here guards against docrot. UI strings, full enumerations, and implementation details rot the doc the moment any of them change in the code. Use-cases-in-spec keeps the functional doc tight and stops the same scenario from drifting between two files.

## Related

- [Docs Are Hierarchical, Explicit And Short](docs-are-hierarchical-explicit-and-short.md)
- [Feature Workflow](../behavior/feature-workflow.md)
- [No Faux Headers In Lists](no-faux-headers-in-lists.md)
- [UI Vocabulary](ui-vocabulary.md)
- [Work Tracking](../tickets-workflow/work-tracking.md)
- [Normal Dashes](../behavior/normal-dashes.md)
- [Documentation Philosophy](documentation-philosophy.md)
- [Docs Folder Structure](docs-folder-structure.md)
- [Application Template](application-template.md)
