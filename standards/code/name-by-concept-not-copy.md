# Name by Concept, Not Copy

Identifiers carry the generic concept they represent, never the specific UI copy, translation, or content they happen to hold. A tab helper is `observationsTab`, not `observatiesTab`, even though the visible label is the Dutch "Observaties". The label string is content and keeps its language. The identifier is code and stays generic English.

## Why

Naming by concept keeps the code stable while the copy is free to move.

## How to Apply

- Name the identifier for what it represents in generic English: `observationsTab`, `DEVELOPMENT_TAB`, `notesLabel`.
- Keep the literal copy as the string value it points at: `tab(page, 'Observaties')`.
- Applies everywhere a name is chosen: consts, locals, params, helpers, and test fixtures.
- Prefer a lint rule or a sweep over catching this by eye in review.

## Related

- [No Abbreviated Names](no-abbreviated-names.md)
- [Use US English Everywhere](../behavior/use-us-english-everywhere.md)
- [Pre-empt Recurring Code-Review Nits](pre-empt-recurring-code-review-nits.md)
