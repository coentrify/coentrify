# Review Every Capture Before Reporting

Look at each capture the pipeline produced before the report, and check it against the states list and the last feedback from testers. A capture that shows a regression is a finding, not an attachment.

## Why

A regression that sits in a picture already on the page still reaches the director, who then has to point it out. Seeded content and new art can also compose into an offensive shape. The same eyes that verify a diff verify the captures.

## How to Apply

- After a capture run, read every new image and compare it with the previous set of the same state.
- Fix what regressed before committing, or file it and say so.
- Look at what a capture shows, not only whether it matches: seeded names, colors and emblems, and every piece of new drawn art, get the question "what does this shape remind of?" A doubtful default goes to the director as a question.
- Name in the review what the picture shows (which preset, which item, which state) before it goes on a page, and check that it matches its caption and line. A conductor reviews an agent's capture the same way, never trusting its path name.
- A build warning at the close counts as a finding of the capture pass: a style budget crossed by an item's art is fixed or filed before the tag, never carried as "clean".
- Keep the list of states the captures cover next to the captures.

## Related

- [Pixel-Perfect Design Check](../ui/pixel-perfect-design-check.md)
- [Always Verify Before Reporting Done](always-verify-before-reporting-done.md)
