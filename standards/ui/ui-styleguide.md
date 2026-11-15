# UI Styleguide

Every workspace with a ui layer carries a styleguide: one place to check
all the ui components quickly, the way a component library's site does
(Vuetify, Bootstrap). It exists for separation of concerns: ui components
get made apart from the feature implementation and judged on their own.

Per component it shows at least:

- The name
- A description of what it is: a dumb component, agnostic of the feature
  it serves, with no business logic
- The main variants at a glance
- A testbox, a playground to set each variant and try odd combinations,
  to spot complexities and edge cases

The tooling is picked per workspace: Storybook, a gallery route in the
app, a sandbox widget in the wiki. A data variant, like API
documentation (what is saved, what the scenarios are exactly), is the
later companion.

## Why

A component judged through its feature hides its edges, because the
feature only ever reaches a few combinations. Shown alone with every
variant and a testbox, the component gets judged as a component.

## How to apply

- Every ui component gets its page as it is built; a new variant lands
  with its entry.
- A complex dynamic piece, such as a canvas scene or a face, gets a page
  too, so it is judged and played with apart from its context first.
- The description stays feature-agnostic; one that needs the feature to
  make sense means the component is not dumb enough.
- Start the styleguide the moment a component is too complex to judge
  inside its feature; it tends to be overdue by then.
- The canvas is the app: load the app's global styles, palette, theme
  defaults and root rem into the preview, and give it the app's own
  background; a story on a bare canvas looks broken even when the
  component is fine.
- Verify a styleguide by a sweep, never by clicking around: a Playwright
  probe reads the story index, screenshots every story's iframe and tiles
  the shots into contact sheets to review.
- A story that shows nothing on its own, such as a one-shot animation or
  a closed pop-up, gets a version that shows its thing, with a play
  function or a repeating render.

## Related

- [App-Shield](../architecture/app-shield.md)
- [UI Component Design](ui-component-design.md)
- [Workspace Suite](../docs/workspace-suite.md)
- [Test Design](../tests/test-design.md)
