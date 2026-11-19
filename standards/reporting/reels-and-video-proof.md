# Reels And Video Proof

A reel is footage of the product in use or proof that an implementation works, recorded from code on seeded scenarios, never by hand. A still is the cheaper proof. A video earns its place when motion, sound or timing is the point.

## Why

A reel is proof that can be watched, and recorded from code it can be made again when a version needs one.

## Rules

- A reel shows what it claims. An agent cannot watch it: where it matters, it takes stills of the moments that count, from the run or from frames of the recording, and checks them. If nothing visible changes between them, the reel proves nothing, however green the run behind it was.
- A reel is a product artifact: no sudden resizes, the recording's size matches the viewport (no letterboxing or downscaling), and it ends on a complete state, never mid-transition.
- Scope matches level. Footage of one feature stays portable, with no framing for one audience. Audience framing belongs only in a reel of the whole product.
- Copy on screen stays generic, such as "the X", unless the first person is the point.

## Narration And Speech

For reels with narration or subtitles, and for any speech a TTS model generates, in a reel or in the product itself:

- Words never contradict the screen, and a claim stays true for as long as it is spoken: a step that changes the state it describes splits into a confirm step and an action step.
- The user is the subject and the simulated world is what they act in: "the user logs in to X", never "as X".
- Reading-time formulas underestimate TTS, especially outside English. When two lines collide, give them more time.
- A cheap TTS model says exactly what it reads: spell names and odd words the way they should sound in the input it gets, and keep the display text separate when the two differ.
- Generated speech is unverified until it is checked. The agent transcribes it with a tool, and brings a clip to the director when only an ear can tell, such as how a name sounds.
- Unverified speech can still ship, and is reported as unverified.

## Related

- [E2E Tests Must Demonstrate Behavior](../e2e/e2e-tests-must-demonstrate-behavior.md)
- [Per-Feature Overview Test](../e2e/per-feature-overview-test.md)
- [Captures And Reels](../gamedev/captures-and-reels.md)
- [Playwright Video Recording](../tooling/playwright-video-recording.md)
