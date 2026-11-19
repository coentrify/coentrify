# Work Item Names

Every name for a piece of work - a ticket's title, a line on the plan or the roadmap, an epic - makes three things clear at a glance: the type of work, the topic, and the direction of the issue or outcome. That is the focus level a top-level list needs. Names are in Title Case.

## Why

A list of work reads at a glance.

## Per Type Of Work

- A feature reads as a goal from the user's side: `Create An Account`. It names the topic and hints at the outcome.
- A change to how something behaves names the behavior once it is done, subject first: `Welcome Screen Only Shows Once`. Its name is never the agent's action, such as `Drop The Welcome Screen's Repeats`.
- An addition leads with its verb: `Add Contact Search`.
- A fix leads with `Fix`: `Fix Auth Session Redirect` says it is a bug, names the topic and hints at what goes wrong.
- A spike leads with `Investigate`: `Investigate Multi-Role Editing`, for finding out how something is before a solution is picked.
- A phase names a step on the product's road: `Pre-Alpha`, `Alpha`, `Beta`.
- An epic names the common denominator of its tickets: `Save And Load`, `User Onboarding`, `Settings Menu`.
- A small task is named the way the director said it: `Make The Button Blue`.

## How To Apply

- One name everywhere: the ticket's title, its filename slug and every list line linking it carry the same name.
- A rename updates the file, its slug and every link in the same change.
- One line, no trailing period, no parenthetical bloat. Detail belongs in the ticket.

## Related

- [Work Tracking](work-tracking.md)
- [A Name Describes Its Unit](../behavior/a-name-describes-its-unit.md)
- [Name By Concept, Not Copy](../code/name-by-concept-not-copy.md)
