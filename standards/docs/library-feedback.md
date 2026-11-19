# Library Feedback

Friction with a library never gets a doc in the project. It is surfaced to the director in the report, and a workaround in the code gets a why-comment where it sits ([Escape Hatch Comments](../code/escape-hatch-comments.md)).

## Why

Feedback on a library belongs with that library, and the director has the relationship to take it there.

## How To Apply

- The first time a friction point shows up (a missing data-testid, an unintuitive event, a bug, an API shape that forces a hack), name it in the report: the library, the friction, and the workaround if there is one.
- A workaround gets a why-comment at the code, naming the library's friction.
- Never prescribe the fix. That is the maintainer's call.
- What the friction costs the project in ongoing work is debt, a ticket of its own.
- Every brief to an agent that may hit library friction says so.

## Related

- [Work Tracking](../tickets-workflow/work-tracking.md)
