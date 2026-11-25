# Content Template

A game keeps its decided content, the details that hang on its skeleton, in `docs/content/`, a folder per kind, such as `characters/` and `questlines/`. Each kind has an overview, and each entry a file of its own.

## Why

The lore stays the full story, readable in one go, and fifty side characters still have one place where they are found and checked before the next one is made.

## The Kinds

- The kinds are the game's own, such as characters, questlines, places and references.
- The main questline and its key people are skeleton, and stay in the lore. Side questlines and side characters are content ([Game Phases: Design](game-phases-design.md#lore)).

## The Overview

- A kind's `overview.md` opens with `## Fields`: the fields its entries carry, such as role, home, trait and voice for a character, or giver, goal, steps and reward for a questline.
- `## Entries` follows, a line per entry: its link and one line of description.

## An Entry

- An entry is a file of its own, named after it, such as `characters/the-ferryman.md`.
- It opens with its fields, a line each, then what it is in a few lines.
- `- Hangs on:` names where it hangs on the skeleton: which part of the main questline, which place, which key person.

## How To Apply

- Content waits in the dump through Lore, World Building and Gameplay, and is made from Game Design on, as the levels take it ([Processing The Ideas](../tickets-workflow/processing-the-ideas.md)).
- An entry changes freely under the content rule, the agent's recommendation under Veto ([Game Work Workflow](game-work-workflow.md#content)), while the skeleton stays stable.
- An entry never changes the skeleton. A detail that would change it goes to the director as a change to the lore.

## Related

- [Game Phases: Design](game-phases-design.md)
- [Processing The Ideas](../tickets-workflow/processing-the-ideas.md)
- [Docs Folder Structure](../docs/docs-folder-structure.md)
- [Asset List Template](asset-list-template.md)
