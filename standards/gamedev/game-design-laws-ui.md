# Game Design Laws: UI

Laws about what the player sees and touches. The index and the way a game uses them are in [Game Design Laws](game-design-laws.md).

## Communicate State

Always communicate state and interaction ([Communicate State](../ui/communicate-state.md)). What can be clicked reacts to hovering, what is disabled looks disabled yet stays readable, and what changed shows it. A cap is a gate: whatever is capped shows disabled with the cap explained in the tooltip, never hidden, and every cap needs a good reason, otherwise a better solution.

## Alive App, Static Actions

The app feels alive: something is always moving on screen, things happen. Actions feel static: each action is just there. No idle animations on buttons, no slow bubble-up animations on modals or pop-ups that hold a secondary action, because those make the player wait again. The player stays in control.

## No Hard Edges

No sharp edge exists anywhere unless it is necessary. Every panel, button, row and box has rounded corners, and so does everything the scenes draw, a screen on a wall included. A corner stays sharp only when the thing itself would read wrong rounded.

## Glow In Contrast

A glow always takes a color that contrasts the text it wraps. Light text glows in color, colored text glows dark.

## No Layout Shifts

Controls never move. A button stays where it is while the player acts, so two quick upgrades land where they were aimed. A form keeps every row it can have: a row that does not apply shows grayed out, never left out.

## Same Trigger Both Ways

What opens an interaction closes it. A menu that opens on Escape closes on Escape. A key that opens an inventory never does something else when it is pressed again while the inventory is open; that is easy on expectations.

## Say What Is Wrong

A warning says what is wrong. A warning sign alone leaves the player fishing for what is going on, so every warning carries its reason, and a supported choice is never warned about.

## Mouse First

Applies to a PC game. The game plays best on a mouse and its wheel, the way most gamers play; a trackpad is taken into account for accessibility, never at the mouse's cost.

- every notch of a wheel moves a list by one step, at once, however fast the wheel turns
- a trackpad's small movements add up to a step, so a list stays usable on one
- a close icon carries a lot of padding: a bigger button is easier to click
- every click in the game acts on the press, never waiting for the release, so it feels snappier

## Related

- [Game Design Laws: Experience](game-design-laws-experience.md)
- [Game Design Laws: Progress](game-design-laws-progress.md)
- [Game Design Laws: Story](game-design-laws-story.md)
- [Game Design Laws: World](game-design-laws-world.md)
