# Captures And Reels

The day-to-day proof of a game change is a capture or a reel from the seeded scenarios, never a hand recording. One capture script per level takes the version as a label and writes the stills into the changelog's image folder; one reel script per level records highlights as segments and joins them into one video with the game's own sound.

## Why

The director can reproduce every state a capture shows.

## Captures

- A capture belongs to one ticket and is taken while that ticket is in progress, to see that what was just made looks good; it goes in the ticket's Done part ([The Done Part](../tickets-workflow/the-done-part.md)). There is no capture batch of every level at the close.
- A later ticket that changes what an earlier capture shows takes a new capture under a new file name; a capture is never retaken under its old name, which would erase the step before.
- A report that hands a visible change to the director mid-batch carries its picture.
- Wait for the intro to settle before a still; capture only what changed, plus a sanity check.
- Every capture is read before it goes on the page ([Review Every Capture Before Reporting](../behavior/review-every-capture-before-reporting.md)).

## Reels

- Reels are recorded on demand only, never at a version's close: with a playtest on every version the director sees the motion and sound first hand. The reels' flows still run quickly as tests, without recording.
- A segment starts from a scenario, marks its cut when the scene is on screen, records the sound, and saves both; the joiner orders the segments by recording time, since a shortened folder name loses its number.
- A level's reel runs on into the next level's opening; the changelog keeps a copy under the version's name.
- An edge flow worked on in the iteration goes into the level's reel or a small video of its own, so the director sees the flow that changed.

## In A Browser

- Park the mouse in a corner and hide the window's drag bar before a still.
- A segment records the sound by tapping the audio graph in the page.

## How to Apply

- Suites and capture runs are muted ([Silent Runs](silent-runs.md)); only the reel records sound.
- The videos stay untracked in git, the reels and the changelog's copies alike, since they are heavy and change every version; only chosen ones, such as a store page's, get tracked later. Ignore the video folders on day one.

## Related

- [Reels And Video Proof](../reporting/reels-and-video-proof.md)
- [Work Tracking](../tickets-workflow/work-tracking.md)
- [Devbox](devbox.md)
