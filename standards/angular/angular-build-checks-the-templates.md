# Angular Build Checks The Templates

In an Angular app `tsc -p tsconfig.app.json` type-checks the TypeScript and skips the templates. The compile check is the build, `ng build --configuration development`, which catches template type errors `tsc` passes, such as a removed key still used in a template.

## How to apply

- Run the development build, by its exit code, after any change a template could depend on, and read its warnings.
- Never call a change type-safe on `tsc` alone.

## Related

- [Gate Commits on Exit Codes](../behavior/gate-commits-on-exit-codes.md)
- [One Projected Node Per Control-Flow Block](one-projected-node-per-control-flow-block.md)
