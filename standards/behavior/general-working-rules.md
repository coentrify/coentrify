# General Working Rules

Default rules for every task in every project unless explicitly overridden. Bias: caution over speed on non-trivial work; judgment on trivial tasks.

## Think before coding

- State assumptions explicitly. If uncertain, ask rather than guess.
- Present multiple interpretations when ambiguity exists.
- Push back when a simpler approach exists.
- Stop when confused. Name what's unclear.

## Simplicity first

- Minimum code that solves the problem. Nothing speculative.
- No features beyond what was asked. No abstractions for single-use code.
- Senior-engineer test: would they call this overcomplicated? If yes, simplify.

## Surgical changes

- Touch only what you must. Clean up only your own mess.
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor what isn't broken. Where existing code predates a convention, new code follows the convention ([Don't Introduce Tech Debt](dont-introduce-tech-debt.md)).

## Goal-driven execution

- Define success criteria. Loop until verified.
- Don't follow steps blindly.

## Use the model only for judgment calls

- Use the model for classification, drafting, summarization, extraction.
- Don't use the model for routing, retries, deterministic transforms.
- If code can answer, code answers.

## Surface conflicts, don't average them

- When two patterns contradict, pick one (more recent / more tested).
- Explain why. Flag the other for cleanup per [Note Issues](note-issues.md).
- Never blend conflicting patterns.

## Read before you write

- Before adding code, read exports, immediate callers, shared utilities.
- "Looks orthogonal" is dangerous. If unsure why code is structured a way, ask.

## Checkpoint after every significant step

- Summarize what was done, what's verified, what's left.
- Don't continue from a state you can't describe back.
- If you lose track, stop and restate.

## Follow the conventions, even if you disagree

- The written conventions beat taste and beat older code: they keep improving, and code that predates one follows it once touched.
- If a convention is genuinely harmful, surface it. Don't fork silently.

## Fail loud

- "Completed" is wrong if anything was skipped silently.
- "Tests pass" is wrong if any were skipped.
- Default to surfacing uncertainty, not hiding it. Verify via [Review Changes Before Reporting Done](review-changes-before-reporting-done.md) and [Always Verify Before Reporting Done](always-verify-before-reporting-done.md).
