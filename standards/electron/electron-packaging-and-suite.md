# Electron Packaging And Suite

Packages are built unsigned, with the keychain untouched, and only when the director asks for a build. Day-to-day verification runs on the suites and the captures. A packaged suite launches the built app from a copy outside the project, where nothing resolves back into the project's node modules, and checks every platform's package for the shell and the website next to it.

## Why

A package works away from the repository, and the packaged suite proves it on the build machine.

## How To Apply

- A package that only works next to the repository's node modules breaks on every other machine. Building on request keeps the loop fast.
- A version guard refuses to package a version that is tagged already. A packaged build carries the version of its commit.
- All platform packages build from one machine where the packager allows it. The auto updater's side files can go.
- The packaged suite probes what breaks silently in a package: the fonts, the icons, the store path.
- A release checklist names the steps around a build that goes out: the debug tools stripped, the signing, the platforms tested by hand.
- An unsigned build may not open on another machine. A build that goes out to others is signed, and its platforms are tested by hand, per the release checklist.

## Related

- [Electron Shell Shape](electron-shell-shape.md)
- [Never Access The Keychain](../security/never-access-the-keychain.md)
- [Devbox](../gamedev/devbox.md)
