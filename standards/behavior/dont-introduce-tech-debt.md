# Don't Introduce Tech Debt

Code you write or extend should follow the established conventions, whatever the surrounding file happens to do.

## Why

Any work should add value. Debt detracts from it.

## How To Apply

- Before extending a type, const, or file, check it against the relevant conventions (as-const + `Enum` over bare unions, one artifact per file, barrel imports). New or extended code conforms even when its neighbors don't.
- The code a change edits, the function or the scope it works in, follows the conventions, the older code in it included.
- A fix that outgrows the change is filed as debt, and the change goes on.
- A violation outside that scope, seen while reading the file, is noted as debt and left as it is ([Note Issues](note-issues.md)).
- An agent's report of a small issue in the wake of its own change (a leftover alias, a probe gone blind, a helper bypassed) is fixed in the same pass, by that agent or the next, never filed as new debt. Filing is for what is out of reach.
- A green build and passing tests do not mean no debt was added. The compiler does not enforce these conventions.
- In the tickets workflow, a ticket lands right ([Building A Ticket](../tickets-workflow/building-a-ticket.md#a-ticket-lands-right)).

## Related

- [No Magic Values](../typescript/no-magic-values.md)
- [One Artifact Per File](../typescript/one-artifact-per-file.md)
- [Barrel Imports](../typescript/barrel-imports.md)
- [Note Issues](note-issues.md)
- [General Working Rules](general-working-rules.md)
