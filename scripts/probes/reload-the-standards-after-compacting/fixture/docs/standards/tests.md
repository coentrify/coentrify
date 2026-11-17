# Tests

- A test file sits in `test`, is named after the source file, and ends in `.test.js`.
- The tests of asynchronous code sit in `test/later`, apart from the rest, since they touch the disk.
- A test name starts with a verb in the present tense: `parses`, `rejects`, `returns`, `writes`.
- A test of a failure checks the code of the error, never its message.
- A test that needs a file writes it to a folder from `mkdtemp`, and removes the folder after.
- No test reads `data/entries.txt`. A test builds its own entries.
- One behavior per test. A second assertion belongs to the same behavior, or to another test.
- No mocks of this project's own modules.
- Expected values are written out, never computed with the code under test.
- The suite runs with `npm test`, and takes no arguments.
