# Use Modern Angular Template APIs

Use the current Angular idiom over the legacy one it replaced. One legacy usage that surfaces is the start of a sweep ([Code Review Compounds Into Patterns And Sweeps](../behavior/code-review-compounds-into-patterns-and-sweeps.md)).

## Why

The code follows where the framework is going.

## How To Apply

- Use `@if`, `@for` and `@switch` over `*ngIf`, `*ngFor` and `[ngSwitch]`.
- Use `input()` and `output()` over `@Input()` and `@Output()`, and `model()` over an `@Input()` and `@Output()` pair for two-way binding.
- Use the signal queries `viewChild()`, `viewChildren()`, `contentChild()` and `contentChildren()` over their decorator forms.

## Related

- [Code Review Compounds Into Patterns And Sweeps](../behavior/code-review-compounds-into-patterns-and-sweeps.md)
- [Always Use Design Tokens For Colors](../web/always-use-design-tokens-for-colors.md)
- [Pre-Empt Recurring Code-Review Nits](../code/pre-empt-recurring-code-review-nits.md)
- [Don't Introduce Tech Debt](../behavior/dont-introduce-tech-debt.md)
