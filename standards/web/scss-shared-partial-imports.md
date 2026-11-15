# SCSS Shared Partial Imports

Cross-cutting SCSS partials (breakpoints, z-index and the like) live under a shared styles folder exposed through a path alias (such as `@styles`) that sits on the Sass preprocessor's load path. Consume them with `@use '@styles/<name>'` and never alias with `as`; reach members through the namespace derived from the filename (`breakpoints.mobile`, `breakpoints.$mobile-max-width`, `z-index.tier(...)`).

## Why

The import is short and stable and reads the same from every consumer, with no `../../` relative chains. The default namespace already says which module a member came from, so an alias only adds noise and lets two files disagree on the short name.

## How to apply

- Put a new shared partial in the shared styles folder and keep that folder on the build's style-preprocessor include paths.

## Related

- [App-Shield](../architecture/app-shield.md)
