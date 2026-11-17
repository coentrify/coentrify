# Errors

- Every error this code throws is an `AppError` with a code from `CODES` in `src/errors.js`.
- A new code is added to `CODES` in the same change as its first use.
- `E_INPUT` is for text that does not parse: a duration, a date, an entry.
- `E_UNKNOWN_PROJECT` is for a project code that is not in `PROJECTS`.
- `E_IO` is for a file that cannot be read or written. Its message holds the path.
- The message of an error is one sentence for a person, without a stack and without a code.
- An error from node is never passed on as it is. It is caught at the call and thrown again as an `AppError`, with the first error as its `cause`.
- No error is swallowed. A `catch` either throws or ends the process.
- The process ends with 2 on wrong usage and with 1 on any other failure.
- Nothing is logged where an error is thrown. Only `src/cli.js` prints.
