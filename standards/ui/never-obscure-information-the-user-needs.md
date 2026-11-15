# Never Obscure Information the User Needs

Information the user acts on must reach the screen intact. Collapsing distinct states into one, or presenting choices the user can't tell apart, obscures information: a high-severity correctness problem, never a cosmetic one, and never taken lightly.

## Why

A mapper that folds a distinct status into another (expired shown as pending) makes the user act on the wrong urgency. A filter that lists same-named entities by name alone hands the user a choice that cannot be made correctly. Both are missing-information defects.

## How to apply

- A presentation map (mapper or view-model) that sends several distinct source values to one target is suspect. Confirm each collapse is genuinely equivalent; one that drops a state the user must see is a high-priority bug and a sweep across the other mappers.
- Cover every source enum value in mapper tests and assert distinct, faithful outputs.
- A control whose options share a label for distinct entities is an ambiguous choice: add a disambiguator (such as a location suffix) and flag it explicitly as ambiguous or missing information.
- When unsure, preserve the distinction over a tidier display.

## Related

- [Communicate State](communicate-state.md)
- [Realistic Test Data Variance](../tests/realistic-test-data-variance.md)
- [Test Design](../tests/test-design.md)
- [Note Issues](../behavior/note-issues.md)
