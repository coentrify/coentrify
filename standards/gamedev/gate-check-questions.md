# Gate Check Questions

Every phase gate of a game has a few check questions, each tied to a law or a standard, that an agent answers with its reasoning. They prepare the director's call, and at `autonomous` they make it, under veto.

## Why

A gate that waits on taste stalls an agent, and a question tied to a law turns taste into reasoning that can be checked.

## How To Apply

- The questions stand on the phase page under `## Check Questions`, each with its answer and the reasoning behind it, written before the gate is called.
- The `Gate:` line stays the gate, and its questions prepare it ([Project Lifecycle](../behavior/project-lifecycle.md)).
- Below `autonomous`, the director calls the gate. At `autonomous`, the gate passes when its questions do, and the reasoning stands for the director's veto ([Creative Agency](../autonomy/creative-agency.md)).
- A game adds questions for its own laws, and leaves one out with a reason, the way its laws doc does ([Game Design Laws](game-design-laws.md)).
- The hygiene check that fails a phase page without its `Gate:` line also fails a passed phase whose questions have no answer ([Work Tracking](../tickets-workflow/work-tracking.md#phases)).
- The Prototype keeps its own questions ([Prototype Phase Template](prototype-phase-template.md)).

## Concept

- Idea: does the line promise something fun to do? ([Fun First](game-design-laws-experience.md#fun-first))
- Idea: does the game fall without each of its pillars, and is what sets it apart named? ([Unique Where It Counts](game-design-laws-own-style.md#unique-where-it-counts))
- Idea: was the engine picked from the game's needs, and below `autonomous`, by the director? ([Game Onboarding](game-onboarding.md#the-set-up))
- Gathering: does the dump hold enough to outline a start, an end and the loop between? ([Start And End](game-design-laws-progress.md#start-and-end))
- Outline: does it name the core loop to prototype? ([Loop First](game-design-laws-experience.md#loop-first))
- Outline: does every mechanic in it add value? ([Every Mechanic Matters](game-design-laws-quality.md#every-mechanic-matters))

## Design

- Lore: does the story show more than it tells? ([Show, Don't Tell](game-design-laws-story.md#show-dont-tell))
- Lore: is the message in the experience, never inserted? ([Embedded Relevance](game-design-laws-story.md#embedded-relevance))
- World Building: can the player find the way? ([Wayfinding](wayfinding.md))
- World Building: do dense and sparse, danger and safety set each other off? ([Contrast](game-design-laws-world.md#contrast))
- Gameplay: does the player want each thing before having it, and earn it? ([Desire Before Reward](game-design-laws-progress.md#desire-before-reward), [Earned Progress](game-design-laws-progress.md#earned-progress))
- Gameplay: do the systems open possibilities? ([Emergent Gameplay](game-design-laws-progress.md#emergent-gameplay))
- First Playable: is it fun, and does plain footage of it hold a viewer? ([Fun First](game-design-laws-experience.md#fun-first))
- First Playable: does each new thing land, one at a time? ([Adopt, Repeat, Confirm](game-design-laws-guidance.md#adopt-repeat-confirm-arc))
- Game Design: does the groove expand, with rewards that grow? ([Cadence](game-design-laws-progress.md#cadence))
- Game Design: how do the ratio, the composition and the synergy of the standards, the flavors, the game's own choices and its rules broken on purpose hold up, once the game is weighed? ([Rules Broken On Purpose](game-design-laws-own-style.md#rules-broken-on-purpose), [Weighing A Game](weighing-a-game.md))

## Development

- Pre-Alpha: does the player always know what is coming? ([Know What Is Coming](game-design-laws-progress.md#know-what-is-coming))
- Pre-Alpha: can the player pause and step away without a loss? ([Easy Pause](game-design-laws-experience.md#easy-pause), [AFK Safe](game-design-laws-experience.md#afk-safe))
- Alpha: is everything that goes out polished? ([Always Polished](game-design-laws-quality.md#always-polished))
- Alpha: do the senses carry one message? ([In Harmony](game-design-laws-own-style.md#in-harmony))
- Beta: do strangers find their way without being told? ([No Yellow Paint](game-design-laws-guidance.md#no-yellow-paint))
- Beta: can every play style finish the game? ([No Try Hard](game-design-laws-progress.md#no-try-hard), [Doable 100%](game-design-laws-progress.md#doable-100))

## Live

- Release: does the launch follow the strategy the game chose? ([Launch Strategy](launch-strategy.md))
- Release: is the game weighed once more, and every finding decided? ([Weighing A Game](weighing-a-game.md))
- Aftercare: does the first feedback reach intake, through its playtest file? ([Game Work Workflow](game-work-workflow.md))

## Related

- [Game Phases](game-phases.md)
- [Prototype Phase Template](prototype-phase-template.md)
- [Creative Agency](../autonomy/creative-agency.md)
- [Weighing A Game](weighing-a-game.md)
- [Project Lifecycle](../behavior/project-lifecycle.md)
