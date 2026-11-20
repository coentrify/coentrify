# UI Layout Via Slot Composition

Layout in the shared `ui` library is slot composition through content projection. A layout or container component exposes a few generic slots (such as header, body, footer), owns only how those regions sit, and never takes a columns template, grid-config prop or preset.

## Why

A layout component stays generic and reusable.

## Slot Rules

- The body is the default slot, `<ng-content />`, except in the rare component where a default makes no sense (symmetric regions, such as left and right), which has two named slots and no default.
- Named slots use an attribute selector, `<ng-content select="[slot=top]" />`, filled by the consumer as `<x slot="top">`.
- Two or more slots are usually one default (the body) plus a couple of named ones (`header`, `actions`, `footer`).

## How To Apply

- A responsive grid flows by the space available, instead of a fixed set of columns.
- Finer structure is the next layer down: a region that needs columns or sections gets a section or grid component projected into its slot, so the container never grows options for every shape.
- A slot names a region of the component, the place where content sits. Some reusable ones:
  - `header`, `footer` - a pair of regions above and below the body, the header holding a title, badges or tabs.
  - `title`, `description` - the regions for the consumer's text and whatever sits with it. The component owns their layout and typography, the consumer the content.
  - `actions` - the region for the buttons the consumer owns (save, cancel, close).
  - `top`, `bottom` - the other pair above and below the body. Which pair fits depends on the component.
- Whatever sits in a region goes into its slot: a chip after a card's title text, or a tooltip on it, is projected into the title slot along with the text.
- A slot never names a kind of content (`chip`, `badge`, `tooltip`, `button`): a region holds whatever the consumer puts there.
- Reuse an existing container (page, page content, card, section) before adding a new one. The routing may already provide one, so the cleanest layout is sometimes no new container at all.

## Related

- [UI Component Design](ui-component-design.md)
- [Prefer Content Projection Over Props (Angular)](../angular/prefer-content-projection-over-props-angular.md)
- [UI Library Is Domain-Agnostic](ui-library-is-domain-agnostic.md)
- [UI Refactor: Preserve, Don't Redesign](ui-refactor-preserve-dont-redesign.md)
