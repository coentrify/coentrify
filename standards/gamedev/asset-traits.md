# Asset Traits

A trait is what the player can do with an asset, picked from this catalog the way a game picks its flavors. Each trait names the states it needs from the asset, and the law it serves.

## Why

A trait written once says what an asset must hold to deliver it, so an asset is never made without the state its use case needs.

## How To Apply

- A trait is a heading: the use case in a sentence, a `Needs:` line with the states it needs, and a `Serves:` line with its law.
- An entry names its traits on its `Traits:` line, and its `States:` line covers what they need ([Asset List Template](asset-list-template.md)).
- A game's own traits stand in `docs/assets/traits.md`, in the same shape. One that holds for other games is filed with coentrify ([File A Change With Coentrify](../behavior/file-a-change-with-coentrify.md)).

## Interactive

The player can use it, and it shows that before the player does.

Needs: hovered.

Serves: [Communicate State](game-design-laws-ui.md#communicate-state).

## Reacts To Touch

Touching it leaves a trace the player can see.

Needs: touched.

Serves: [The World Reacts](game-design-laws-world.md#the-world-reacts).

## Idle Motion

It moves a little on its own, slowly, so the world never looks paused.

Needs: idle.

Serves: [Alive World, Static Actions](game-design-laws-ui.md#alive-world-static-actions).

## Destructible

The player can break it, and the break stays.

Needs: damaged, broken.

Serves: [The World Reacts](game-design-laws-world.md#the-world-reacts).

## Enterable

The player can go inside.

Needs: open.

Serves: [Exploration Is Rewarded](game-design-laws-experience.md#exploration-is-rewarded).

## Carriable

The player can pick it up and carry it.

Needs: held.

Serves: [Friction In The World](game-design-laws-world.md#friction-in-the-world).

## Related

- [Asset Layers](asset-layers.md)
- [Asset List Template](asset-list-template.md)
- [Game Flavors](game-flavors.md)
