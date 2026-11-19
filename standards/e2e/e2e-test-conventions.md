# E2E Test Conventions

An e2e test walks a user route, sits in its feature's spec file, and is named and tagged after its use case.

## Why

What the spec says and what the tests verify should be easy to check against each other.

## User Routes Only

- An e2e case walks a route the user can take:
  - In an app, a sign-in or a search.
  - In a game, a new game or a continue.
- A developer tool, such as a debug panel or a seed endpoint, may seed the state a case starts from. Its own routes (a jump, a scenario, a reset) are never the flow under test.
- A bug only a tool can reach belongs to the tool and gets a unit test of the tool.

## File And Describe

- One spec file per feature. Happy and error variants are siblings in the same file.
- Every test sits in a `describe('<Feature Name>', ...)` block, so the report heading reads as the feature ("User List", "Search User") instead of the file name. The describe names the feature, never the flow.

## Title

The test title is the use-case name: no "happy path", no flow prefix, no ID prefix.

- Happy path is the use case as-is: `Create User`, `Edit User`, `User List`.
- Edge cases append ` - <Variant>` with a spaced dash: `Create User - Invalid Email`, `Edit User - Error`, `Delete User - Cancel`.
- The per-feature overview is `<Feature> - Overview`, one per feature spec ([Per-Feature Overview Test](per-feature-overview-test.md)).
- The cross-feature application overview, one per application, is `<Application> - Overview`, the same as a feature's. The describe block and its single test carry the same name.

## Tags

- `@<use-case-id>` - the stable ID from the feature's spec.md (`@create-user-1`), always present on per-flow tests ([Feature Spec Template](../docs/feature-spec-template.md)).
- `@<feature-id>-overview` - the per-feature overview, no use-case number.
- `@<application-id>-overview` - the application overview, with an optional variant suffix: `@<application-id>-overview-<variant>`.
- Both overview tags also prefix the narrated demo reel's output filename. No separate ticket tag is needed.
- `@demo` - on the per-feature overview and the application overview.
- `@error` - only on unhappy paths. Reports color the chip red. Happy is the absence of `@error`, so there is no `@happy`.
- Modular features: once an application needs module folders (`features/users/`, `features/authentication/`), the feature takes its module as a prefix: `@users-create-user-1`. Flat until that earns its keep.
- Pattern tags - only for a cross-feature, user-perceived category that filtering benefits from:
  - `@list` - collection or list view.
  - `@empty` - empty state.
  - `@detail` - single-entity detail view.
  - `@edge` - edge-case behavior (off the happy path, unusual state, persisted-state quirk).
  - New patterns stay functional and user-perceived, never a tag for a feature name (the spec file is the feature), an implementation mechanic (redirects, pickers, layouts) or a single-test category.
- No application-name tag on per-flow tests. The test-runner project name already labels every test by application.

## Helpers And Shared Data

- Spec-side helpers (URL builder, named timeouts, locator factories) live next to the specs they support.
- Tests that assert on seeded data import it from the application's testing lib ([Realistic Test Data Variance](../tests/realistic-test-data-variance.md)). Never hardcode the seeded values.

## Filtering

- Pre-push runs the full affected e2e set, no filter.
- Local exploration greps by tag (`--grep "@error"`, `--grep "@list"`, `--grep "@create-user-1"`).

## Related

- [No Magic Values](../typescript/no-magic-values.md)
- [Always Add Explicit Types](../typescript/always-add-explicit-types.md)
