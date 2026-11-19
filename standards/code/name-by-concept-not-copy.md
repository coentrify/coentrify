# Name By Concept, Not Copy

Identifiers carry the generic concept they represent, never the specific UI copy, translation, or content they happen to hold. A tab helper is `ordersTab`, never a name spelled from its label, even when the label is in the UI's own language. The label string is content and keeps its language. The identifier is code and stays generic English.

## Why

Naming by concept keeps the code stable while the copy is free to move.

## How To Apply

- Name the identifier for what it represents in generic English: `ordersTab`, `SETTINGS_TAB`, `notesLabel`.
- Keep the literal copy as the string value it points at: `tab(page, '<label in the UI language>')`.
- Applies everywhere a name is chosen: consts, locals, params, helpers, and test fixtures.
- Prefer a lint rule or a sweep over catching this by eye in review.

## Related

- [No Abbreviated Names](no-abbreviated-names.md)
- [Use US English Everywhere](../behavior/use-us-english-everywhere.md)
- [Pre-empt Recurring Code-Review Nits](pre-empt-recurring-code-review-nits.md)
