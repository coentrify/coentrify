# Develop Against Mocks

Daily development runs against mocks: auth, user identity, app context, API responses. Real backends are exercised only by the user, manually.

## Why

Mocks make testing automated and repeatable, and development smoother.

## How To Apply

- A configurable mock layer covers every external system: identity provider, user/claims, app context, backend API, third parties.
- Enabling and disabling mocks is a single toggle. Mock state is the default in local configurations.
- Mocks are committed code, encapsulated outside the code they stub ([Non-Destructive Documenting And Test Automation](../behavior/non-destructive-documenting-and-test-automation.md)). The thing being mocked stays untouched.
- New mockable behavior extends the existing mock layer. Never fork a one-off bypass or inline a dev-mode conditional.
- A temporary hack inside a guard, service, or interceptor is the wrong tool. Promote it to the mock layer or note it ([Note Issues](../behavior/note-issues.md)).

## Related

- [Test The System Behind A Mock](../tests/test-the-system-behind-a-mock.md)
