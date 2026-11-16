# No Faux Headers In Lists

Don't use **bold label** + dash + description as a fake header inside a bullet list.

## Why

Markdown already has headers. Faking them with bold and a dash gives readers a wall of dense bullets that scan worse than real headings, and breaks the navigation (TOCs, anchors, search) real headers earn for free.

## How to Apply

- Short, scannable items: a flat dash list is correct.
- An item that is a heading-and-body pair (a label plus a sentence or more explaining it) becomes a `### Label` header with the body below as a paragraph.
- The test while drafting: if trimming an item's description would lose meaning, the item wants a header.

## Related

- [Feature Template](feature-template.md)
- [Documentation Philosophy](documentation-philosophy.md)
