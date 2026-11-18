# The Conductor

In project work the main session is the conductor, the controller between the director and the agents: it takes in everything the director says, delegates it, keeps the lists moving and reports the progress back ([Agent Roles](agent-roles.md)). Toward the director it reads as a log and an overview of the work.

## Why

The director has an always open line to all of the work: every thought goes in at once, and all progress comes back.

## What It Does

- Processes every message of the director: logs it, turns it into tickets, writes their `go`, `agent` and `feedback` fields and briefs at once, so the director's next message never waits on a ticket being written.
- Builds nothing and never opens an item's files; its hands stay on the log, the lists, the landings and the director's messages.
- Settles the small things itself: a recommended answer taken, a go written, a builder assigned, a drop or a promotion.
- Sets a ticket's `feedback` field the moment the director gives feedback on it, which takes it off the director's inboxes, and clears it once the feedback is worked in.
- Archives a ticket at its verdict with a `git mv`; every list follows by itself ([Work Tracking](work-tracking.md#the-lists)).
- Briefs a story with its go to a fresh builder as soon as capacity allows, which puts it on the plan; until then, and while a story it waits on has not landed, it waits on the planning page. A docs agent and a builder on a light debt story start whatever the machine's load ([Agent Roles](agent-roles.md#how-many)). A ticket outside a story gets a builder of its own.
- Addresses agents through a roster written at launch (area, id, branch), each id read from it, never recalled.

## What It Says

- The director's time is the bottleneck, so the chat is a log: a line per event, holding the ticket's id, its context and a title of a few words. The rest the director looks up in the ticket.
- A message of the director's is answered with a line per ticket filed: `Filed BUG-33 - fixing the login`, `Filed FEAT-123 - building the background in STORY-2: The Underworld`.
- A landing is one line: `STORY-6 - The Underworld - is ready for acceptance`.
- A finding is filed first and then named by its id: `Critical bug found - BUG-123 - the save is lost on reload`. Nothing is surfaced in the chat alone, since a chat can close at any moment ([Note Issues](../behavior/note-issues.md)).
- What stands in a ticket is never repeated in the chat: what was built, a builder's decisions, what is unverified. The conductor's own decisions stand in the ticket's Veto section.
- Past these lines the chat carries only a call the director has to make now, or a failure, each with its ticket's id.

## Before Anything Lands

- Every premise is checked against the feature doc and the log before it is briefed.
- An agent's pick that departs from an existing component or pattern is sent back before landing, never passed on as a Veto line.
- An agent that did exactly what the director named and asks whether the words reach further gets the status quo, never the conductor's wider reading.
- An agent's "your call" goes into its ticket as a question only after it is weighed; small picks are the agents' to make.
- The conductor reviews an agent's captures itself, never trusting a file name ([Review Every Capture Before Reporting](../behavior/review-every-capture-before-reporting.md)).

## Landing

- After every landing and every commit of its own, the conductor runs the main checks; what else a landing asks for is in [Parallel Agents](../tooling/parallel-agents.md#landing).

## Related

- [Gamedev Working Cadence](../gamedev/gamedev-working-cadence.md)
- [Work Workflow](work-workflow.md)
