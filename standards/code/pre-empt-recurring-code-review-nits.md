# Pre-empt Recurring Code-Review Nits

A small set of avoidable nits keep coming back in review. Pre-empt them when writing the code, and when a convention is enforced by eye, make tooling enforce it so it stops recurring.

## Why

A human reviewer sees only what needs judgment.

## How To Apply

- CI action pins: keep GitHub Actions on their latest major (`@vN`). When one workflow is already ahead, align the rest in the same change.
- Angular template attribute order: STRUCTURAL_DIRECTIVE -> ATTRIBUTE_BINDING -> TEMPLATE_REFERENCE -> INPUT_BINDING -> TWO_WAY_BINDING -> OUTPUT_BINDING. Enforce with `@angular-eslint/template/attributes-order` (one shared fragment spread into every template-bearing project's config) and `lint --fix`, never by eye.
- Empty overrides read as dead code. Delete one unless it suppresses an *observable* base side effect (a throw, a network call, real state change). Building an object that nothing then reads is not observable. Verify the side effect is real before keeping one, and leave a why-comment if it stays.
- CSS `@property` with a typed (non-`*`) `syntax` REQUIRES `initial-value` - the registration is invalid and silently dropped without it. It is not redundant. Never delete it to "simplify".
- SCSS suffix-ampersand (`.modifier &`) is correct but easily misread. If it's a one-off in the file or codebase, prefer the explicit selector (`.modifier .block__element`).
- Before defending a review comment as mistaken, verify the claim against the actual code or spec.
  - The `@property` case is a genuine spec requirement worth defending.
  - An empty override defended on an assumed base throw or call is often harmless and deletable, and the reviewer was right.

## Related

- [Honest Assessments](../behavior/general-working-rules.md#honest-assessments)
- [Escape Hatch Comments](escape-hatch-comments.md)
- [Static Attribute, Not Literal Binding](../angular/static-attribute-not-literal-binding.md)
- [Don't Introduce Tech Debt](../behavior/dont-introduce-tech-debt.md)
- [Always Add Explicit Types](../typescript/always-add-explicit-types.md)
- [Code Review Compounds Into Patterns And Sweeps](../behavior/code-review-compounds-into-patterns-and-sweeps.md)
