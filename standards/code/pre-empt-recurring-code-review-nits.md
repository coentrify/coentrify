# Pre-Empt Recurring Code-Review Nits

Pre-empt the known recurring review nits while writing the code. When review checks a convention by eye, make tooling enforce it so it stops recurring.

## Why

A human reviewer sees only what needs judgment.

## How To Apply

- Enforce a convention with a lint rule, and run `lint --fix` where the rule can fix it.
- Before defending a review comment as mistaken, verify the claim against the code or the spec.
  - The CSS `@property` case below is a spec requirement worth defending.
  - An empty override defended on an assumed base throw or call is often harmless and deletable, and the reviewer was right.

## Examples

- Any language: an empty override reads as dead code. Delete it unless it suppresses an *observable* base side effect (a throw, a network call, a real state change). Building an object that nothing then reads is not observable. Verify the side effect is real before keeping one, and leave a why-comment if it stays.
- GitHub Actions: pin every action to its full commit SHA, with the version in a comment (`actions/checkout@<sha> # v5.0.0`), and let Dependabot keep the pins current. When one workflow is already ahead, align the rest in the same change.
- Angular: the order of template attributes is a setting of `@angular-eslint/template/attributes-order`, configured strictly in one shared fragment spread into every template-bearing project's config, so the lint fixes it. Which order is the project's choice.
- CSS: `@property` with a typed (non-`*`) `syntax` requires `initial-value`, or the registration is invalid and silently dropped. Never delete it to simplify.
- SCSS: the suffix ampersand (`.modifier &`) is correct but easily misread. Where it is a one-off in the file or codebase, prefer the explicit selector (`.modifier .block__element`).

## Related

- [Honest Assessments](../behavior/general-working-rules.md#honest-assessments)
- [Escape Hatch Comments](escape-hatch-comments.md)
- [Static Attribute, Not Literal Binding](../angular/static-attribute-not-literal-binding.md)
- [Don't Introduce Tech Debt](../behavior/dont-introduce-tech-debt.md)
- [Always Add Explicit Types](../typescript/always-add-explicit-types.md)
- [Code Review Compounds Into Patterns And Sweeps](../behavior/code-review-compounds-into-patterns-and-sweeps.md)
