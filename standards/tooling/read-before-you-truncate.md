# Read Before You Truncate

A scripted in-place edit reads the whole file into a variable, runs its checks and replacements, and only then opens the file for writing.

## Why

A file survives a scripted edit, uncommitted work included.

## How To Apply

- `open(p,'w').write(fix(open(p).read()))` opens for writing first, which empties the file: the read sees nothing, the assert fails, and the file stays empty, taking its uncommitted work with it.
- Python: `s = open(p).read()`, assert, transform, then `with open(p, 'w') as f: f.write(new)`.
- Never redirect a command's output onto a file the same command reads.
- A file with uncommitted work that isn't yours: snapshot it to the scratchpad before the first scripted edit.
- A new file written from a heredoc (`cat > f <<EOF`) clobbers a file of the same name without a word: run `set -o noclobber` first, or `ls` the target names, so a clash fails loud.

## Related

- [Review Changes Before Reporting Done](../behavior/review-changes-before-reporting-done.md)
