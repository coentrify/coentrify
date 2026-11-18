# Commits

A commit message names the change at a glance, with a ticket's id where there is one and no attribution. A commit holds one unit a reviewer wants to see.

## Why

Names are important. A title or a summary says clearly and precisely what is inside, neither too broad nor too narrow.

## Message

The subject should be informative enough to grasp the change at a glance without opening the diff.

- A commit made for a ticket starts with the ticket's id and a colon: `FEAT-123: the blueprint glows until the plans open`. The id already reads as the ticket's name, so no other prefix or trailer is added.
- Every other commit uses Conventional Commits: `type(scope): description`, its types `feat`, `fix`, `chore`, `docs`, `refactor`, `revert`, its scope freeform (`deps`, `log`, `standards`).
- Describe the change, not the action: "add retry to the upload request", not "update service".
- The description starts with a lowercase letter; a project's commitlint accepts both forms and enforces the rest.
- Commitlint also enforces `body-max-line-length` 100. Each `-m` of `git commit -m` becomes one unwrapped body line, so split a long body across several `-m` flags; the commit-msg hook rejects the whole commit otherwise, after lint-staged has already run.

## Ticket Prefix

- Every commit made for a ticket carries its id: its code, its tests, the wiki's tooling, its landing and its archive move.
- The commit message hook refuses a commit of code or tests without a ticket's id in front.
- The main session's commits that serve no single ticket, such as the log, keep the conventional form.
- A ticket's commits are found by its id, `git log --grep FEAT-123`, never listed in the ticket.

## No Attribution

Commit messages contain only the message itself. No `Co-Authored-By` trailers, no "Generated with Claude Code", no AI attribution of any kind. The same holds for PR descriptions.

## Size

Make smaller commits, grouped by review interest. Mechanical changes can batch; complex changes get their own commit so a reviewer can find and verify them.

For migrations or refactors, batch the mechanical updates, then split out each complex case. Ask: "what would a reviewer want to look at separately?"

## Related

- [Verify Staging Before Committing](verify-staging-before-committing.md)
- [A Name Describes Its Unit](../behavior/a-name-describes-its-unit.md)
- [Work Tracking](../tickets-workflow/work-tracking.md)
