# Electron Shell Shape

An Electron app is a website in a shell. The archive holds the main process, the preload and the Electron package's own dependencies, declared in the app folder's own package file; the browser build sits as plain files under the app's resources, served by the main process itself on a privileged app scheme so the index answers every route. The root package has development dependencies only, since the build is html, css, js and assets.

## Why

The shell stays small: an update replaces the website, and Electron stays.

## How to Apply

- The framework is a build tool: bundled into the shell, it drags the whole toolchain into the package and breaks on the next platform. Serving the build from the main process needs no serve package and no dev server in production.
- The main process registers the scheme as standard, secure, with fetch and streams, and answers a request with the file if it exists and the index otherwise.
- Saves live in an electron store under the user data folder; an environment variable overrides that folder so suites and testers never touch real saves.
- The packaged app opens fullscreen with a key to toggle it and a key for the devtools, so a tester can read the console; a windowed environment flag exists for the suites.
- A splash can be skipped by a flag for quick starts.
- Keep the shell thin: the app never imports from the shell.

## Related

- [Electron Packaging And Suite](electron-packaging-and-suite.md)
- [Develop Against Mocks](../tooling/develop-against-mocks.md)
