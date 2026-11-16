# Canvas Clicks by Coordinates

When an e2e test has to click a WebGL or 2D canvas many times, resolve the canvas bounding box once and click through the mouse at coordinates.

## Why

The locator click repeats actionability checks per click, which on a rendering canvas under parallel workers can take seconds each and blow the test timeout.

## How to Apply

- Assert the canvas is visible once, read `boundingBox()`, then loop `page.mouse.click(x, y)`.
- Keep the helper in the e2e helpers folder as the one gesture helper for that canvas.

## Related

- [Implementation-Agnostic Locators](../tests/implementation-agnostic-locators.md)
