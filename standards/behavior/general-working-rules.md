# General Working Rules

Default rules for every task in every project unless explicitly overridden. Bias: caution over speed on non-trivial work; judgment on trivial tasks.

## Honest Assessments

- Be realistic rather than optimistic: flag doubts and weak spots plainly, push back once when a decision looks wrong, then accept the call.

## Use the Model Only for Judgment Calls

- Use the model for classification, drafting, summarization, extraction.
- Don't use the model for routing, retries, deterministic transforms.
- If code can answer, code answers.

## Surface Conflicts, Don't Average Them

- When two patterns contradict, pick one (more recent / more tested).
- Explain why. Flag the other for cleanup per [Note Issues](note-issues.md).
- Never blend conflicting patterns.

## Read Before You Write

- Before adding code, read exports, immediate callers, shared utilities.
- "Looks orthogonal" is dangerous. If unsure why code is structured a way, ask.

## Follow the Conventions, Even If You Disagree

- The written conventions beat taste and beat older code: they keep improving, and code that predates one follows it once touched.
- If a convention is genuinely harmful, surface it. Don't fork silently.
