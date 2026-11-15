# coentrify.json

One file at the root of a project says how the project uses coentrify.

- The File - what it holds
- States - how a project follows a standard
- Versions - how a change is found

## The File

The onboarding writes `coentrify.json`, and the director changes it after.

```json
{
  "source": "https://github.com/coentrify/coentrify",
  "version": "0.0.1",
  "folders": { "docs": "docs", "standards": "standards" },
  "workflow": "simple",
  "records": ["changelog"],
  "wiki": "vitepress",
  "modules": {
    "behavior": {
      "always-make-no-mistakes": "tracked",
      "understand-the-need": "customized"
    }
  }
}
```

- `source` - the repository the standards came from, so a version of coentrify of your own works the same way
- `version` - the version of coentrify the project is at
- `folders` - where the docs and the standards live
- `workflow`, `records`, `wiki` - the choices from the onboarding
- `modules` - every standard taken from coentrify, by module, with its state
- `contributor` - left out by default. Set to `true`, the project may file changes at the source.

A module whose standards come from somewhere else can carry a `source` of its own.

## States

- `tracked` - an update replaces the file
- `customized` - an update reports the changes

A tracked standard that is changed by hand becomes customized. So does a standard whose update the director declines. The reason goes in `standards/decisions.md`.

A standard the project wrote itself is not listed. It goes in the module it belongs to, beside the standards from coentrify, so the links and the index keep working. A subject coentrify does not cover yet, such as React, gets a module of its own.

## Versions

Coentrify has one version, and a project is at one version. The [changelog](changelog.md) names every standard that a version changed.

A standard the changelog does not name needs no attention.
