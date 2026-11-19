# Transitions Only On User Toggle

A transition lives on a class that is set only when the user toggles. Initial render and a viewport switch never animate.

## Why

An animation plays only for what the user did.

## How To Apply

- Move the transition off the always-applied modifier and onto a dedicated `--animating` (or similarly named) class.
- Set that class from a watcher on the user-toggleable state that skips its first run, such as an Angular `effect()` over the toggle signals, then clear it after the transition's duration.
- Apply the same split to any always-applied modifier whose property changes are partly user-driven and partly state-driven.
- A `transition: ... 0.2s ease` on a class that is set during initial render, or added and removed on a viewport switch, fires in both situations. The user sees a flicker on page load and during resize, neither of which the user initiated.
- The skipped first run tells initialization apart from a real toggle, so initial render and viewport-driven class swaps never see a transition.

## Related

- [UI Component Design](../ui/ui-component-design.md)
