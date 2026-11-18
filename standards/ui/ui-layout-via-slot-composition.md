# UI Layout via Slot Composition

Layout in the shared `ui` library is slot composition through content projection. A layout or container component exposes a few generic slots (such as top, body, footer) and owns only how those regions sit; it never takes a columns template, grid-config prop or preset. Finer structure is the next layer down: a region that needs columns or sections gets a section or grid component projected into its slot, so the container never grows options for every shape.

## Why

A layout component stays generic and reusable.

## Slot Rules

- The body is always the default slot: `<ng-content />`. Named slots use an attribute selector, `<ng-content select="[slot=top]" />`, filled by the consumer as `<x slot="top">`.
- One slot stays unnamed, as the default.
- Two or more slots are usually one default (the body) plus a couple of named ones (`top`, `actions`, `footer`).
- Only when a default makes no sense (genuinely symmetric regions, such as left and right) are there two named slots and no default; in practice this is rare.

## How to Apply

- A responsive grid flows by the space available, instead of a fixed set of columns.
- A slot names a region of the component, the place where content sits: `title`, `header`, `actions`, `footer`, `top`. Whatever sits in that region goes into its slot: a chip after a card's title text, or a tooltip on it, is projected into the title slot along with the text.
- A slot never names a kind of content (`chip`, `badge`, `tooltip`, `button`): a region holds whatever the consumer puts there.
- Reuse an existing container (page, page content, card, section) before adding a new one. The routing may already provide one, so the cleanest layout is sometimes no new container at all.

## Related

- [UI Component Design](ui-component-design.md)
- [Prefer Content Projection over Props (Angular)](../angular/prefer-content-projection-over-props-angular.md)
- [UI Library Is Domain-Agnostic](ui-library-is-domain-agnostic.md)
- [UI Refactor: Preserve, Don't Redesign](ui-refactor-preserve-dont-redesign.md)
