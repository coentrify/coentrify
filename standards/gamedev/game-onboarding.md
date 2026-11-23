# Game Onboarding

`coentrify game` starts a game. It asks for the mode first, sets the project up, and runs the phases the way the mode says.

## Why

The mode decides who leads and who decides from the first question on, so it opens the most different paths, and comes before anything else.

## The Mode

The agent asks for the mode first, with a line per mode, and recommends `guided` ([Creative Agency](../autonomy/creative-agency.md#the-setting)).

- `manual` - the director leads and decides, and the agent processes.
- `assisted` - the director leads and decides, and the agent advises at each choice.
- `guided` - the agent asks, and the director decides.
- `autonomous` - the agent decides, and the director vetoes afterward.

## The First Question

- `autonomous` - "Give me your prompt": what the game starts from, in any shape, such as a theme, a pitch, a list of elements or a book to adapt.
- `guided` - a start prompt if the director has one, then the questions layer by layer, open ones and flavor picks, with how niche the game should be among the first ([Audience Profile Template](audience-profile-template.md)).
- `assisted` and `manual` - "What do you want?" The director leads from there.
- An input given with the command is kept for after the mode.

## The Set Up

- A folder that is not set up yet is set up the way `coentrify make no mistakes` does, with the game's defaults: the Gamedev, Psychology and Autonomy modules beside the core ones, the tickets workflow and the VitePress wiki.
- `agency` in `coentrify.json` takes the mode.
- The stack and the engine are chosen from the input and the scope, as a choice named for the veto.

## The Run

- The phases run in order, compressed to the scope, which comes from the input and is a game jam entry by default ([Game Phases](game-phases.md)).
- A choice comes from the input, the audience profile and the laws, or is picked or rolled from the flavors ([Game Flavors](game-flavors.md)).
- A gate is called on its check questions, by the director, or by the agent at `autonomous` ([Gate Check Questions](gate-check-questions.md)).
- The director can step in at any time. A new idea is the director's word, which outranks every choice of the agent's own, and a choice it conflicts with is redone ([Creative Agency](../autonomy/creative-agency.md#the-order)).
- Each phase page holds a veto list of the agent's own choices in that phase ([Flag Every Addition Of Your Own](../behavior/flag-every-addition-of-your-own.md)).
- The run ends at a playable build, with the veto lists and the gate answers in the wiki.

## Related

- [Creative Agency](../autonomy/creative-agency.md)
- [Game Phases](game-phases.md)
- [Game Flavors](game-flavors.md)
- [Gate Check Questions](gate-check-questions.md)
