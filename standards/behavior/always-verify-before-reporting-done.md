# Always Verify Before Reporting Done

The verification step always applies. The mechanism varies by what was changed.

## Why

Changes a browser preview can't exercise (e2e specs, types, build config, scripts, mocks, docs that drive tests) still break at runtime, and only the matching check proves they work. Re-reading the diff catches mistakes in what you wrote; running the check catches mistakes in whether it works.

## How to Apply

- Pick the verification surface that matches the change: browser preview for UI, e2e run for spec edits, type check for type changes, unit run for logic, lint for style-rule fixes, build for tooling.
- Run it before declaring done. "I read the diff" never substitutes for "I ran the check" when a check exists.
- If no automated check exists for the change, name what is being skipped and why, so the user can decide whether to verify manually.
- Never frame the absence of a browser preview as a reason to skip verification.

## Related

- [Review Changes Before Reporting Done](review-changes-before-reporting-done.md)
