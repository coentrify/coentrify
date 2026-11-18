# Playwright Video Recording

A Playwright recording sets its video options per file, and its variants share one flow.

## Why

A recording is proof, so it has to come out sharp and whole.

## Video Options Are Per File

`test.use({ video: { mode, size } })` cannot live inside a `test.describe` block; Playwright rejects it with "Cannot use({ video }) in a describe group, because it forces a new worker". A spec file is its own worker scope, so the option works at the top of a file only.

- The default `video.size` is the viewport scaled to fit 800x800, which downscales mobile-shaped footage noticeably.
- When footage must be 1:1 sharp at several viewports, split the spec into one file per viewport (e.g. `*.mobile.spec.ts`), each with its own `test.use`, sharing one `deviceOptions(size)` helper that bundles viewport and video size.
- When sharp framing doesn't matter, leave `video.size` unset; the scaling is proportional, just not native.

## Variants Of One Take

To record the same take under another condition (dark mode, another viewport, a locale):

- Extract the take into a shared async function that takes the page, and call it from both tests rather than copy-pasting. Re-run the formatter afterwards, since extraction reflows indentation.
- Give the variant a distinct tag suffix (`@<feature>-overview-dark`) wherever output files are named after the tag, or the variant overwrites the original recording.
- Force the theme before the first navigation with `page.emulateMedia({ colorScheme: 'dark' })`, so the whole take records in it and it survives a mid-flow reload.

## Pitfalls

- Never kill a recording run mid-build and rerun it at once: `reuseExistingServer` picks up the half-built server, whose lazy chunks aren't built yet, and navigation lands on a `chrome-error://` page ([Start Playwright On A Clean Port](start-playwright-on-a-clean-port.md)). A clean run without recording is the fast way to prove the flow first.
- An overlay that renders subtitles or labels into the DOM collides with substring locators ([Substring Locator Collisions](../e2e/substring-locator-collisions.md)).

## Related

- [Reels And Video Proof](../reporting/reels-and-video-proof.md)
