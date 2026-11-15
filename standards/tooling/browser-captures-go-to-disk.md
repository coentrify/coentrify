# Browser Captures Go To Disk

A capture taken in the in-app browser (a canvas `toDataURL`, a base64
image) is written to disk by a script from the tool's saved result, never
transcribed by the agent into a command.

## Why

A base64 string transcribed by hand comes out as a corrupted PNG at best,
or as a made-up stand-in. The browser tools save a large result to a file
automatically, and a script can decode it from there without the bytes
ever entering the context.

## How to apply

- Return the base64 padded past the inline limit (a long run of spaces),
  so the result lands in a file; extract it with a regex on the base64
  alphabet and decode with node.
- Pixel art captures at native size, then nearest-neighbor upscaled with
  ffmpeg (`scale=W:H:flags=neighbor`), flattened onto the game's ground
  color when the canvas is transparent.
- Review every capture with the image reader before it lands on a page
  ([Review Every Capture Before Reporting](../behavior/review-every-capture-before-reporting.md)).
- When the project has a Playwright suite, the capture scripts there are
  the way ([Use the E2E Pipeline for Browser Probing](../e2e/use-the-e2e-pipeline-for-browser-probing.md)).

## Related

- [Captures And Reels](../gamedev/captures-and-reels.md)
- [Always Make No Mistakes](../behavior/always-make-no-mistakes.md)
