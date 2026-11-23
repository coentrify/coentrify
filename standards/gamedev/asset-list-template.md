# Asset List Template

A game keeps one list per asset type in its docs, `docs/assets/<type>.md`. A list opens with the type's blueprint, which takes the game's style, and holds an entry per asset built from it.

## Why

Assets of one kind come from one blueprint and are shown together, so the list is where a style is judged and where an agent looks before it makes another.

## The List

- It opens with `## Blueprint`: a `- Style:` line that links `style.md`, then what the type adds to the style ([Asset Layers](asset-layers.md)).
- The blueprint's lines: `- Scale:` the size of who uses it, `- Materials:`, `- Decoration:`, and `- Reference set:` or none. Its guidelines and artistic choices follow ([Blueprint First](game-design-laws-own-style.md#blueprint-first)).
- It links to where the assets are shown together ([Shown Together](game-design-laws-own-style.md#shown-together)).
- It holds an entry per asset, under its own heading, named as the game names it.
- A type gets its list the first time an asset of it is made.
- `check-assets.mjs` checks every list against its style, its blueprint and the traits of its entries ([Asset Layers](asset-layers.md#how-to-apply)).

## Every Entry

- `- For:` its role in play, in a sentence.
- `- Traits:` what the player can do with it, by name, or none ([Asset Traits](asset-traits.md)).
- `- Look:` what sets it apart within the blueprint, its silhouette first.
- `- Where:` the scenes or the areas.
- `- States:` its states by name, the ones its traits need included. Its variants and animations go with them.
- `- Files:` the source and the exported asset.

## Per Type

- Character - what it wants, how it relates to the player ([Game Design Laws: Companions](game-design-laws-companions.md)), its outfits, its voice.
- Building - its function, its district and its footprint ([Wayfinding](wayfinding.md)), its interior if it has one.
- Vehicle - its function, its speed class, its seats.
- Outfit - who wears it, how it is earned ([Earned Progress](game-design-laws-progress.md#earned-progress)), its slot.
- Decor - the areas it dresses, how densely it sits ([Contrast](game-design-laws-world.md#contrast)), and whether it moves ([Alive World, Static Actions](game-design-laws-ui.md#alive-world-static-actions)).
- Prop - what it does when touched, if anything ([The World Reacts](game-design-laws-world.md#the-world-reacts)).
- Another type takes the entry's fields, and adds what its kind needs.

## Related

- [Asset Layers](asset-layers.md)
- [Asset Traits](asset-traits.md)
- [Own Icons](own-icons.md)
- [Game Design Laws: Own Style](game-design-laws-own-style.md)
