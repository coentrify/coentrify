# One Check For Many Canvas Clicks

When an e2e test has to click a WebGL or 2D canvas many times, resolve the canvas bounding box once and click through the mouse at coordinates.

## Why

A test with many canvas clicks stays inside its timeout, also on a loaded machine.

## How To Apply

- A locator click repeats its actionability checks on every click, which on a rendering canvas under parallel workers can take seconds each and blow the test timeout.
- Assert the canvas is visible once, read `boundingBox()`, then loop `page.mouse.click(x, y)`.
- Keep the helper in the e2e helpers folder as the one gesture helper for that canvas.

## Related

- [Implementation-Agnostic Locators](../tests/implementation-agnostic-locators.md)
