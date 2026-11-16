# Code Based Sound

A game's sound starts code based: every effect and every bed is generated in the page, nothing is loaded, and the mix stays soft. A recorded file is a placeholder to replace, and a music library comes only when the code based set visibly falls short.

## Why

Generated sound ships with the code, records cleanly into the reels, and is tuned by changing a number. Playtest feedback on sound asks for softer, lower and more varied, never for louder, and a soft default is cheaper to raise than an intense one is to live down.

## How to Apply

- A low master volume; beds low and present, never carrying the scene.
- Every repeated sound varies a bit in pitch and length so it never drills in under an autoclicker.
- A layer belongs to a scene: it starts with the scene and stops when the scene leaves; waking the audio context never restarts another scene's layer.
- A sound heard through something keeps only the lows; a hit is a thump, not a click.
- A living thing has a pulse: a heartbeat or a slow swell that grows with the progression, calm enough for an adult to listen to for an hour.
- The agent cannot listen, so a new layer's levels are measured, never guessed:
  - A throwaway probe spec taps an analyzer onto everything reaching the speakers and reads the loudness against a sound the director already knows (another scene's bed, a click).
  - The reel's track is checked per half second.
  - A level worked out on paper misleads, since filtered soft noise has little energy up high.
  - A probe reads a sound's peak only when the mix was silent before it: a long recording, such as six seconds of applause, bleeds into the next reading and calibrates the wrong sound. Silence the scene's own random sounds and beds first, and wait for silence between readings.

## Related

- [Captures And Reels](captures-and-reels.md)
- [Defer Tooling Until The Cost Shows Up](../tooling/defer-tooling-until-the-cost-shows-up.md)
