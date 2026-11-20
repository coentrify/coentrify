# UI Components First

UI primitives (buttons, icons, callouts, tooltips, dialogs, toasts, inputs, layout chrome) come from existing components - either the project's design-system package or the workspace's shared UI library composed on top. Don't roll custom SVGs, native buttons, or bespoke styling for anything covered by an existing component.

## Why

The UI stays one coherent system.

## How To Apply

- Reach for an existing component first. Verify icon and component names against the package before using.
- A missing component composed from existing primitives, such as a card with a header and a list, is added to the workspace's shared UI library without asking.
- Arranging ui components into a page stays in the app layer.
- UI primitives stay in the UI library.
- A missing primitive that belongs in the design system itself, such as a new base control or icon, goes to the director, since it is a request to the design system's owners ([Library Feedback](../docs/library-feedback.md)). It is never inlined as a custom one.
- An existing component brings theming and accessibility with it.
- Everything through the UI layer gives the design system a clear pressure point when something is missing.

## Related

- [No Inline Templates](../angular/no-inline-templates.md)
- [One Component Per Folder, Flat](../angular/one-component-per-folder-flat.md)
- [Prefer Content Projection Over Props (Angular)](../angular/prefer-content-projection-over-props-angular.md)
- [UI Component Design](ui-component-design.md)
- [UI Variants By Function, Not By Color](ui-variants-by-function-not-by-color.md)
