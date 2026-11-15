# The Lock File

`standards/coentrify.lock` records which standards a project took from coentrify, and from which version. `coentrify update` reads the lock file to see what changed.

- Format - what a line holds
- States - how a project follows a standard
- The Hash - how a change is detected

## Format

The lock file is plain text, with one fact per line.

```
source  https://github.com/coentrify/coentrify
version 8546731
tracked 71c2e5a behavior/always-make-no-mistakes.md
drifted 321a257 behavior/understand-the-need.md
```

- `source` - the repository the standards came from, so a version of coentrify of your own works the same way
- `version` - the version the standards were taken from: a tag, or a commit while there are no tags
- Every other line - the state of one standard, the hash of the file as taken, and the path of the file

## States

- `tracked` - the project follows the source, and an update replaces the file
- `drifted` - the project changed the file on purpose, and an update only reports what changed at the source
- `detached` - the file is the project's own now, and an update leaves the file alone

A standard the project wrote itself has no line in the lock file.

## The Hash

The hash is what `git hash-object` gives for the file as taken, shortened to seven characters. A file in the project whose hash differs from the lock file has been changed in the project.
