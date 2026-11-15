# Agent Roles

In project work the main session is the conductor: it takes in everything the director says, keeps the lists moving and runs the other agents. The other roles are the builder, the docs agent and the scout. Agents go by their role; a name for an agent never enters the docs or the memory.

## Why

When the main session builds things itself while agents run, the director's messages pile up unhandled. What the director needs is every message processed at once, the lists current, and a steady stream of landed work to review; the agent count is not the goal.

## The Conductor

- Its own page is [The Conductor](the-conductor.md): what it does, what it says to the director, and what it checks before and at a landing.

## The Builder

- Its own pages are [Building A Ticket](../tickets-workflow/building-a-ticket.md) and [The Done Part](../tickets-workflow/the-done-part.md).
- Builds one story in a worktree of its own: the story's tickets in order, one in flight, a commit per ticket.
- Stays until the story's verdict: it works the director's findings in as they come back as tickets, and ends once the story is accepted.
- Never carries on into a next story and is never compacted: a next story gets a fresh builder, since the code, the docs and the Done parts hold what it needs.
- Never judges its own context: a story is sized in refinement to fit one. A builder that stops anyway is replaced by a fresh one on the same worktree, the commits and the Done parts its handover.
- Something it cannot settle under Veto goes into its ticket as a question, which puts the story on the refine list; meanwhile it builds the story's ready tickets on.
- Before each next ticket, reads its story from main with the project's plan script, never from its memory of the brief: messages wait until its turn ends, and a builder working its queue runs one long turn.
- Never waits for the conductor's merge: it cuts each next ticket from its last landed branch, keeps going and reports every landing; the conductor merges the stack in order.
- Never merges into main itself.
- Writes its Done part in its landing commit, as the Definition of Done lists; the lists and the changelog follow by themselves.
- A builder on debt takes debt that was found, never a mess another agent just made ([Main Stays Green, Work Stays Clean](main-stays-green-work-stays-clean.md)).

## The Docs Agent

- Runs only for a docs sweep or to process a backlog of tickets.
- Its queue is its plan section, its tickets' `agent` field naming it, so the director sees what is being groomed.
- Its commit passes hygiene and the wiki build, since hygiene misses a dead link.

## The Scout

- Works the spikes: how something is now, found by runs, measurements and reproductions, so the grooming stays fast.
- Writes its findings into the spike's Done part, a line per question with how it was checked.

## How Many

- The number of agents running at once follows token and devbox capacity; nothing else fixes it.
- The devbox's capacity counts only the agents that run browser suites. An agent whose checks are hygiene, types, unit and the wiki build starts whatever the machine's load: a docs agent, and a builder on a light debt story ([Work Tracking](../tickets-workflow/work-tracking.md#stories)).
- One builder per story. Stories run side by side only where the files they touch are disjoint.
- A large job, a hundred tickets say, goes to one agent with the whole queue, in the background.
- Read-only lookups the conductor can do itself are done there, without an agent.
- The suites share the director's machine ([Playwright Parallel Runs](../tooling/playwright-parallel-runs.md)); the worktrees, ports and landing scripts are in [Parallel Agents](../tooling/parallel-agents.md).

## Every Brief Says

- The ticket it works, linked; its acceptance criteria are the target ([Work Workflow](../tickets-workflow/work-workflow.md)).
- The setup commands, exact and with absolute paths.
- Never a list of memories to read in full, and never a summary of them: the eager rules and the index load by themselves, and the agent opens the memories its work touches.
- The branch only ever holds commits ready to land; a commit is never amended once made, and a fix goes in as a new commit.
- A criterion is measured once and proved from that run; a measure that cannot hold goes back to the conductor, who restates it under Veto or asks the director.
- Before each commit: hygiene, types and unit, each by its exit code ([Gate Commits on Exit Codes](gate-commits-on-exit-codes.md)).
- Run only what the change affects: the specs of every feature that uses what it touched, and the reels and captures that cross it. Never every suite at once.
- A check that needs no browser is a unit test, never an e2e case.
- Leave the change clean: what it makes unused or duplicated goes in the same commit; a small found fix rides on the ticket's go as a Veto line, anything bigger becomes a ticket.
- Every browser it runs is muted ([Silent Runs](../gamedev/silent-runs.md)).
- An agent adding use cases to a spec gets a fixed id range of its own, written in the brief and read from the specs' own ids per prefix across every spec file.
- A fact about the product's content is grepped in the docs and the log first, never recalled.
- The director's log entry is cited by the time its append printed, so the log is written before the brief goes out.
- The director's words and the conductor's own calls are kept apart in the brief, and no doc carries a marker of who said what ([Docs State Knowledge](../docs/docs-state-knowledge.md)).
- No personal data of the director's ever goes into a web request, a User-Agent included.
- Library friction gets a why-comment at its workaround and a line in the report, never a doc ([Library Feedback](../docs/library-feedback.md)).
