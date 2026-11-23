# One Check For Many Canvas Clicks

When an e2e test has to click a WebGL or 2D canvas many times, resolve the canvas bounding box once and click through the mouse at coordinates.

## Why

A test with many canvas clicks stays inside its timeout, also on a loaded machine.

## How To Apply

- Assert the canvas is visible once, read `boundingBox()`, then loop `page.mouse.click(x, y)`.
- Keep the helper in the e2e helpers folder as the one gesture helper for that canvas.
- A locator click repeats its actionability checks on every click, which on a rendering canvas under parallel workers can take seconds each and blow the test timeout.
- A case whose mechanic needs many presses within a few frames, as an autoclicker gives, dispatches them in the page, in bursts, its helper saying why. A real press costs frames on a loaded machine. A case that proves a frame race or reproduces a reported bug keeps the real pointer ([Real Input For Frame Races](real-input-for-frame-races.md), [A Bug's Test Reproduces With Real Input](../tests/a-bugs-test-reproduces-with-real-input.md)).

## Related

- [Implementation-Agnostic Locators](../tests/implementation-agnostic-locators.md)
