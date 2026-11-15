# Use Modern Angular Template APIs

Use the current Angular idiom over the legacy one it replaced. The directives `NgClass` and `NgStyle` are deprecated, and built-in control flow supersedes the structural directives `*ngIf` / `*ngFor` / `*ngSwitch`.

## Why

The deprecated APIs draw review comments, carry the old `CommonModule` import weight, and drift from the framework's direction. The replacements are first-class, smaller, and (for class and style) merge cleanly with static attributes.

## How to apply

- Bind classes with `[class]="expr"` (a string of classes, merges with the static `class` attribute) or `[class.name]="condition"`; never `[ngClass]`.
- Bind styles with `[style.prop]="value"` or `[style]="obj"`; never `[ngStyle]`.
- Use `@if` / `@for` / `@switch` over `*ngIf` / `*ngFor` / `*ngSwitch`, and drop the now-unneeded `NgIf` / `NgFor` / `NgClass` / `NgStyle` imports.
- It's a pattern: when one legacy usage surfaces, sweep the workspace for the rest and convert them.

## Related

- [Always Use Design Tokens for Colors](../ui/always-use-design-tokens-for-colors.md)
- [Pre-empt Recurring Code-Review Nits](../code/pre-empt-recurring-code-review-nits.md)
- [Don't Introduce Tech Debt](../behavior/dont-introduce-tech-debt.md)
