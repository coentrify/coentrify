# Names

- A function is named after what it returns: `seconds`, never `getSeconds` or `computeSeconds`.
- A function that returns a boolean starts with `is` or `has`.
- A function that returns a text ends in `Text`: `durationText`, `moneyText`.
- A function that returns a list is a plural noun: `entries`, never `entryList`.
- A constant is written in capitals with underscores, and sits at the top of its file.
- A regular expression is a constant, named after what it matches: `LINE`, `DATE`.
- A parameter is a whole word. No `s`, `n` or `str`.
- A loop variable over entries is `item`, since `entry` is a function.
- A project is referred to by its code in data, and by its name on screen.
- A week is always written as in `2026-W47`, in names, in data and on screen.
- A file is named after the one thing it holds, in lower case with hyphens.
- No abbreviations in a name, except `id`.
- A name never carries its type: `rows`, never `rowArray`.
- A map from a code to a value is named after the value, in the plural: `totals`.
- A private helper has no prefix. It is simply not exported.
