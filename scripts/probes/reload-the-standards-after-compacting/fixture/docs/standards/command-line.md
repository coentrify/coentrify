# The Command Line

- `src/cli.js` is the only file that prints, reads the arguments and ends the process.
- The usage goes to the error stream, and the process ends with 2.
- A failure is printed as its code, a colon and its message, on the error stream.
- The output is plain text in columns, padded with spaces. No colors and no tables.
- A new command is a word after `timesheet`, never a flag.
- A flag has one long form with two hyphens. No short flags.
- Nothing is asked from the person at the keyboard. A missing argument is wrong usage.
- The output of a command is stable, so a script can read it.
