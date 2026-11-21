# Plan

Version 0.1.0: coentrify ships as an npm package that a project installs as a dev dependency, so an agent reaches the source wherever npm works, a cloud session included.

- The update works from the package (active)
- The docs follow
- Call 0.1.0

## The Update Works From The Package

- The update script works from the package alone, without git or a clone.
- The publish step works out from git what changed between each version and the next, and ships it in the package, so a project at any earlier version, 0.0.8 included, can update.
- The update and unlink scripts stay in Python for now. Porting them to Node, so the bin runs them, stays on the roadmap.

## The Docs Follow

- The readme, Contributions, Checks, coentrify.json and the tools overview say how the package delivers the source.

## Call 0.1.0

- The summary names the migration: a project installs coentrify as a dev dependency, points its entry point at `node_modules/coentrify`, and adds the session check.
- Run the Release the version workflow, which tags 0.1.0 and publishes the package.
