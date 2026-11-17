# Money

- An amount is held in whole cents, as an integer. No amount is ever a float.
- An amount is rounded once, where it is computed from a duration, and never again.
- A total is the sum of the rounded amounts of its rows.
- On screen an amount is written as `EUR 142.05`, with a point and two decimals.
- In a file an amount is written in cents, as an integer without a currency: `14205`.
- The currency is the euro. No function takes a currency.
- A rate is in cents per hour, and lives with its project in `src/projects.js`.
- No amount is negative. A correction is an entry of its own.
- Nothing computes with the text of an amount.
