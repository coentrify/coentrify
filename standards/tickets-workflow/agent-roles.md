# Agent Roles

In project work the main session is the conductor, which runs the other agents. The other roles are the builder, the docs agent and the scout. Agents go by their role. A name for an agent never enters the docs or the standards.

## Why

Every message from the director is handled at once, while the work keeps landing.

## The Conductor

- Its own page is [The Conductor](the-conductor.md): what it does, what it says to the director, and what it checks before and at a landing.

## The Builder

- Its own page is [The Builder](the-builder.md), and how it builds a ticket is in [Building A Ticket](building-a-ticket.md) and [The Done Part](the-done-part.md).

## The Docs Agent

- Runs only for a docs sweep or to process a queue of tickets.
- A docs sweep is docs work, with its go and its plan section.
- Its grooming queue is the tickets on the refine list whose `agent` field names it, so the director sees what is being groomed.
- Its commit passes hygiene and the wiki build, since hygiene misses a dead link.

## The Scout

- Works the spikes: how something is now, found by runs, measurements and reproductions, so the grooming stays fast.
- Writes its findings into the spike's Done part, a line per question with how it was checked.

## How Many

- The number of agents running at once follows token and machine capacity. Nothing else fixes it.
- The machine's capacity counts only the agents that run browser suites. An agent whose checks are hygiene, types, unit and the wiki build starts whatever the machine's load: a docs agent, and a builder on a light debt story ([Work Tracking](work-tracking.md#stories)).
- One builder per story. Stories run side by side only where the files they touch are disjoint.
- A large job, a hundred tickets say, goes to one docs agent with the whole queue, in the background.
- Read-only lookups the conductor can do itself are done there, without an agent.
- The suites share the director's machine ([Playwright Parallel Runs](../tooling/playwright-parallel-runs.md)). The worktrees, ports and landing scripts are in [Parallel Agents](../tooling/parallel-agents.md).

## Every Brief Says

- The ticket it works, linked. Its acceptance criteria are the target ([Work Workflow](work-workflow.md)).
- The setup commands, exact and with absolute paths.
- Never a list of standards to read in full, and never a summary of them: the Core Rules and the index load by themselves, and the agent opens the standards its work touches, [The Builder](the-builder.md) and [Building A Ticket](building-a-ticket.md) among them.
- An agent adding use cases to a spec gets a fixed id range of its own, written in the brief and read from the specs' own ids per prefix across every spec file.
- The director's log entry is cited by the time its append printed, so the log is written before the brief goes out.
- The director's words and the conductor's own calls are kept apart in the brief ([Docs State Knowledge](../docs/docs-state-knowledge.md)).

## Related

- [The Conductor](the-conductor.md)
- [The Builder](the-builder.md)
- [Building A Ticket](building-a-ticket.md)
- [Work Workflow](work-workflow.md)
- [Parallel Agents](../tooling/parallel-agents.md)
- [Library Feedback](../docs/library-feedback.md)
