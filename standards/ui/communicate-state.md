# Communicate State

Every state the user cares about - loading, empty, error, success, disabled/locked - must be visibly communicated. Never leave a state silent, and never let one state masquerade as another (an error rendered as "no results", a load in progress rendered as empty).

## Why

The user always knows what the system is doing.

## How To Apply

- Model async data as explicit states (loading / loaded / empty / error) instead of a single value with an empty fallback. Each gets its own affordance: skeleton or spinner, empty state, error callout, success toast.
- Disabled or locked controls signal why they are inert.
- Use an existing design-system component for the feedback (callout, toast, empty state) per [UI Components First](ui-components-first.md).
- Visibility of system status is the first usability heuristic.
- A failed fetch that falls back to an empty list tells the user there is nothing, when the truth is that it could not load.

## Related

- [Validation Errors Fire On Submit](validation-errors-fire-on-submit.md)
- [UI Component Design](ui-component-design.md)
- [UI Copy In Template](../angular/ui-copy-in-template.md)
