# Asset Layers

A game's assets are decided in layers, the way a feature goes from its spec to its use cases, its specs and its code: the style, the blueprint of a type, the traits of an asset, its spec and its files. Each layer takes what the layer above decided, and adds only its own.

## Why

Assets made one prompt at a time differ in style and in scale. Decided in layers, they share their choices and fit together, and one style connects them all.

## The Layers

- The style - the look of the whole game, in `docs/assets/style.md`, set by the style sample ([Game Phases: Design](game-phases-design.md#first-playable)). Every list links it.
- The blueprint - what a type adds to the style, at the head of its list ([Blueprint First](game-design-laws-own-style.md#blueprint-first)).
- The traits - what the player can do with an asset, picked from a catalog, like the use cases of a feature ([Asset Traits](asset-traits.md)).
- The spec - the states, the animations and the sounds of an asset, which cover what its traits need.
- The files - the asset itself, made from all of the above.

## The Style

- Realism - from cartoony to realistic.
- Detail - from low poly or few pixels to high detail.
- Palette - the colors, from bright to muted.
- Materials - the material language the assets share.
- Light - how the world is lit.
- References - what the style draws on, and the style sample.

## How To Apply

- A choice belongs on the highest layer it holds for. A blueprint never repeats the style, and an entry never repeats its blueprint.
- The instruction that makes an asset, a prompt or a brief, is written from its layers: the style, the blueprint, the traits, and the qualities and characteristics it aims for, focused on that one asset.
- A layer can be picked from flavors, where flavors for it exist ([Game Flavors](game-flavors.md)).
- A blueprint can draw on a reference set, such as the buildings of one real town ([References Stay References](game-design-laws-own-style.md#references-stay-references)).
- `node node_modules/coentrify/src/tools/scripts/check-assets.mjs` checks the chain: the style fills its fields, every list links it and fills its blueprint, every trait exists, and every entry's states cover its traits.

## Related

- [Asset List Template](asset-list-template.md)
- [Asset Traits](asset-traits.md)
- [Blueprint First](game-design-laws-own-style.md#blueprint-first)
- [Game Flavors](game-flavors.md)
