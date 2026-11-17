# Functions

- A function takes at most three parameters. A fourth becomes an options object.
- A function that parses text takes the text as its first parameter.
- A function that formats takes the value as its first parameter and returns a text, never `null`.
- No default exports.
- No classes, except for errors.
- A function returns a new value. It never changes its arguments.
- A function that can fail on its input throws. It never returns `null` or `undefined` for a failure.
- No function is longer than thirty lines. A longer one is split by step.
- Early returns come first, the main path last.
- No nested ternaries.
- An options object is destructured in the signature, with its defaults there.
- A callback is an arrow function. A top-level function is a declaration.
- No function reads `process.env` or `process.argv`, except in `src/cli.js`.
- Sorting is always explicit, with a compare function.
- A report is a plain object that can go through `JSON.stringify` unchanged.
