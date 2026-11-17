# Files

- Source lives in `src`, one topic per file.
- A helper used by one file stays in that file, below the exports.
- Nothing outside `src/io.js` imports from `node:fs` or `node:fs/promises`. `src/cli.js` predates this and still does.
- A file is read through `readTextLater` and written through `writeTextLater`, both in `src/io.js`.
- Every function that reads or writes a file is asynchronous. No synchronous file calls in new code.
- The name of an asynchronous function ends in `Later`: `reportLater`, never `loadReport` or `saveReport`.
- An asynchronous function that reads or writes a file takes an `AbortSignal` named `signal` as its last parameter, and passes it on.
- A function that writes a file returns the path it wrote.
- No `.then` chains. Use `await`.
- A function takes a folder and builds the file name itself. The caller never passes a file name for a file this code writes.
- Paths are joined with `node:path`, never with a slash in a text.
- Text files are UTF-8, end in a newline, and use `\n` between lines.
