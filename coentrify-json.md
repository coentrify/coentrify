# coentrify.json

One file at the root of a project says how the project uses coentrify.

- The File - what it holds
- States - how a project follows a standard
- Versions - how a change is found
- The Check - what keeps the file true

## The File

The onboarding writes `coentrify.json`, and the director changes it after.

```json
{
  "source": "https://github.com/coentrify/coentrify",
  "version": "0.0.1",
  "folders": { "docs": "docs", "standards": "standards" },
  "workflow": "simple",
  "records": ["changelog", "healing-log"],
  "wiki": "vitepress",
  "healing": "automatic",
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
- `workflow` is `simple` or `tickets`
- `records` lists each record kept by its place under `docs/records/`: `log`, `activity`, `changelog`, `healing-log`, `playtests`, `user-tests`
- `modules` - every standard taken from coentrify, by module, with its state
- `healing` - who makes a harness change: `automatic` by default, where a subagent makes it, logs it in the healing log and the report names it for a veto, or `review`, where it is filed for the director
- `contributor` - left out by default. Set to `true`, the project may file changes at the source.
- `filing` - for a contributor: `review` by default, where the director looks at an issue before it is filed at the source, or `automatic`, where the subagent files it on its own
- `libraries` - left out by default. Each library the project contributes to, by name, with its `source` and a `filing` of its own, as above ([Library Feedback](standards/docs/library-feedback.md))

A module whose standards come from somewhere else can carry a `source` of its own.

## States

- `tracked` - an update replaces the file
- `customized` - an update reports the changes

A tracked standard that is changed by hand becomes customized. So does a standard whose update the director declines. The reason goes in `standards/decisions.md`.

A standard the project wrote itself is not listed. It goes in the module it belongs to, beside the standards from coentrify, so the links and the index keep working. A subject coentrify does not cover yet, such as React, gets a module of its own.

## Versions

Coentrify has one version, and a project is at one version. The [changelog](changelog/overview.md) names every standard that a version changed.

A standard the changelog does not name needs no attention.

## The Check

A check built from its spec in the [tools](tools/overview.md) keeps the file true.

- A folder the file names has to exist.
- A standard the file lists has to be on disk.
- A state is `tracked` or `customized`.
- `healing` and `filing` are `automatic` or `review`, and `filing` stands only beside `contributor: true`.

With `--staged`, as a pre-commit step, the check also refuses a commit that changes a tracked standard by hand. The commit passes once the state is `customized`, or when the commit changes the version, as an update does.
