# The E2E Suite

- `npm run e2e` runs every spec.
- `suite()` in `support/suite.cjs` opens the shop before each case, and hands out the page.
- `useScenario(page, name)` in `support/scenario.cjs` switches the mock of the shop API to a scenario: `default`, `empty` or `offline`.
