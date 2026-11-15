# Game Work Workflow

The work workflow is generic ([Work Workflow](../tickets-workflow/work-workflow.md)); this memory holds what its terms mean when the product is a game.

## Terms

- The user is the player. A ticket addresses the player as you: "when you enter the hall, it shows no title".
- A text the player reads speaks the game's own words, never the workspace's internal terms.
- A Why names the game design law it serves ([Game Design Laws](game-design-laws.md)).
- The seeded scenarios a bug's trace tries first are the devbox's ([Devbox](devbox.md)).
- The extras that make a game special land in their epic and phase like any other work. They are not essential, but a game without them falls flat, so they are never only for after the release.

## Intake

- Playtest feedback gets its playtest file first, kept by the conductor, then its units go through intake ([Playtest Files](playtest-files.md)).
- While a version stabilizes, anything new waits for its epic ([Stabilize Before Adding](stabilize-before-adding.md)).

## Design Ticket Types

A game's design work before Pre-Alpha is tracked in two types of its own, on top of [Work Tracking](../tickets-workflow/work-tracking.md#types). Both carry the sections of a Debt ticket ([Ticket Template](../tickets-workflow/ticket-template.md#sections-per-type)).

- Lore, in `lore`, prefix `LORE`: the design of the world and its story. Its outcome is a decided lore doc.
- Game, in `game`, prefix `GAME`: the design of the game. Its outcome is a decided feature doc and the refined feature tickets it leads to.
- A Game or Lore ticket names, in its Current Situation, each conflict between the docs and the intended design that it resolves, one per bullet.

## Phases

Each phase in full is in [Game Phases](game-phases.md).

- World Building - the world's framework, in Lore tickets.
- Game Design - the world translated into levels and features, in docs and Game tickets.
- Pre-Alpha - functionally complete.
- Alpha - complete and polished everywhere.
- Beta - external, controlled playtesters.
- Release - 1.0 going out.
- Aftercare - what breaks fixed fast.
- Post-Release - the public's feedback, for as long as the game lives.

## Related

- [Gamedev Working Cadence](gamedev-working-cadence.md)
- [Changelog Per Version](changelog-per-version.md)
