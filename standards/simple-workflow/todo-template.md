# Todo Template

Workspace-level `docs/todo.md` uses a fixed shape.

## Purpose

Flat list of concrete follow-ups and cleanups that fall out of larger work. Things land here before they become a feature, a priority on the roadmap, or get tackled directly.

## Sections

- Title: `# Todo`.
- Flat dash list of one-liner items. No overview list - the file is already an overview.

## Item shape

- Default: a single-line task. Reference a file or doc inline with backticks or a link when useful.
- No periods on bullet items.
- Strip items as soon as they're done; git history preserves what was there.
- When an item genuinely needs more explanation, promote it to a `## <task title>` subheading with a short paragraph or list underneath. Don't bloat one-liners with parenthetical context - if it doesn't fit on one line, give it its own section ([No Faux Headers In Lists](../docs/no-faux-headers-in-lists.md)).

## What doesn't belong on the todo

- User-facing bugs - [Bugs Template](bugs-template.md).
- Roadmap items - [Roadmap Template](roadmap-template.md).
- Tech-debt with no concrete next-step - `tech-debt.md`.

## Related

- [Workspace Template](../docs/workspace-template.md)
- [Documentation Philosophy](../docs/documentation-philosophy.md)
- [No Faux Headers In Lists](../docs/no-faux-headers-in-lists.md)
