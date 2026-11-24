# Captures And Reels

The day-to-day proof of a game change is a capture or a reel from the seeded scenarios, never a hand recording. One capture script per level labels its stills by the ticket's id and writes them into the wiki's image folder, linked from the ticket's Done part. One reel script per level records highlights as segments and joins them into one video with the game's own sound.

## Why

The director can reproduce every state a capture shows.

## Captures

- A capture belongs to one ticket and is taken while that ticket is in progress, to see that what was just made looks good. It goes in the ticket's Done part ([The Done Part](../tickets-workflow/the-done-part.md)). There is no capture batch of every level at the close.
- A later ticket that changes what an earlier capture shows takes a new capture under a new file name. A capture is never retaken under its old name, which would erase the step before.
- A report that hands a visible change made outside a ticket to the director carries its picture. A ticket's picture stands in its Done part.
- Wait for the intro to settle before a still. Capture only what changed, plus a sanity check.
- Every capture is read before it goes on the page ([Review Every Capture Before Reporting](../behavior/review-every-capture-before-reporting.md)).

## Reels

- Reels are recorded on demand only, never at a version's close: with a playtest on every version the director sees the motion and sound first hand. The reels' flows still run quickly as tests, without recording.
- A segment starts from a scenario, marks its cut when the scene is on screen, records the sound, and saves both. The joiner orders the segments by recording time, since a shortened folder name loses its number.
- A level's reel runs on into the next level's opening. The changelog keeps a copy of a reel, when one is made, under the version's name.
- An edge flow worked on in the iteration goes into the level's reel or a small video of its own, so the director sees the flow that changed.

## In A Browser

- Park the mouse in a corner and hide any app frame the game draws, such as a custom title bar, before a still.
- A segment records the sound by tapping the audio graph in the page.

## How To Apply

- Suites and capture runs are muted ([Silent Runs](silent-runs.md)).
- Only the reel records sound.
- The videos stay untracked in git, the reels and the changelog's copies alike: they are heavy, and generated from the code, like a build. Ignore the video folders on day one.
- A video of a state that can no longer be made, such as a reel of a retired build, is a historical reference, worth having when looking back. A project may track it, or a store page's video, as an explicit choice, linked from a page such as the retired prototype's phase page. Git stays small, so each one is chosen.
- A still or a video is tracked only while a page shows it ([Docs Folder Structure](../docs/docs-folder-structure.md#images)).

## Related

- [Reels And Video Proof](../reporting/reels-and-video-proof.md)
- [Work Tracking](../tickets-workflow/work-tracking.md)
- [Devbox](devbox.md)
