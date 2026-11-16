# Code Review Compounds Into Patterns and Sweeps

A code-review finding is rarely a one-off. When something surfaces in review, check whether it is a pattern - it usually is - and turn the single catch into a durable defense across the codebase.

## Why

Fixing one instance and moving on leaves the same mistake elsewhere and lets it come back. Capturing the pattern once protects the whole codebase and every later session, so the review round spent on it pays off more than once.

## How to Apply

- On any finding, look for sibling instances before treating it as isolated.
- When it is a pattern:
  - Add it to the review checks so future reviews catch it - see [Pre-empt Recurring Code-Review Nits](../code/pre-empt-recurring-code-review-nits.md).
  - Write down how to do it properly as its own standard. When unsure of the correct approach, ask the user before codifying it.
  - File a sweep for the existing instances as a debt ticket, enumerated per [Sweeps Enumerate Into Tech-Debt First](sweeps-enumerate-into-tech-debt-first.md).
- Run code-review sweeps on occasion, not only when asked, to keep the codebase healthy.
- When an issue recurs that already has a rule, the rule was too weak: strengthen it ([Always Make No Mistakes](always-make-no-mistakes.md)).

## Related

- [Regular Layered Gap Analysis](regular-layered-gap-analysis.md)
- [Note Issues](note-issues.md)
