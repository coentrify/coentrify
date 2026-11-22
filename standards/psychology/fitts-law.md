# Fitts's Law

The time to point at a target rises with its distance and falls with its size. It holds for targets that stand still.

## Why

A small target, such as a close icon, is hit faster and with fewer misses when its hit area is larger.

## The Evidence

- Fitts 1954, The information capacity of the human motor system in controlling the amplitude of movement, Journal of Experimental Psychology 47(6), 381-391, [doi:10.1037/h0055392](https://doi.org/10.1037/h0055392).
- MacKenzie 1992, Fitts' law as a research and design tool in human-computer interaction, Human-Computer Interaction 7(1), 91-139, [doi:10.1207/s15327051hci0701_3](https://doi.org/10.1207/s15327051hci0701_3).
- Soukoreff and MacKenzie 2004, Towards a standard for pointing device evaluation, International Journal of Human-Computer Studies 61(6), 751-789, [doi:10.1016/j.ijhcs.2004.09.001](https://doi.org/10.1016/j.ijhcs.2004.09.001).
- How solid: solid, one of the steadiest laws in human performance.

## Limits

- What counts is the area that takes the click. Padding that only looks bigger does nothing.
- A target that is easy to hit is easy to hit by accident, so its neighbors need room.
- It models targets that stand still. A control that moves misses for another reason, covered by [Spatial Memory](spatial-memory.md).

## The Laws On It

- [Mouse First](../gamedev/game-design-laws-ui.md#mouse-first) - a close icon carries a large hit area
- [Bands, Not Bullseyes](../gamedev/game-design-laws-progress.md#bands-not-bullseyes) - a hit lands in a hitbox, never on a point

## Related

- [Response Time Limits](response-time-limits.md)
- [Spatial Memory](spatial-memory.md)
