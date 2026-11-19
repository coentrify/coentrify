# Overview

The Tickets Workflow standards: the work tracked in tickets.

- [Agent Roles](agent-roles.md) - the conductor runs the agents, a builder per story until its verdict, a docs agent for sweeps and queues, a scout for spikes. The number of agents follows token and machine capacity. No agent names in the docs
- [Building A Ticket](building-a-ticket.md) - the builder's page: work comes from the plan only, one ticket in flight. A ticket lands right, solved now, a follow-up only as a split. The Definition of Done: every criterion met and verified, checks green by exit code, proof in the Done part, docs synced, no new debt, own decisions under Veto, a commit of its own
- [The Builder](the-builder.md) - builds one story in a worktree of its own, ticket by ticket, until the director's verdict
- [The Conductor](the-conductor.md) - the conductor processes every message and builds nothing. Its chat reads as a log, a line per event: the ticket id, its context and a title of a few words. Whatever it surfaces is filed first, and what stands in a ticket is never repeated
- [The Done Part](the-done-part.md) - the builder's Done part: a bullet per thing the user can now do, see or hear, each with proof the director opens or does: a capture, a video, a link or where to try it. Never case ids or a tests line. Then the Veto. A long one carries a mark
- [Stabilize Before Adding](stabilize-before-adding.md) - while stabilizing, only bugs and tweaks. New things go later
- [Ticket Template](ticket-template.md) - a ticket is one file of sections that each answer one question. The sections each type carries, the front matter fields, the file layout
- [Work Item Names](work-item-names.md) - work names show type, topic and direction, in Title Case. A changed behavior is named by its end state, subject first
- [Work Tracking](work-tracking.md) - docs/development: phases and areas over epics over stories over tickets, an id per ticket kept for life, a type that never changes, every list generated from the tickets, archive at the verdict, no status field
- [Work Workflow](work-workflow.md) - log -> ticket -> grooming -> the director's go -> plan -> Definition of Done -> the director's verdict -> archive, debt excepted. Where a finding goes. Everything needs a go. Strict, self-tightening
- [Writing A Ticket](writing-a-ticket.md) - how a ticket is written: say each fact once, a summary that says what should change, a small ticket, acceptance criteria as spec lines
