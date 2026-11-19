# Ticket Template

A ticket is one file, the single source of truth for one piece of work. This standard holds its shape. How to fill it is in [Writing A Ticket](writing-a-ticket.md), and the tracking around it in [Work Tracking](work-tracking.md).

## The Template

Its filename is the slug of its name ([Work Item Names](work-item-names.md)). It holds two routes, kept apart: the work's, from the current situation (A) to the acceptance criteria (B) with the solution between them, and the user's, the entry points where the user meets the change. Each section answers one question.

| Question | Section | Answered well when |
| --- | --- | --- |
| What is it? | the summary, under the title, no heading | what should change, in one or two plain sentences a human reads cold ([Writing A Ticket](writing-a-ticket.md)) |
| Why do we want it? | Why | a bullet per reason, what it gives the user. A law it serves is named |
| What do we need to know? | Context | the terms a new reader lacks and the relevant facts that do not change, a line each, the feature docs linked |
| How and when does the user get there? | Entry Points | a bullet per way and moment the user arrives, from every state the user can arrive in. What happens there only when it is a relevant trigger |
| How is it now? | Current Situation (A) | a bullet per fact the work changes, checked against the product, its feature doc and its history. A bug's reproduce steps, Expected and Actual |
| How is it when it is done? | Acceptance Criteria (B) | a bullet per check the director can verify by using the product ([Acceptance Criteria](writing-a-ticket.md#acceptance-criteria)) |
| How do we get there? | Solution | the strategy at the ticket's focus level, a short task per bullet, worked out before the build, never the criteria again, never code or tests |
| What will the user read? | Content, under Solution | every text that ends up in the product, exactly as it will read |
| How must it look? | Visual Quality | the ticket's own visual points. The generic ones sit in the project's visual checklist, which the Definition of Done points to |
| What did an agent decide? | Veto | a decision per bullet, each checked in refinement for what it implies |
| Can we split it, or leave something out? | Left Out | each part split off into a ticket of its own, or left out with its reason |
| What could go wrong? | Risks | each risk with its mitigation, decided in refinement: a step inside the ticket when it is small and relevant, a design risk mitigated by design say, otherwise the ticket that closes the gap. A mitigation never grows the ticket's work ([Building A Ticket](building-a-ticket.md#a-ticket-lands-right)) |
| What does it wait on? | Depends On | the tickets of its own story it waits on |
| Where did it come from? | Source | the log entries it came from, linked from the root: `/records/log/2026-10-25#_12-57` |

## Sections Per Type

Every section of a type's set stands in every ticket of that type, `` `-` `` when empty: a section left out primes the next ticket to leave it out where it matters.

| Section | Feature | Bug | Debt | Docs | Spike | Epic |
| --- | --- | --- | --- | --- | --- | --- |
| summary | yes | yes | yes | yes | yes | - |
| Goal | - | - | - | - | - | yes |
| Source | yes | yes | yes | yes | yes | yes |
| Why, Context, Current Situation, Acceptance Criteria, Solution | yes | yes | yes | yes | yes | - |
| Entry Points | yes | yes | - | yes | - | - |
| Content | yes | yes | - | - | - | - |
| Visual Quality | yes | yes | - | - | - | - |
| Veto, Left Out, Risks, Depends On | yes | yes | yes | yes | yes | - |
| Done: Proof and Veto | yes | yes | yes | yes | yes | - |

`## Question` and `## To Refine` stand only while one is open, so their presence keeps a ticket on the refine list.

```
---
id: BUG-31
epic: <epic-slug>
story: <story-slug>          (when it belongs to one)
rework: FEAT-214             (the landed ticket it redoes, from the director's findings)
phase: <phase-slug>          (epics only)
area: <area-slug>            (epics only, when it has one)
priority: high               (every ticket but an epic: high, medium, low; the director's call, medium when missing)
workshop: true               (while it needs a workshop or waits on one)
last: true                   (a ticket that closes its phase, a phase gate spike say)
long: true                   (a ticket kept past about 300 words before Done)
long-done: true              (a Done part kept past about 100 words)
go: 2026-10-23#_14-05        (the log entry of the director's go, written by the conductor)
agent: builder-1             (its plan section's name as a slug, docs-agent-1 or scout-1 say, written by the conductor)
feedback: 2026-10-23#_15-10  (while the director's feedback on it is worked in)
---

# Fix Auth Session Redirect

What should change, in one or two plain sentences.

## Goal                     (epics only, in place of the summary)
## Why
## Context
## Entry Points
## Current Situation
## Acceptance Criteria
## Solution
### Content
## Visual Quality
## Veto
## Left Out
## Risks
## Depends On
## Question                 (only while one is open)
## To Refine                (only while something is still to spec)
## Source
## Done                     (written when it lands)
### Proof
### Veto
```

## Related

- [Writing A Ticket](writing-a-ticket.md)
- [Work Tracking](work-tracking.md)
- [Work Item Names](work-item-names.md)
- [Building A Ticket](building-a-ticket.md)
