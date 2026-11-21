# Commits

A commit message names the change at a glance, with a ticket's id where there is one and no attribution. A commit holds one unit a reviewer wants to see.

## Why

The history reads and searches by what each commit holds.

## Message

Name what changed, specifically, so the subject tells the change at a glance without opening the diff.

- A commit made for a ticket starts with the ticket's id and a colon: `FEAT-123: the upload retries after a dropped connection`. The id already reads as the ticket's name, so no other prefix or trailer is added.
- Every other commit uses Conventional Commits: `type(scope): description`, its types `feat`, `fix`, `chore`, `docs`, `refactor`, `revert`, its scope freeform (`deps`, `log`, `standards`).
- The description starts with a lowercase letter. A project's commitlint accepts both forms and enforces the rest.
- Commitlint also enforces `body-max-line-length` 100. Each `-m` of `git commit -m` becomes one unwrapped body line, so split a long body across several `-m` flags. The commit-msg hook rejects the whole commit otherwise, after lint-staged has already run.

## Ticket Prefix

In a project on the tickets workflow ([Work Tracking](../tickets-workflow/work-tracking.md)):

- Every commit made for a ticket carries its id: its code, its tests, the wiki's tooling, its Done part and its archive move.
- A story's merge commit carries the story's id: `STORY-1: users sign up and sign in`. A ticket outside a story merges under its own id.
- The commit message hook refuses a commit of code or tests without a ticket's or a story's id in front.
- The main session's commits that serve no single ticket, such as a [Request Log](../records/request-log.md) entry, keep the conventional form.
- A ticket's commits are found by its id, `git log --grep FEAT-123`, never listed in the ticket.

## No Attribution

Commit messages contain only the message itself. No `Co-Authored-By` trailers, no "Generated with Claude Code", no AI attribution of any kind. The same holds for PR descriptions. Where the agent adds attribution by itself, its setting switches it off, such as `"attribution": { "commit": "", "pr": "" }` in Claude Code's `.claude/settings.json`.

## Size

Make smaller commits, grouped by review interest. Mechanical changes can batch. Complex changes get their own commit so a reviewer can find and verify them.

For migrations or refactors, batch the mechanical updates, then split out each complex case. Ask: "what would a reviewer want to look at separately?"

A branch only ever holds commits ready to land. A commit is never amended once pushed, and a fix goes in as a new commit. An unpushed wrong commit is redone ([Verify Staging Before Committing](verify-staging-before-committing.md)).

## Related

- [Verify Staging Before Committing](verify-staging-before-committing.md)
- [A Name Describes Its Unit](../behavior/a-name-describes-its-unit.md)
- [Work Tracking](../tickets-workflow/work-tracking.md)
