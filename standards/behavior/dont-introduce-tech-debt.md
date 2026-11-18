# Don't Introduce Tech Debt

Code you write or extend should follow the established conventions, whatever the surrounding file happens to do.

## Why

Any work should add value. Debt detracts from it.

## How to Apply

- Before extending a type, const, or file, check it against the relevant conventions (as-const + `Enum` over bare unions, one artifact per file, barrel imports). New or extended code conforms even when its neighbors don't.
- When the file you must touch already violates a convention: conform it in place if the fix is cheap and in scope; otherwise flag it as tech debt and continue.
- An agent's report of a small issue in the wake of its own change (a leftover alias, a probe gone blind, a helper bypassed) is fixed in the same go, by that agent or the next, never filed as new debt; filing is for what is genuinely out of reach.
- A green build and passing tests do not mean no debt was added; the compiler does not enforce these conventions.
- In the tickets workflow, a ticket lands right ([Building A Ticket](../tickets-workflow/building-a-ticket.md#a-ticket-lands-right)).

## Related

- [No Magic Values](../typescript/no-magic-values.md)
- [One Artifact Per File](../typescript/one-artifact-per-file.md)
- [Barrel Imports](../typescript/barrel-imports.md)
- [Note Issues](note-issues.md)
- [General Working Rules](general-working-rules.md)
