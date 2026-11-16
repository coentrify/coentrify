# UI Component Design

Shared UI components encapsulate UI behavior and presentation. They hold no app-specific data, render no app-controlled behavior and expose clear extension points for the consumer.

## Pure UI

UI components own no app-specific assets (logos, illustrations), copy (including translation strings and their defaults), env values, or interactive controls the page should own (a logout button, a dialog's confirm button). Everything app-specific flows in from the consumer.

A component that pairs a UI shell with a purpose is the classic trap: a confirm dialog is a dialog (pure UI) plus a confirm action (app behavior). Keep the shell pure: the dialog renders its chrome and reserves an actions or footer slot, and the consumer projects its own buttons and owns what they do. Baking the purpose in (confirm and cancel inputs plus output emitters) drags app logic into the ui layer and makes the component less flexible.

## Prefer Content Projection, Strongly

Default to content projection. Before adding any input, for data, composition or state, check whether the variation can be expressed by what the consumer projects; it almost always can. The component reserves space and styles it, and the consumer fills it. The component never renders a button on the page's behalf, even when it has a matching output.

Slots name regions ([UI Layout via Slot Composition](ui-layout-via-slot-composition.md)). Some reusable ones:

- `header` - the component's top region, holding a title, badges or tabs.
- `title`, `description` - the regions for the consumer's text and whatever sits with it, a chip after a title say; the component owns their layout and typography, the consumer the content.
- `actions` - the region for the buttons the consumer owns (save, cancel, close).

## Inputs as Fallback

When projection genuinely can't model the variation (a boolean that only changes styling, like `isDisabled`), use a typed input. Nothing app-specific is imported inside the shared lib. The component owns the visual treatment of each input value, and the consumer decides when each applies.

## Styling Uses Strict BEM

Component CSS follows strict BEM: `block`, `block__element`, `block--modifier`, `block__element--modifier`. Each component owns only its own block: never reach into another component's BEM tree, style descendants by tag or let selectors cascade across components.

A feature's style applies to the feature alone: elements outside it, a media player or an action bar, keep their own look.

## Related

- [Prefer Content Projection over Props (Angular)](../angular/prefer-content-projection-over-props-angular.md)
