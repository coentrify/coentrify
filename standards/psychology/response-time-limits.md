# Response Time Limits

Under about a tenth of a second, a response feels like the direct result of the action. Under about a second, the train of thought holds. Past about ten seconds, attention drifts.

## Why

An action answered at once feels like the player's own, and a wait the player can see the end of breaks nothing.

## The Evidence

- Miller 1968, Response time in man-computer conversational transactions, AFIPS Fall Joint Computer Conference, 267-277, [doi:10.1145/1476589.1476628](https://doi.org/10.1145/1476589.1476628).
- Card, Moran and Newell 1983, The Psychology of Human-Computer Interaction, Lawrence Erlbaum. A perceptual cycle of about 100 milliseconds.
- Nielsen 1993, Usability Engineering, Academic Press, chapter 5. The three limits as design rules.
- Jota, Ng, Dietz and Wigdor 2013, How fast is fast enough?, CHI, 2291-2300, [doi:10.1145/2470654.2481317](https://doi.org/10.1145/2470654.2481317). For direct touch, delays far below a tenth of a second still mattered.
- Claypool and Claypool 2006, Latency and player actions in online games, Communications of the ACM 49(11), 40-45, [doi:10.1145/1167838.1167860](https://doi.org/10.1145/1167838.1167860).
- How solid: the limits are long-held design rules, from experience more than experiment.

## Limits

- A tenth of a second is not instant for fast action, where tens of milliseconds count.
- The limits grade a wait: feedback past a second, progress and a way out past ten. They never call every wait a failure.
- Acting on press makes nothing respond faster. For an ordinary menu, the web's accessibility rules ask for action on release, or an undo (WCAG 2.2, criterion 2.5.2).

## The Laws On It

- [Alive App, Static Actions](../gamedev/game-design-laws-ui.md#alive-app-static-actions) - actions are instant
- [Never Wait](../gamedev/game-design-laws-experience.md#never-wait) - an unavoidable wait is filled
- [Mouse First](../gamedev/game-design-laws-ui.md#mouse-first) - a click acts on the press

## Related

- [Fitts's Law](fitts-law.md)
- [Flow](flow.md)
