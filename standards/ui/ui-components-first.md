# UI Components First

UI primitives (buttons, icons, callouts, tooltips, dialogs, toasts, inputs, layout chrome) come from existing components - either the project's design-system package or the workspace's shared UI library composed on top. Don't roll custom SVGs, native buttons, or bespoke styling for anything covered by an existing component.

## Why

Custom UI scattered across the app diverges from the design system, bypasses theming and a11y guarantees, and duplicates effort that should live in (or be requested from) the shared system. Funneling everything through the UI layer keeps the UI coherent and gives the design system a clear pressure point when something is missing.

## How to Apply

- Reach for an existing component first. Verify icon and component names against the package before using.
- If the design-system package doesn't have what you need, add a component to the workspace's shared UI library. Composition stays in the app and feature layers; UI primitives stay in the UI library.
- If neither the package nor the workspace UI library can cover it (it belongs in the design system but isn't there yet), ask the director - don't inline a custom one.

## Related

- [No Inline Templates](../angular/no-inline-templates.md)
- [One Component per Folder, Flat](../angular/one-component-per-folder-flat.md)
- [Prefer Content Projection over Props (Angular)](../angular/prefer-content-projection-over-props-angular.md)
- [UI Component Design](ui-component-design.md)
- [UI Variants By Function, Not By Color](ui-variants-by-function-not-by-color.md)
