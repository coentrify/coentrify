# Game Flavors

A flavor is a ready-made strategy for one layer of a game, such as how its characters are named. A game picks a flavor per layer, rolls one, or writes its own, on top of the standards, which stay the default ([Adopt, Configure, Override](../architecture/adopt-configure-override.md)).

## Why

A creative choice has many good answers. A strategy written down once can be picked again in any game, so no gap is filled with the average.

## The Layers

The layers run from the top down, and a layer is picked within what the layers above it decided. Each layer has a page of its own flavors.

- [Naming](game-flavors-naming.md) - how the characters are named

## A Flavor

- A flavor is a heading on its layer's page: what it decides and how, then an `Example:` line.
- A `Conflicts:` line names the flavors it never goes with, and a `Needs:` line the flavors it needs. Each is left out when it is empty.
- No flavor is better than another. A device proven to work is a pattern ([Game Design Patterns](game-design-patterns.md)), and a rule that holds for every game is a law ([Game Design Laws](game-design-laws.md)).
- Coentrify holds no default taste. A game's character comes from its picks ([Creative Agency](../autonomy/creative-agency.md)).

## How To Apply

- A game's picks stand in `docs/flavors.md`, one line per pick: `- Naming: Parody Names`, or `- Naming: own - ` and the game's own strategy.
- A flavor is named by its name, never copied, the way a laws doc adopts a law.
- The doc can rule a flavor out, `- Naming: never Parody Names - ` and the reason, often from the audience profile ([Audience Profile Template](audience-profile-template.md)). A roll skips it.
- The doc can favor a flavor, `- Naming: favor Serious Names - ` and the reason. A roll names the favored flavors that fit, and the agent considers them strongly before it takes the draw.
- A layer is picked by the director, or rolled. A roll is drawn by code, since a model's random pick drifts to the most likely one: `node node_modules/coentrify/src/tools/scripts/roll-flavors.mjs roll <layer>`.
- A roll draws among the flavors that fit the picks so far. `roll-flavors.mjs check` holds the picks to their conflicts and needs, after every change to the doc.
- A game's own strategy that holds for other games is filed with coentrify as a flavor, its game specifics stripped ([File A Change With Coentrify](../behavior/file-a-change-with-coentrify.md)).
- Once a second kind of project uses flavors, the mechanism moves to a standard they share ([Converge Only Once Proven](../architecture/converge-only-once-proven.md)).

## Related

- [Adopt, Configure, Override](../architecture/adopt-configure-override.md)
- [Creative Agency](../autonomy/creative-agency.md)
- [Game Design Patterns](game-design-patterns.md)
- [Game Phases: Concept](game-phases-concept.md)
