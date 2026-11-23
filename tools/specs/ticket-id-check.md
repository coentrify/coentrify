# Ticket Id Check

A spec for a hook that refuses a commit of code or tests without a ticket's or a story's id as its scope, in a project on the tickets workflow ([Ticket Scope](../../standards/commits/commits.md#ticket-scope)).

## Where It Runs

- As the commit-msg hook, beside the commitlint, on every commit.
- It reads the message and the staged files, and refuses with a message that names the rule and the form: `feat(FEAT-123): description`.

## What It Does

- It refuses a commit that stages code or tests unless the scope of its subject is a ticket's or a story's id.
- An id is a prefix the project's tickets use, a dash and a number.
- A commit of docs alone passes with a freeform scope, as a request log entry does.
- How the project tells code and tests from docs is its own, such as by folder or by file extension.

## The Check

- A commit of code with `feat(FEAT-123): the upload retries` passes.
- A merge with `feat(STORY-1): users sign up and sign in` passes.
- A commit of code with `feat(upload): the upload retries` refuses.
- A commit of code with `FEAT-123: the upload retries` refuses, since the id stands where the type goes.
- A commit of docs alone with `docs(log): the request of the day` passes.
