# Game Work Workflow

The work workflow is generic ([Work Workflow](../tickets-workflow/work-workflow.md)). This standard holds what its terms mean when the product is a game.

## Why

What is specific to a game stands in one place, and the Work Workflow stays generic.

## Terms

- The user is the player. A ticket addresses the player as you: "when you enter the hall, it shows no title".
- The seeded scenarios a bug's trace tries first are the devbox's ([Devbox](devbox.md)).
- The extras that make a game special land in their epic and phase like any other work. They are not essential, but a game without them falls flat, so they are never only for after the release.

## Intake

- Playtest feedback gets its playtest file first, kept by the conductor, then its units go through intake ([Playtest Files](../records/playtest-files.md)).
- While a version stabilizes, anything new waits for its epic ([Stabilize Before Adding](../tickets-workflow/stabilize-before-adding.md)).

## Content

- Content the director has not decided, dialog lines, names, numbers, quest wording or a song's pick, takes the agent's recommendation as long as its core message is clear, and stands under Veto, in every phase. It never waits on refinement.
- A choice under Veto decides how a part looks, sounds or counts, never that a part is left out. One that drops a part is sent back before it lands.

## Design Ticket Types

A game's work in the Design stage is tracked in two types of its own, on top of [Work Tracking](../tickets-workflow/work-tracking.md#types). Both carry the sections of a Debt ticket ([Ticket Template](../tickets-workflow/ticket-template.md#sections-per-type)).

- Lore and Game tickets end in a decided doc, so each gets the director's verdict, like a Docs ticket.
- Lore, in `lore`, prefix `LORE`: the design of the world and its story. Its outcome is a decided doc in `docs/lore/` or `docs/world/` ([Docs Folder Structure](../docs/docs-folder-structure.md#knowledge)). Lore tickets carry the Lore and World Building phases. Lore starts as soon as the ideas are processed, from Concept on: those two phases are where it is done, never where it may begin.
- Game, in `game`, prefix `GAME`: the design of the game. Its outcome is a decided feature doc and the feature tickets it leads to, refined once their phase comes. Game tickets carry the Gameplay, First Playable and Game Design phases.
- The Concept stage has no tickets, apart from its prototype's and the Lore tickets that start there. Any other idea waits in `docs/ideas/` until its phase is next ([Processing The Ideas](../tickets-workflow/processing-the-ideas.md)).
- A Game or Lore ticket names, in its Current Situation, each conflict between the docs and the intended design that it resolves, one per bullet.
- A Lore or Game ticket asks the director only what its skeleton needs to hold together. Each open point is marked skeleton or detail first. A detail takes the content rule under Veto, or waits as Content ([Content Template](content-template.md)), and the report names the details it filled.

## Phases

A game's phases sit in four stages. Each phase in full is in [Game Phases](game-phases.md).

- Concept - Idea, Gathering, Outline and Prototype: everything can change.
- Design - Lore, World Building, Gameplay, First Playable and Game Design: the game is decided.
- Development - Pre-Alpha, Alpha and Beta: the designed game is built.
- Live - Release, Aftercare and Post-Release: the game is out.

## Related

- [Gamedev Working Cadence](gamedev-working-cadence.md)
- [Changelog Per Version](../records/changelog-per-version.md)
