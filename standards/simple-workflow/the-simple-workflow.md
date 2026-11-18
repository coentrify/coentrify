# The Simple Workflow

The work is tracked in a few flat lists, and the director asks one question: what's next?

## Why

Everything has a place to go, with light organization that stays simple.

## The Lists

- Inbox - anything goes in, as a flat list of points
- Todo - what was decided to do
- Roadmap - what was decided to do later
- Plan - the active file, with what is in flight now
- Bugs, debt and the technical roadmap - the other lists the plan pulls from

## How to Apply

- Put anything new in the inbox.
- When the director rants, extract one bullet per topic or idea.
- Move an item to the todo when the director decides to do it, or to the roadmap for later.
- Pull items from the todo into the plan.
- Pull from the bugs, the debt and the technical roadmap into the plan as well.
- Answer "what's next?" from the lists.
- Bugs and debt usually come before new features ([Dev Tiers](../behavior/dev-tiers.md)).
- The order is flexible, and depends on where the project is in its lifecycle ([Project Lifecycle](../behavior/project-lifecycle.md)).

## Where A Finding Goes

A finding in the middle of other work is filed by its kind ([Note Issues](../behavior/note-issues.md)).

- Technical (smell, suppression, deprecated pattern, missing test, missing tool or process) -> the debt list ([Technical Debt Template](technical-debt-template.md)).
- A clear bug, where the build does not do what its feature doc or spec says -> the bugs list ([Bugs Template](bugs-template.md)).
- A functional doubt, where the intended behavior itself is unclear -> the inbox, as a question for the director, never a bug and never a fix.
- A functional doc out of date or wrong -> a small fix rides along with the current work and the report names it; a larger gap goes in the inbox.

## Related

- [Todo Template](todo-template.md)
- [Plan Template](plan-template.md)
- [Roadmap Template](roadmap-template.md)
- [Bugs Template](bugs-template.md)
- [Technical Debt Template](technical-debt-template.md)
