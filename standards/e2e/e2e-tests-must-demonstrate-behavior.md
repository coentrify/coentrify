# E2E Tests Must Demonstrate Behavior

After writing an e2e test, check stills of the moments before and after the action, and confirm they show the user-visible behavior the test claims to exercise ([Reels And Video Proof](../reporting/reels-and-video-proof.md)).

## Why

A green test shows the feature working, to anyone who watches the recording.

## How To Apply

- Pick scenario data that makes the change visible. A searched term is in the seed (a row narrows or stays) or not in it (the empty state appears). Both shapes are usually worth their own test.
- Cover the opposite cases. Lookups: hit and no hit. Mutations: success and the matching error variant (4xx, 5xx). Toggles: enabled and disabled, visible in the rendered UI, in one bracketed test ([Bracket State Changes With Contrast Assertions](../tests/bracket-state-changes-with-contrast-assertions.md)).
- Wait for tick completions after an action: rely on the test runner's auto-wait (`expect(...).toBeVisible()`, `toHaveCount()`, `waitForRequest()`) over instant assertions.
- When the trigger needs an explicit confirm (search button, save button), drive that gesture. Rely on auto-submit only when the component documents it.
- Check the stills. If they don't show the change, the test is wrong however green it is, often asserting a network contract instead of the behavior. Reshape the assertions toward the visible behavior.

## Bug Found Behind Green Tests

A bug or behavior gap that surfaces while the tests are green means the suite has a gap too:

- Write a test case for the failing behavior and file the bug ticket per [Note Issues](../behavior/note-issues.md).
- The case becomes the bug's reproducing test and lands with the fix. It is never marked to fail or skipped on main ([Main Stays Green, Work Stays Clean](../commits/main-stays-green-work-stays-clean.md)).

## Related

- [Bracket State Changes With Contrast Assertions](../tests/bracket-state-changes-with-contrast-assertions.md)
- [A Bug's Test Reproduces With Real Input](../tests/a-bugs-test-reproduces-with-real-input.md)
- [Reels And Video Proof](../reporting/reels-and-video-proof.md)
