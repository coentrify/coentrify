# The Builder

The builder builds one story in a worktree of its own, ticket by ticket, until the director's verdict on the story, or its merge for a debt story. How it builds a ticket is in [Building A Ticket](building-a-ticket.md).

## Why

A story is built whole by one agent, whose context holds that story alone.

## How To Apply

- Builds one story in a worktree of its own: the story's tickets in order, one in flight, each ticket squashed into one commit of its own.
- Stays until the story's verdict: it works the director's findings in as they come back as tickets, and ends once the story is accepted. A debt story gets no verdict, so its builder ends at the merge.
- Never carries on into a next story and is never compacted: a next story gets a fresh builder, since the code, the docs and the Done parts hold what it needs.
- Never judges its own context: a story is sized in refinement to fit one. A builder that stops anyway is replaced by a fresh one on the same worktree, the commits and the Done parts its handover.
- While one of its tickets waits on a question ([Building A Ticket](building-a-ticket.md#building)), it reports the question to its conductor and builds the story's ready tickets on.
- Builds the story's tickets on one branch, each next ticket on its own last finished one, keeps going and reports every ticket it finishes. Once the story is built, it rebases onto main and runs the main checks green, and the conductor only merges ([Parallel Agents](../tooling/parallel-agents.md#landing)).
- The stack never falls far behind main: it is rebased onto main after each commit, so a conflict stays small ([Parallel Agents](../tooling/parallel-agents.md)).
- Never merges into main itself.
- A criterion is measured once and proved from that run. A measure that cannot hold goes back to the conductor, who restates it under Veto or asks the director.
- A fact about the product's content is grepped in the docs and the log first, never recalled.
- A builder on debt takes debt that was found, never a mess another agent just made ([Main Stays Green, Work Stays Clean](../commits/main-stays-green-work-stays-clean.md)).

## Related

- [Agent Roles](agent-roles.md)
- [Building A Ticket](building-a-ticket.md)
- [The Done Part](the-done-part.md)
- [Parallel Agents](../tooling/parallel-agents.md)
