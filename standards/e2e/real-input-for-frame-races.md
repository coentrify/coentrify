# Real Input For Frame Races

A case that proves an animation starts on a click, or any handler that races a requestAnimationFrame loop, clicks with the real pointer at the element's bounding box, never with a dispatched click event.

## Why

Tests stay as close to real usage as possible, down to the timing of a click.

## How to Apply

- After real input Chromium gives the next frame priority over the timers. Angular's coalesced change detection runs in a race between a timeout and a frame; with a real click the frame wins, so a component's own frame loop runs before the new input values arrive. A dispatched event never triggers that priority, so the timer wins and the bug never shows: an entry animation can play in every reel driven by dispatched clicks and never in the app.
- When a component's frame loop reads an input that a click sets, never reset or derive state from the input not being set yet inside the loop; take the input's arrival as the start instead.
- The regression case uses the real mouse; if the target moves, read its bounding box right before the click.
- Assert the user-visible outcome, a canvas pixel at the center or a visible element, never the internal timestamp.
- Reels and helpers that dispatch events are fine for everything else; the helper that deviates says why.

## Related

- [E2E Tests Must Demonstrate Behavior](e2e-tests-must-demonstrate-behavior.md)
- [Implementation-Agnostic Assertions](../tests/implementation-agnostic-assertions.md)
