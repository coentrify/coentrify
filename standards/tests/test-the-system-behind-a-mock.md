# Test The System Behind A Mock

A system that a mock stands in for gets a spec test of its own. Where no test can run, as with a third-party API, a spec and recorded manual tests are the proof.

## Why

A test against a mock says nothing about the system behind it.

## How to Apply

- The system is tested against its own spec, apart from the tests that run on the mock.
- The spec follows the [Feature Spec Template](../docs/feature-spec-template.md): use cases with stable ids, which a person can run by hand.
- Where an automated test cannot run, the use cases are run by hand.
- Every manual run gets a dated page in `docs/records/manual-tests/`, named `<date>-<system>.md`.
- The page lists the ids that were run, each with its outcome.

## Related

- [Develop Against Mocks](../tooling/develop-against-mocks.md)
- [Test Design](test-design.md)
- [Playtest Files](../records/playtest-files.md)
- [Docs Folder Structure](../docs/docs-folder-structure.md)
