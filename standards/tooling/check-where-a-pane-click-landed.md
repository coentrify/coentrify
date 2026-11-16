# Check Where A Pane Click Landed

A click in the browser pane that does nothing is first a question of where it landed, then a question about the app. Log the pointer's position on the page, or click the control through its reference or a script, before calling the control unresponsive.

## Why

When the pane drops its viewport emulation, the screenshot's frame no longer matches the page and a coordinate click lands off the control while the app works fine. Time then goes into a bug that is not there, and it can end up in the bugs doc.

## How to Apply

- Put a capture listener on pointerdown and click, logging clientX and clientY and the target, before trusting a coordinate click.
- After an emulated viewport, set it again or go back to the pane's own size and take a fresh screenshot before clicking by coordinates.
- A real bug hunt in the app belongs in a Playwright probe anyway.

## Related

- [Use the E2E Pipeline for Browser Probing](../e2e/use-the-e2e-pipeline-for-browser-probing.md)
- [Browser Captures Go To Disk](browser-captures-go-to-disk.md)
