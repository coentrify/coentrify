# Game Flavors

A flavor is a ready-made strategy for one layer of a game, such as how its characters are named. A game picks a flavor per layer, rolls one, or writes its own, on top of the standards, which stay the default ([Adopt, Configure, Override](../architecture/adopt-configure-override.md)).

## Why

A creative choice has many good answers. A strategy written down once can be picked again in any game, so no gap is filled with the average.

## The Layers

The layers run from the top down, and a layer is picked within what the layers above it decided. Each layer has a page of its own flavors.

- [Tone](game-flavors-tone.md) - the emotional register the game speaks in
- [Kind Of Play](game-flavors-kind-of-play.md) - what the player is doing at heart
- [Story Delivery](game-flavors-story-delivery.md) - how the story reaches the player
- [Protagonist](game-flavors-protagonist.md) - who the player is in the game
- [Story Structure](game-flavors-story-structure.md) - the shape of the story over the whole game
- [Plot](game-flavors-plot.md) - what the story is about at heart, after Booker
- [Choice](game-flavors-choice.md) - how much the player's decisions shape the story
- [Morality](game-flavors-morality.md) - how the game judges what the player does
- [Opening](game-flavors-opening.md) - how the game begins
- [Ending](game-flavors-ending.md) - how the game ends, and what the player is left with
- [Era](game-flavors-era.md) - when the world is set, and how true it stays to its time
- [The Secret](game-flavors-the-secret.md) - what the world's secret turns out to be, in a game built on a mystery
- [Reveal](game-flavors-reveal.md) - how the secret unfolds over the game's length
- [Conventions](game-flavors-conventions.md) - whether the game explains its own artifice
- [Death](game-flavors-death.md) - what happens when a character dies, one rule per kind of character
- [Crafting](game-flavors-crafting.md) - how making things plays, one rule per product
- [Mistakes](game-flavors-mistakes.md) - what a mistake costs the player
- [World Structure](game-flavors-world-structure.md) - how the world is laid out, and how it opens up
- [Power](game-flavors-power.md) - how the player grows stronger
- [Difficulty](game-flavors-difficulty.md) - how hard the game is, and who sets it
- [Maker Presence](game-flavors-maker-presence.md) - whether the people who made the game show in it
- [Naming](game-flavors-naming.md) - how the characters are named

## A Flavor

- A flavor is a heading on its layer's page: what it decides and how, then an `Example:` line.
- A layer's flavors are its main ones, never all there are. A game's own is an `own` pick, and the catalog grows with every sweep.
- A `Conflicts:` line names the flavors it never goes with, and a `Needs:` line the flavors it needs. Each is left out when it is empty.
- A flavor with real implications names them on a `Weighs:` line: what it gives, and what it costs. A pick weighs both.
- A cost is no verdict. Many loved games pick a flavor for its gain, and live with its cost or soften it.
- No flavor is better than another. A device proven to work is a pattern ([Game Design Patterns](game-design-patterns.md)), and a rule that holds for every game is a law ([Game Design Laws](game-design-laws.md)).
- Coentrify holds no default taste. A game's character comes from its picks ([Creative Agency](../autonomy/creative-agency.md)).

## How To Apply

- A game's picks stand in `docs/flavors.md`, one line per pick: `- Naming: Parody Names`, or `- Naming: own - ` and the game's own strategy.
- The game's own strategy can stand at a layer the catalog lacks, and the check names that layer as one to file.
- A layer that does not fit the game, such as The Secret in a game without a mystery, is left out of its doc and never rolled.
- A layer whose flavors do not conflict can hold several picks, each naming what it covers after a dash: `- Death: Respawn - the player`.
- A flavor is named by its name, never copied, the way a laws doc adopts a law.
- The doc can rule a flavor out, `- Naming: never Parody Names - ` and the reason, often from the audience profile ([Audience Profile Template](audience-profile-template.md)). A roll skips it.
- The doc can favor a flavor, `- Naming: favor Serious Names - ` and the reason. A roll names the favored flavors that fit, and the agent considers them strongly before it takes the draw.
- A layer is picked by the director, or rolled. A roll is drawn by code, since a model's random pick drifts to the most likely one: `node node_modules/coentrify/src/tools/scripts/roll-flavors.mjs roll <layer>`.
- A roll draws among the flavors that fit the picks so far. `roll-flavors.mjs check` holds the picks to their conflicts and needs, after every change to the doc.
- Once a second kind of project uses flavors, the mechanism moves to a standard they share ([Converge Only Once Proven](../architecture/converge-only-once-proven.md)).

## Extracting Flavors

- `coentrify extract flavors` sweeps the project: its request log and its decided docs ([Request Log](../records/request-log.md)).
- `coentrify extract flavors <game>` sweeps a public game, from what is public about it, as a reference ([References Stay References](game-design-laws-own-style.md#references-stay-references)).
- It names each strategy used, per layer, with the reasoning behind it.
- In a project, each one is recorded in `docs/flavors.md`, as the flavor it already is or as the game's own.
- A strategy that holds for other games and is not in the catalog is filed with coentrify as a flavor, a new layer with its first flavors, in the abstract and with made-up examples, so nothing of the game's content shows ([File A Change With Coentrify](../behavior/file-a-change-with-coentrify.md)). Running the command is the director's go to file.

## Related

- [Adopt, Configure, Override](../architecture/adopt-configure-override.md)
- [Creative Agency](../autonomy/creative-agency.md)
- [Game Design Patterns](game-design-patterns.md)
- [Game Phases: Concept](game-phases-concept.md)
