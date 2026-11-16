# Game Design Laws

Laws are short rules that hold unless there is a very good reason to break one. The generic set lives in the standards, in four parts by theme, and this standard is its index. A game's own laws and overrides stand in the game's docs.

## The Set

### Experience

The full text is in [Game Design Laws: Experience](game-design-laws-experience.md).

- [Never Wait](game-design-laws-experience.md#never-wait) - the player never waits unless continuing is technically impossible; unavoidable waiting entertains
- [Always Something To Do](game-design-laws-experience.md#always-something-to-do) - a pull short term, a dot on the horizon long term
- [Exploration Is Rewarded](game-design-laws-experience.md#exploration-is-rewarded) - looking around always finds something
- [Full Control](game-design-laws-experience.md#full-control) - nothing is decided or happens without the player
- [Respect](game-design-laws-experience.md#respect) - no dumb tutorials
- [Speedrun Ready](game-design-laws-experience.md#speedrun-ready) - a returning speedrunner has as good an experience as a first-time player
- [Once Per Save](game-design-laws-experience.md#once-per-save) - a story cutscene and a progression minigame play once per save
- [AFK Safe](game-design-laws-experience.md#afk-safe) - away without negative effect; nothing is lost and nothing auto progresses
- [Easy Pause](game-design-laws-experience.md#easy-pause) - pausing is always easy
- [Fun First](game-design-laws-experience.md#fun-first) - player experience is priority one
### Progress

The full text is in [Game Design Laws: Progress](game-design-laws-progress.md).

- [Start And End](game-design-laws-progress.md#start-and-end) - the game has both, prestige and new game plus included
- [As Long As It Is Interesting](game-design-laws-progress.md#as-long-as-it-is-interesting) - no target length
- [Doable 100%](game-design-laws-progress.md#doable-100) - no orthogonal skill demanded for completion
- [No Try Hard](game-design-laws-progress.md#no-try-hard) - every play style is supported
- [Always Polished](game-design-laws-progress.md#always-polished) - whatever exists is of the same quality
- [Earned Progress](game-design-laws-progress.md#earned-progress) - start with as little as possible and earn the rest
- [Every Mechanic Matters](game-design-laws-progress.md#every-mechanic-matters) - none is added for the sake of one more
- [Lasting Impact](game-design-laws-progress.md#lasting-impact) - what the player decides lasts
- [Emergent Gameplay](game-design-laws-progress.md#emergent-gameplay) - systems that open possibilities
- [Know What Is Coming](game-design-laws-progress.md#know-what-is-coming) - the next step and the end are always visible

### UI

The full text is in [Game Design Laws: UI](game-design-laws-ui.md).

- [Communicate State](game-design-laws-ui.md#communicate-state) - what reacts, what is disabled and what changed shows it
- [Alive App, Static Actions](game-design-laws-ui.md#alive-app-static-actions) - something always moves, actions are instant
- [No Hard Edges](game-design-laws-ui.md#no-hard-edges) - rounded corners everywhere
- [Glow In Contrast](game-design-laws-ui.md#glow-in-contrast) - a glow contrasts the text it wraps
- [No Layout Shifts](game-design-laws-ui.md#no-layout-shifts) - controls never move while the player acts
- [Same Trigger Both Ways](game-design-laws-ui.md#same-trigger-both-ways) - what opens an interaction closes it
- [Say What Is Wrong](game-design-laws-ui.md#say-what-is-wrong) - a warning carries its reason
- [Mouse First](game-design-laws-ui.md#mouse-first) - a PC game plays best on a mouse

### Story

The full text is in [Game Design Laws: Story](game-design-laws-story.md).

- [Show, Don't Tell](game-design-laws-story.md#show-dont-tell) - the player experiences it; words short and never too spot on
- [No Yellow Paint](game-design-laws-story.md#no-yellow-paint) - no steering that does the player's thinking; a hint is a context clue
- [Answer The Player's Next Question](game-design-laws-story.md#answer-the-players-next-question) - every word and number is weighed by what it means to the player
- [Worth Reading](game-design-laws-story.md#worth-reading) - a game with dialog; a missed line stays missed
- [Dialog Gives Context](game-design-laws-story.md#dialog-gives-context) - a game with dialog; dialog accompanies the screen as narrative and gives context, never instructions
- [Make Yourself](game-design-laws-story.md#make-yourself) - a game with a player character; the player can represent themselves
- [Adopt, Repeat, Confirm (ARC)](game-design-laws-story.md#adopt-repeat-confirm-arc) - a five step pattern for every new thing: awareness, trigger, adopt, repeat, confirm

## Why

The player is a human who walks the dog, answers the door, goes to sleep and continues the next day. Laws about that human, such as Easy Pause, Never Wait and AFK Safe, translate into any genre; only their concrete shape changes. A written set with director-approved exceptions stops every design talk from starting over.

## How to Apply

- A game's laws doc has three parts: the generic laws it adopts, the ones it leaves out with a reason, and its own laws and overrides in full.
- An adopted or left-out law is named by its name in this set, never copied.
- A law with a condition (a player character, a PC game, an incremental game, dialog) is adopted or left out by that condition.
- An exception is a paragraph under the law in the game's overrides, naming the feature and the reason, added only when the director affirms it.
- Check a new feature against the laws before its spec; a conflict is surfaced, never averaged.
- Feature docs link the law they lean on instead of repeating it.
- A new generic law is added to its part and to the index, in the director's wording with game specifics stripped.

## Related

- [Adopt, Configure, Override](../architecture/adopt-configure-override.md)
- [Communicate State](../ui/communicate-state.md)
- [Docs Hold Only What the Director Decided](../behavior/docs-hold-only-what-the-director-decided.md)
- [Work Workflow](../tickets-workflow/work-workflow.md)
