# SCSS Shared Partial Imports

Cross-cutting SCSS partials (breakpoints, z-index and the like) live under a styles folder named after its alias, `@ui` by default or `@<app>` for an app's own, whose parent sits on the Sass preprocessor's load path. Consume them with `@use '@<alias>/<name>'`, such as `@use '@ui/colors'`, and never alias with `as`. Reach members through the namespace derived from the filename (`breakpoints.mobile`, `breakpoints.$mobile-max-width`, `z-index.tier(...)`).

## Why

A shared partial is imported the same way everywhere, short and stable.

## How To Apply

- Put a new shared partial in its styles folder, and keep that folder's parent on the build's style-preprocessor include paths. Which alias a project picks is its own setup.
- The default namespace already says which module a member came from, so an alias only adds noise and lets two files disagree on the short name.

## Related

- [App-Shield](../architecture/app-shield.md)
