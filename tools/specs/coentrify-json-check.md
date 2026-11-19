# Coentrify JSON Check

A spec for the check that keeps a project's `coentrify.json` true ([coentrify.json](../../coentrify-json.md)). It runs as a pre-commit step in the project.

## What It Does

- It fails when the file does not parse, when a folder it names is missing, and when a standard it lists is not on disk.
- It fails on a state other than `tracked` or `customized`. A module's `source` key is no standard.
- It fails on a `healing` or `filing` other than `automatic` or `review`, and on `filing` without `contributor: true`.
- As a pre-commit step it also refuses a commit that changes a tracked standard by hand. The commit passes once the state is `customized`, or when the commit changes the version, as an update does.

## The Check

- A file that names its folders and lists standards on disk passes.
- A missing folder, a missing standard, a state of `draft` or a `healing` of `sometimes` fails.
- `filing` without `contributor: true` fails.
- A commit that edits a tracked standard by hand refuses, and passes once its state is `customized`.
- A module with a `source` of its own passes.
- A commit that edits tracked standards and changes the version passes.
