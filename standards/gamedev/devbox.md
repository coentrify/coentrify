# Devbox

Every game has a devbox: a small panel toggled by one key, open on every scene and staying open across them, whose options follow the scene. It hands out currency, rehearses an achievement or a toast, drops any rare event on the spot, loads any seeded scenario into the running save and switches levels. It ships in the playtest builds and is stripped for a release. Webdev has the same thing as mock toggles.

## Why

The agent and the director reach any state of the game quickly.

## How To Apply

- It sits in a corner out of the interface's way. Its one key follows [Same Trigger Both Ways](game-design-laws-ui.md#same-trigger-both-ways).
- The seeded scenarios live in one configuration and are the shared contract. The game itself never shortens for a test.
- The same scenarios drive the e2e cases, the captures, the reels and the devbox, so what the agent verified is what the director plays.
- A rare event gets a devbox trigger the first time it exists, and every scene's rare or slow state gets a scenario as it is built: fresh, mid-way, at the gate, at the boss.
- The release checklist names the strip.

## Related

- [E2E Mock Contract](../e2e/e2e-mock-contract.md)
- [Develop Against Mocks](../tooling/develop-against-mocks.md)
- [Game Design Laws](game-design-laws.md)
