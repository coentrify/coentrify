# Work Workflow

Every piece of work takes one path: the director's words are logged, turned into tickets and refined until ready, given a go, built from the plan, checked against the Definition of Done, archived and accepted. The director's time goes to the creative side, steering, deciding and testing the product; everything between the director's words and a landed, provable change is the agents' job. Refinement should feel like play: its chores are automated step by step, by code where code can decide and by an agent's judgment where it cannot.

This policy is strict on purpose. It starts as a best guess and tightens itself: see Tightening at the end. The ticket's shape is in [Work Tracking](work-tracking.md), the agents' roles in [Agent Roles](agent-roles.md), the main session's in [The Conductor](the-conductor.md), and what changes for a game in [Game Work Workflow](../gamedev/game-work-workflow.md).

## Why

The director is free for judgment, taste and creation.

## Intake

Every message from the director runs through these steps before any work on it starts.

- Log it first ([Request Log](../records/request-log.md)).
- Split it into units: one unit is one thing to do, to decide or to remember. Each unit goes straight into a ticket, its log entry linked under Source; nothing sits between the log and the tickets.
- Classify every unit in the same go ([Classifying A Unit](#classifying-a-unit)).
- Turn each unit of work into a ticket that meets the Definition of Ready, or a bare line when it needs no explanation. The ticket holds the director's words parsed, never extended ([Docs Hold Only What the Director Decided](../behavior/docs-hold-only-what-the-director-decided.md)). A unit that cannot be made ready yet becomes a ticket all the same, with its question.
- A new epic gets its phase ([Work Tracking](work-tracking.md#phases)); work that does not serve the current phase's goal is filed for its own phase.
- Schedule it where the director named. Without a name: a bug or debt that hurts the current phase's goal goes on the planning page, and any other waits in its epic in a later phase ([Dev Tiers](../behavior/dev-tiers.md)); something new while a version stabilizes goes into its epic ([Stabilize Before Adding](stabilize-before-adding.md)); "for later", "after the release" and "feedback for now" land in their epic and phase, built later and never parked; anything else lands in its epic and phase, a new epic in its phase where none fits, and the report says so.
- Report: a line per ticket created, its id, its context and a title of a few words ([The Conductor](the-conductor.md#what-it-says)); the agent's own decisions stand in the ticket's Veto section.

### Classifying A Unit

- A feature, a bug, a piece of debt, a piece of docs work, a spike or an epic is work.
- An undecided idea becomes a ticket in its epic, its open point under Question, unless it is a maybe to investigate now ([A Maybe Is A Trigger To Investigate](../behavior/a-maybe-is-a-trigger-to-investigate.md)). A later phase's idea gets its ticket with the director's words and little more, refined once its phase comes.
- A question for the director goes into the ticket it is about, under Question, which puts the ticket on the refine list.
- An answer to an open question is logged, moved into the docs it decides, and the question dropped.
- Feedback from someone outside the project waits for the director's review before it becomes work.
- An instruction about how to work goes to the project's docs, or into the project's standards once the director says it holds everywhere.

## Where A Finding Goes

A finding in the middle of other work is filed by its kind ([Note Issues](../behavior/note-issues.md)); every ticket follows [Work Tracking](work-tracking.md).

- Technical (smell, suppression, deprecated pattern, missing test, missing tool or process) -> a debt ticket.
- A clear bug, where the build does not do what its feature doc or spec says -> a bug ticket.
- A functional doubt, where the intended behavior itself is unclear -> a question in the ticket it is about, which the refine list shows ([Work Tracking](work-tracking.md#the-open-questions)), never a bug ticket and never a fix.
- A functional doc out of date or wrong (feature doc, spec) -> a small fix rides on the current ticket's go as a Veto line; a larger gap is a docs ticket.
- A ticket filed this way lands in the phase where it hurts the goal, a later one unless it hurts the current goal now ([Dev Tiers](../behavior/dev-tiers.md)), and stays unscheduled until the director plans it; the report names it.

## The Go

Everything needs the director's go before it is built: a feature, a bug, docs work, a spike, debt, a rework, and the main session's own small change.

- The go is given at a planning, by id, by a story's id for every ticket in it, or in one word for all that is ready, and the conductor writes its log entry into each ticket's `go` field. A story with its go waits on the planning page until the conductor assigns its builder, which puts it on the plan. The director's answer to a ticket's open question is its go as well.
- An ask is never the go: the ticket written from it goes on the planning page, and only a go and an agent put it on the plan.
- Once a ticket has its go, it is built and lands without asking again.
- A small issue in the wake of the current change is fixed in the same go ([Don't Introduce Tech Debt](../behavior/dont-introduce-tech-debt.md)).
- A small fix found in passing, outside the change's own wake, rides on the current ticket's go as a Veto line; anything bigger becomes a ticket of its own.
- The one exception sits at the end of the path: a debt ticket needs no acceptance.

## Definition Of Ready

A ticket is ready to be scheduled and built when every one of these holds. The work goes into getting the ticket right up front: a well-described ticket lands once, a vague one comes back for rounds of tweaks.

- Its name follows [Work Item Names](work-item-names.md).
- Every section of its type's set is answered, `` `-` `` for an empty one ([Ticket Template](ticket-template.md#sections-per-type)).
- What the work is and why is clear from the ticket alone, without the chat.
- Its acceptance criteria are written, each one observable ([Writing A Ticket](writing-a-ticket.md#acceptance-criteria)).
- Its premise was checked against the feature doc and the log: a bug that contradicts a fact the feature doc states is a question for the director, and between two dated words the newest wins.
- Nothing is left for an agent to make up: no number, name or look the director has not decided or seen under Veto.
- Every question that decides what gets built is answered.
- It is the smallest piece that gives an actual feature; anything larger becomes an epic with tickets under it.
- It belongs to the current phase.
- The tickets it waits on are named, each of its own story ([Work Tracking](work-tracking.md#stories)).
- It has the director's go.

## Building

A ticket with its go is built from the plan and checked against the Definition of Done. Both are in [Building A Ticket](building-a-ticket.md), the builder's page.

## Refinement

A refinement makes the current phase's tickets ready, one story from the refine list at a time, its tickets' questions together. Only the current phase is refined: the director's attention goes to what this phase needs, and a later phase refined now is refined again once things change.

- The refine list carries links alone, and the chat points to it without repeating what a ticket holds; the director works from the ticket, its questions shaped as [Work Tracking](work-tracking.md#the-open-questions) says.
- A scheme, a mechanic or an idea grown big enough to discuss gets a ticket of its own, so a ticket never carries several at once.
- Answers go into the ticket and the feature doc, and a ticket that passes leaves the refine list by itself.
- Unblock as much as possible: a question goes into a ticket only when its choice is costly to undo or the director's words leave it genuinely open. A point whose recommended answer follows from the docs and is cheap to change is decided by the agent and written under Veto, so the ticket stays ready.
- Every Veto line is checked for what it implies: a decision that grows the work or reaches into another feature becomes a question, or a ticket of its own.
- Whatever has to be found out about how things are now is a spike for the scout, so refinement itself stays fast.
- A risk's mitigation is decided in refinement, with the director; it is never left for the builder.

## Grooming, Planning And Acceptance

The director steers, decides and accepts; the agents groom.

- Grooming runs in the background, without the director's focus: agents write the tickets in the template, check them by code and by judgment, and turn what only the director can decide into one question each.
- The checks come in two layers. Code checks the structure: every section of the type's set present, the id and its prefix, the phase current, the dependencies inside the ticket's own story. An agent checks the rest: the current situation against the product, the entry points from every state the user can arrive in, the criteria functional, single and matching the goal, the ticket against its feature doc, each fact said once, vague words, whether it can be split.
- A ticket held back from the planning page carries its reason in itself, under To Refine or as a workshop mark, so the readiness check keeps it on the refine list.
- A bug that does not reproduce at first is traced, never handed back as a question: every route to the reported state is tried, each seeded scenario, a fresh start after another save in the same session, the state a service keeps across a fresh start, and every build the director uses, since builds can write their state at different moments. Only what no run can find goes to the director.
- The planning page lists every ticket ready enough to plan, a small question that changes little allowed, links alone, each after its id. The director reads the tickets.
- A planning is a final check: go or no go. A little question can still be settled there; anything structural or undecided belongs to refinement first.
- The template keeps changing, so a ticket is checked against the latest template the moment it goes on the planning page, never in a sweep. A ticket written before a change keeps its shape until it comes up.
- Once its builder meets the Definition of Done, a ticket lands on main with its Done part. Its story reaches the accept list once every ticket in it has landed, a ticket outside a story at once. The director accepts a story, never a ticket of one: on main, by using it through from its page with the Done parts beside it, and never checks out a branch. The story's builder and branch are kept until the verdict.
- A debt ticket never waits on the accept list: the workspace's own code and tooling cannot be checked by using the product, so a verdict adds a step and no check. A debt that changes what the user sees or hears is a feature or a bug by its nature and keeps the list.
- Every verdict archives the ticket and deletes its branch; an accepted story archives every ticket in it and ends its builder. The director writes findings in the chat as they come, and the conductor sorts them into new tickets in the story, each with `priority: high` and a `rework` field. Once done with findings, the director gives the story's go, which starts the rework. The story returns to the accept list once it lands, and the cycle repeats until the story is accepted. A landed ticket is never reopened.
- Work that comes back a second time gets an investigation into why its refinement missed: a spike, or a change to the standards when the cause is the workflow.
- The director's work comes down to three inboxes: the refine, the planning and the accept lists. Their order runs right to left, finishing before starting: accept what landed, then plan enough work to keep the builders working, and only then refine and brainstorm. A session to braindump or prototype has a normal priority.

## Spikes, Workshops And Experiments

Sometimes the right first step is to find out or to try something. That is fine, and it is always named as such before it starts.

- A spike finds out how something is now: its criteria are the questions it must answer, the scout works it, and its findings stand in its Done part. A ticket it informs states the facts it needs and links the spike under Source. A ticket that turns out to need finding out first gets a spike of its own under Depends On; it never changes type.
- A workshop is refinement: it is held with the director from the refine list, never from the plan, and its outcome is ready tickets, after which it is archived. Whatever needs the director's picks is a workshop and stays on the refine list.
- A proof of concept or an experiment goes on the plan like any ticket, its criteria the learnings it must bring, and stays apart from the product's code ([Prototype Mode Is Speed First](../behavior/prototype-mode-is-speed-first.md)).
- Each ends with its findings turned into tickets and refined like any other.
- Unnamed, work follows the full path.

## Tightening

This policy is a starting point. Every deviation that happens anyway is a gap in it, never a one-off: fix the work, then ask first whether it is easy enough to get wrong for a check to catch it, and file the rule change as a ticket ([Always Make No Mistakes](../behavior/always-make-no-mistakes.md)). A rule that only adds friction and catches nothing is loosened, with the director's yes. A Veto line that keeps coming back is a pattern and becomes a rule, so the Veto empties over time. The aim is to automate every step that needs no human, once it runs right by hand.
