# E2E Tests Must Demonstrate Behavior

A passing e2e test is not enough. After writing one, replay the recording and confirm it shows the user-visible behavior the test claims to exercise. A video where nothing changes on screen usually means the test asserts a network contract instead of the behavior and needs reframing.

## Why

A green test that doesn't show the feature working is a worse signal than a red one: it gives false confidence, and anyone watching the recordings, demos included, cannot tell whether the feature works.

## How to apply

- Pick scenario data that makes the change visible. A searched term is in the seed (a row narrows or stays) or not in it (the empty state appears); both shapes are usually worth their own test.
- Cover the contrast cases. Lookups: hit and no hit. Mutations: success and the matching error variant (4xx, 5xx). Toggles: enabled and disabled, visible in the rendered UI.
- Wait for tick completions after an action: rely on the test runner's auto-wait (`expect(...).toBeVisible()`, `toHaveCount()`, `waitForRequest()`) over instant assertions.
- When the trigger needs an explicit confirm (search button, save button), drive that gesture; rely on auto-submit only when the component documents it.
- Watch the video. If it doesn't show the change, the test is wrong however green it is; reshape the assertions toward the visible behavior.

## Bug found behind green tests

A bug or behavior gap that surfaces while the tests are green means the suite has a gap too:

- Write a test case for the failing behavior and file the bug ticket per [Note Issues](../behavior/note-issues.md).
- The case becomes the bug's reproducing test and lands with the fix; it is never marked to fail or skipped on main ([Main Stays Green, Work Stays Clean](../commits/main-stays-green-work-stays-clean.md)).
