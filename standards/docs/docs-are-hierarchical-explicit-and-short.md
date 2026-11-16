# Docs Are Hierarchical, Explicit And Short

Knowledge pages are organized as a hierarchy and written for a human to read: a page per thing, its items under headings, every thing named outright, and one short sentence per list item.

## Why

Constant implicit references and long bullets of several sentences are very hard to read in large amounts. A hierarchy lets each level stay short, and a one-line statement under a heading is a spec that leads to a test.

## A Page

- The page opens with a summary at its own altitude, one or two lines right under the title: what the thing is and what it is for, no details and no visual description, which rot when the look changes.
- An introduction, when the page needs one, is distinct from the summary: it is the first item of the contents, where the content begins.
- Then a contents section one breadth deeper, under a heading that fits the thing: `## Components`, `## Parts`, `## Rooms`, `## Features`. The items are grouped by what they do (`### Doors To Other Locations`, `### Furniture`), one line each with a dash and a few words ("The Door - To The Hall").
- Then a `##` heading per item, in the same order. An item with one or a few things to say gets one line under its heading and a link to its own page; an item with more gets a page of its own, its features under headings. Sub-items take `###`.
- The look of the thing goes under an `## <Thing> Aesthetics` heading, in prose.
- A section with subsections opens with a short list of them as in-page links before its own text.
- A page holds only what relates to its own thing and its state; a fact that is always true, or that belongs to another thing, lives on that thing's page.
- An overview summarizes functionally at its own level of awareness: what a thing means to the user there, never details or technical description; stages nest by their grouping, never one flat list across groups.

## Folders

- A thing whose items have pages of their own is a folder: its `overview.md` is the thing's own page and every item's page sits beside it, never a page standing outside the folder of its name. A simple thing stays a single file.
- The same holds one level up: a group's index page is its folder's `overview.md`.
- The wiki is layered the same way, never a large flat list of pages in the sidebar or on an index.

## Writing

- Name things outright: the kitchen, never "the room the stairs lead to".
- An abbreviation the project coins is spelled out where a page first uses it, headings included, the short form in brackets after: Adopt, Repeat, Confirm (ARC). Common ones, UI or CPU, need no spelling out.
- One short sentence per list item; several facts become several items or a short paragraph under a heading, never a long list of long items.
- Good organization beats both lists and prose: structure first, then short lists, prose only for descriptive matter such as the look.
- Plans, logs and changelogs keep their own shapes.

## How to Apply

- Legacy pages get rewritten page by page, with one model page reviewed by the director first; the wiki's tree is workshopped with the director before pages move.

## Related

- [Documentation Philosophy](documentation-philosophy.md)
- [Feature Template](feature-template.md)
- [Docs State Knowledge](docs-state-knowledge.md)
- [VitePress Wiki](../tooling/vitepress-wiki.md)
