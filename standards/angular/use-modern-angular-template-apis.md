# Use Modern Angular Template APIs

Use the current Angular idiom over the legacy one it replaced. One legacy usage that surfaces is the start of a sweep.

## Why

The deprecated APIs draw review comments, carry the old `CommonModule` import weight, and drift from the framework's direction. The replacements are first-class, smaller, and (for class and style) merge cleanly with static attributes.

## How to Apply

- It's a pattern: when one legacy usage surfaces, sweep the workspace for the rest and convert them.

## Related

- [Always Use Design Tokens for Colors](../web/always-use-design-tokens-for-colors.md)
- [Pre-empt Recurring Code-Review Nits](../code/pre-empt-recurring-code-review-nits.md)
- [Don't Introduce Tech Debt](../behavior/dont-introduce-tech-debt.md)
