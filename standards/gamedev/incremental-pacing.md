# Incremental Pacing

Pacing is a game mechanic of its own. Every level gets a pacing doc under a pacing folder in the docs that mirrors the level's configuration: the currency, the goal and its size, the unlock gates, the tiers of producers with cost, output and what opens and reveals them, the upgrade lines with cost and effect, the hints per progress, the odds of encounters. The doc and the configuration change together.

## Why

The director tunes a level's pacing from the doc, without reading code.

## How to Apply

- A table per level makes the curve visible at a glance, the tiers comparable and the gaps findable.
- Names of producers, upgrades, tiers, hints and units are content: the agent fills them in without asking, records them in the pacing doc and names them in the report for a veto. Level names never travel between projects.
- A new level gets a pacing proposal in the doc before its build. The build mirrors the doc.
- An unlock gate is written as a rule the player can feel, such as the next producer after the second upgrade, with the reason next to it.
- A getting-used period sits between a new mechanic and the next: a few dozen clicks with the stronger click before anything runs on its own.
- Names within one family never contain each other.

## Related

- [Substring Locator Collisions](../e2e/substring-locator-collisions.md)
- [Flag Every Addition of Your Own](../behavior/flag-every-addition-of-your-own.md)
- [Feature Template](../docs/feature-template.md)
