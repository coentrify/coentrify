# Regular Layered Gap Analysis

The workspace is layered in more than one dimension, and the layers drift apart unless checked. Periodically walk them, step by step, looking for inconsistencies.

## Why

Each layer rests on the one above it. A gap - a feature with no spec, a spec case with no test, a doc describing behavior the code does not have - stays invisible until it causes trouble downstream. Catching drift early is cheaper than tracing it back later. The rules drift too, and code written before a rule changed is as real a gap as a missing test.

## How to Apply

- Documentation depth: workspace -> app -> feature. Confirm each level describes the same reality.
- Build pipeline: functional doc -> spec -> e2e test -> implementation. Confirm each step lines up with the ones before and after it - every feature specced, every spec case tested, every test reflecting real behavior, nothing shipped undocumented.
- Rules against the system: the standards and conventions versus the actual codebase. Re-check that the code still meets them, and that a newly added or strengthened rule has been swept across everything that predates it.
- Walk each dimension in both directions and file the gaps as issues.

## Related

- [Feature Workflow](feature-workflow.md)
- [Note Issues](note-issues.md)
- [Code Review Compounds Into Patterns and Sweeps](code-review-compounds-into-patterns-and-sweeps.md)
