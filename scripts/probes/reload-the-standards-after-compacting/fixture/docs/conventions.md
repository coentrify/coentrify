# Conventions

The decisions of this project. Code that predates a decision follows it once touched.

## Names

- A function is named after what it returns: `seconds`, never `getSeconds` or `computeSeconds`.
- A function that returns a boolean starts with `is` or `has`.
- A constant is written in capitals with underscores, and sits at the top of its file.
- A parameter is a whole word. No `s`, `n` or `str`.
- A file is named after the one thing it holds, in lower case with hyphens.

## Functions

- A function takes at most three parameters. A fourth becomes an options object.
- A function that parses text takes the text as its first parameter.
- A function that formats takes the value as its first parameter and returns a text, never `null`.
- No default exports.
- A function that can fail on its input throws an `AppError` with the code `E_INPUT`.

## Files And Folders

- Source lives in `src`, one topic per file.
- A helper used by one file stays in that file, below the exports.
- Nothing outside `src/io.js` imports from `node:fs`.

## Asynchronous Code

- The name of an asynchronous function ends in `Later`: `reportLater`, never `loadReport`.
- An asynchronous function that reads or writes a file takes an `AbortSignal` named `signal` as its last parameter, and passes it on.
- A file is read through `readTextLater` in `src/io.js`.
- A failure to read or write is thrown as an `AppError` with the code `E_IO`, with the path in the message.
- No `.then` chains. Use `await`.

## Tests

- A test file sits in `test`, named after the source file, and ends in `.test.js`.
- The tests of asynchronous code sit in `test/later`, apart from the rest.
- A test name starts with a verb in the present tense: `parses`, `rejects`, `returns`.
- A test of a failure checks the code of the error, never its message.
- A test that needs a file writes it to a folder from `mkdtemp`, and removes the folder after.

## Comments

- A comment says why, in one line. No comment restates the code.
- No commented-out code.

## Commits

- One change per commit, with a subject in the imperative.
- Nobody commits on a Friday after four.
