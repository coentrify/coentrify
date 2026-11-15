# Always Add Explicit Types

Annotate every binding - `const`, `let`, function parameters, function return types - even when TypeScript can infer them. Inference is for the compiler, not the reader.

## Examples

```ts
const value: User = getUser();
let count: number = 0;
function load(id: string): User { ... }
const handler = (event: Event): void => { ... };
```

## Linter

If a linter rule forbids explicit annotations on inferrable bindings, change the rule, not the code.

## Reasons

- The type is always included in the file that is checked.
- Readable for an agent and for code reviews.
- Easy to spot when a type is missing.
- Upstream type changes surface at the call site, not silently downstream.
- Exported types don't drift when internals change.
- Forces you to confirm the value is what you meant.
- Faster type-checking.
- Errors land on the assignment, not three calls away.

## Exceptions

- Loop variables in a typed iterable (`for (const x of users)`).
- Destructured parameters where each field's type is pinned by the parent type.
