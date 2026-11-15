# The Done Part

The builder writes the Done part into a ticket in its landing commit: a bulleted list of what was functionally achieved, short and fast to read. The rest of the ticket is in [Writing A Ticket](writing-a-ticket.md).

- Proof holds a bullet per thing the user can now do, see or hear, a few words each, with its proof beside it.
- A proof is something the director opens or does: a capture, a video, a link to a page changed, or where to try it and the scenario that starts it. Words about tests or spec cases are never proof. "ARC added to the Laws", linked, is a whole bullet.
- A change in how something looks or moves always shows a capture, a before and after pair for a change in what is seen, a video where it moves; that is where the director looks closest.
- No spec case ids, no tests line, no checks and no parts list: those go in the builder's report and the commits. A hygiene check fails a Done part holding a spec case id.
- Past about 100 words a Done part counts as long. One kept long carries `long-done: true`, which a hygiene check requires, so its length is always a choice.
- Veto: each choice the build made that the ticket did not and the director could want undone, in a few words; a departure from a criterion is a Veto line. Placement, wording that follows the page and bookkeeping are no decisions.
- Code details stay in the commit messages.
- A spike's Proof holds its findings, a line per criterion with how it was checked.
- Commits are never listed in a ticket: every commit made for it starts with its id ([Commits](../commits/commits.md#ticket-prefix)), so `git log --grep FEAT-214` finds them.

## Related

- [Building A Ticket](building-a-ticket.md)
