# Game Design Laws: UI

Laws about what the player sees and touches. The index and the way a game uses them are in [Game Design Laws](game-design-laws.md).

## Communicate State

Always communicate state and interaction ([Communicate State](../ui/communicate-state.md)). What can be clicked reacts to hovering, what is disabled looks disabled yet stays readable, and what changed shows it. A cap is a gate: whatever is capped shows disabled with the cap explained in the tooltip, never hidden, and every cap needs a good reason, otherwise a better solution.

Rests on: [Flow](../psychology/flow.md).

## Alive World, Static Actions

The world feels alive: something always moves, slowly, never flashy. It tells the player the world is not paused: it breathes, and the player is in it, never looking at a still image. A movement that starts or stops draws the eye, so it is placed on purpose, or its pull is weighed first. Depending on the game, a setting for less motion, such as less head bob or a motion sickness mode, is worth considering. Actions feel static: each action is just there. No idle animations on buttons, no slow bubble-up animations on modals or pop-ups that hold a secondary action, because those make the player wait again. The player stays in control.

Rests on: [Motion Onset](../psychology/motion-onset.md), [Response Time Limits](../psychology/response-time-limits.md).

## No Hard Edges

No sharp edge exists anywhere unless it is necessary. Every panel, button, row and box has rounded corners, if only slightly, and so does everything the scenes draw, a screen on a wall included. In the world the law holds in a softer form: nothing real is perfectly sharp, a building's corner is worn and a plank is sanded, so a model's edges carry a slight bevel, and a hard edge sticks out. A corner stays sharp only when the thing itself would read wrong rounded. In the world that is a deliberate choice, and canon in the game: a blade, barbed wire, a spiked fence.

Rests on: [Curved Over Sharp Contours](../psychology/curved-over-sharp-contours.md).

## Glow In Contrast

A glow always takes a color that contrasts the text it wraps. Light text glows in color, colored text glows dark.

Rests on: [Luminance Contrast](../psychology/luminance-contrast.md).

## No Layout Shifts

Controls never move. A button stays where it is while the player acts, so two quick upgrades land where they were aimed. A form keeps every row it can have: a row that does not apply shows grayed out, never left out.

Rests on: [Fitts's Law](../psychology/fitts-law.md).

## Same Trigger Both Ways

What opens an interaction closes it. A menu that opens on Escape closes on Escape. A key that opens an inventory never does something else when it is pressed again while the inventory is open. That is easy on expectations.

Rests on: [Processing Fluency](../psychology/processing-fluency.md).

## Say What Is Wrong

A warning says what is wrong. A warning sign alone leaves the player fishing for what is going on, so every warning carries its reason, and a supported choice is never warned about.

Rests on: [Controllability](../psychology/controllability.md).

## Mouse First

Relevant for: PC.

The game plays best on a mouse and its wheel, the way most gamers play. A trackpad is taken into account for accessibility, never at the mouse's cost.

- Every notch of a wheel moves a list by one step, at once, however fast the wheel turns
- A trackpad's small movements add up to a step, so a list stays usable on one
- A close icon carries a lot of padding: a bigger button is easier to click
- A click in play acts on the press, never waiting for the release, so it feels snappier. A click that cannot be undone, such as deleting a save, acts on the release, so sliding off cancels it, or on a short hold, still quick for a player who is sure

Rests on: [Fitts's Law](../psychology/fitts-law.md), [Response Time Limits](../psychology/response-time-limits.md).

## Related

- [Game Design Laws: Experience](game-design-laws-experience.md)
- [Game Design Laws: Progress](game-design-laws-progress.md)
- [Game Design Laws: Story](game-design-laws-story.md)
- [Game Design Laws: Guidance](game-design-laws-guidance.md)
- [Game Design Laws: World](game-design-laws-world.md)
- [Game Design Laws: Own Style](game-design-laws-own-style.md)
- [Game Design Laws: Quality](game-design-laws-quality.md)
