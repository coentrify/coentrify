# Silent Runs

Every run of a game the agent starts is silent. A walk through the game, a check or a capture goes through the muted Playwright configs; the in-app browser pane plays the game's sound out loud and is never opened on a game that has sound.

## Why

The director works beside the agent, and sound from a preview an agent opened plays on until someone closes it in that agent's session, breaking the director's focus.

## How to apply

- Walk a player journey through a capture spec, its screenshots read step by step, with `CAPTURE_DIR` sending them to the scratchpad.
- Any browser the agent launches for a game takes `--mute-audio`; a new Playwright config carries it from the start.
- A preview already open on a game is stopped at once.
- The agent never starts a game session for the director to look at: the director runs the game, or checks the acceptance captures and videos.

## Related

- [Own Ports, Own Processes](../behavior/own-ports-own-processes.md)
- [Use the E2E Pipeline for Browser Probing](../e2e/use-the-e2e-pipeline-for-browser-probing.md)
- [Walk The User's Journey](../ui/walk-the-users-journey.md)
