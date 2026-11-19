# Always Add Explicit Types

Annotate every binding - `const`, `let`, function parameters, function return types - even when TypeScript can infer them. Inference is for the compiler, not the reader.

## Why

Strict typing leaves no room for side effects or unforeseen paths.

## Examples

```ts
const value: User = getUser();
let count: number = 0;
function load(id: string): User { ... }
const handler: (event: Event) => void = (event) => { ... };
```

## Linter

If a linter rule forbids explicit annotations on inferrable bindings, change the rule, not the code.

## Exceptions

- Loop variables in a typed iterable (`for (const user of users)`).
- Destructured parameters where each field's type is pinned by the parent type.
- The parameters and return of a function assigned to a binding that carries its full function type.

## Related

- [No Magic Values](no-magic-values.md)
- [Pre-Empt Recurring Code-Review Nits](../code/pre-empt-recurring-code-review-nits.md)
