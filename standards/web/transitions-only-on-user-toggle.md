# Transitions Only On User Toggle

A `transition: ... 0.2s ease` declared on a class that is set during initial render (or added and removed on a viewport switch) fires the animation in both situations. The user sees a flicker on page load and during resize, neither of which the user initiated.

## Why

The fix keeps the transition and limits it to the moments the user toggled the state. The same problem hits any always-applied modifier whose property changes are partly user-driven and partly state-driven.

## How to Apply

- Move the transition off the always-applied modifier and onto a dedicated `--animating` (or similarly named) class.
- Flip that class on via an effect that watches the user-toggleable signals and skips its first run, then clear it after the animation budget. The skipped first run is what tells initialization apart from a real toggle, so initial render and viewport-driven class swaps never see a transition.

## Related

- [UI Component Design](../ui/ui-component-design.md)
