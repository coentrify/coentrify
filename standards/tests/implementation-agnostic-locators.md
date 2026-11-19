# Implementation-Agnostic Locators

Any test that touches the DOM (e2e, integration, styleguide) locates elements by what the user perceives: role, accessible label, placeholder and visible text. Avoid component tag selectors, class selectors and internal attribute names.

## Why

A test fails only when what the user perceives changes.

## How to Apply

- Role and label locators make the app expose proper accessibility, which it needs anyway.
- An element that lacks a role (a custom dropdown trigger that isn't a button yet) gets its implementation selector wrapped in exactly one helper per user gesture (`openRowActionMenu`, `openRoleFilter`). Specs only call the helper. When the UI is upgraded, only the helper changes.
- Don't match on translated strings inside boot or async wait code: translations load asynchronously and create races. Wait for a stable non-translated marker first. Translated text is safe for assertions after that.

## Related

- [Implementation-Agnostic Assertions](implementation-agnostic-assertions.md)
- [Substring Locator Collisions](../e2e/substring-locator-collisions.md)
