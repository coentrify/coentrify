# E2E Test Conventions

## User Routes Only

- An e2e case walks a route the user can take: in an app, a sign-in or a search; in a game, a new game or a continue.
- A developer tool, such as a devbox or a seed endpoint, may seed the state a case starts from; its own routes (a jump, a scenario, a reset) are never the flow under test.
- A bug only a tool can reach belongs to the tool and gets a unit test of the tool.

## File and describe

- One spec file per feature; happy and error variants are siblings in the same file.
- Every test sits in a `describe('<Feature Name>', ...)` block, so the report heading reads as the feature ("User List", "Search User") instead of the file name. The describe names the feature, never the flow.

## Title

The test title is the use-case name: no "happy path", no flow prefix, no ID prefix.

- Happy path is the use case as-is: `Create User`, `Edit User`, `User List`.
- Edge cases append ` - <Variant>` with a spaced dash: `Create User - Invalid Email`, `Edit User - Error`, `Delete User - Cancel`.
- The per-feature overview is `<Feature> - Overview`, one per feature spec ([Per-Feature Overview Test](per-feature-overview-test.md)).
- The cross-feature application demo, one per application, is `<Application> Demo`; an application is not a feature, so the title says "Demo". The describe block and its single test carry the same name.

## Tags

- `@<use-case-id>` - the stable ID from the feature's spec.md (`@create-user-1`); always present on per-flow tests.
- `@<feature-id>-overview` - the per-feature overview; no use-case number.
- `@<application-id>-overview` - the application demo, with an optional variant suffix: `@<application-id>-overview-<variant>`.
- Both overview tags also prefix the narrated demo reel's output filename; no separate ticket tag is needed.
- `@demo` - on the per-feature overview and the application demo.
- `@error` - only on unhappy paths; reports color the chip red. Happy is the absence of `@error`, so there is no `@happy`.
- Modular features: once an application needs module folders (`features/users/`, `features/authentication/`), the feature takes its module as a prefix: `@users-create-user-1`. Flat until that earns its keep.
- Pattern tags - only for a genuine cross-feature, user-perceived category that filtering benefits from:
  - `@list` - collection or list view.
  - `@empty` - empty state.
  - `@detail` - single-entity detail view.
  - `@edge` - edge-case behavior (off the happy path, unusual state, persisted-state quirk).
  - New patterns stay functional and user-perceived; never a tag for a feature name (the spec file is the feature), an implementation mechanic (redirects, pickers, layouts) or a single-test category.
- No application-name tag on per-flow tests; the test-runner project name already labels every test by application.

## Helpers and shared data

- Spec-side helpers (URL builder, named timeouts, locator factories) live next to the specs they support.
- Tests that assert on seeded data import it from the application's testing lib ([Realistic Test Data Variance](../tests/realistic-test-data-variance.md)); never hardcode the seeded values.

## Use-case linkage

Every test maps to a use case in the feature's spec.md by its `@<use-case-id>` tag. The use case lands in the spec first, the test second ([Feature Spec Template](../docs/feature-spec-template.md)).

## Filtering

- Pre-push runs the full affected e2e set, no filter.
- Local exploration greps by tag (`--grep "@error"`, `--grep "@list"`, `--grep "@create-user-1"`).

## Related

- [No Magic Values](../typescript/no-magic-values.md)
- [Always Add Explicit Types](../typescript/always-add-explicit-types.md)
