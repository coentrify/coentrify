# Prompt Small Models Differently

A prompt written for a frontier model degrades a small local one. Give each model tier its own prompt and let them diverge.

## Why

Small models lose the thread in long, multi-part instructions and fill gaps confidently: asked about state it cannot see, a small model answers with a plausible number instead of saying it cannot know. Default sampling settings make this worse for rule-following work.

## How to apply

- Keep the instruction short and rule-shaped: a numbered list of hard rules beats prose paragraphs.
- Lower the temperature for rule-following work; creative defaults invent state.
- State a fact more than one way when it must survive rephrasing, since a small model will answer one phrasing and miss its synonym.
- Bound the reply length in the request as well as in the prompt.
- Each time the system gains a capability, re-read the prompt for rules that now contradict it: a rule written while the system was blind keeps it refusing after perception lands, and the symptom looks like a model problem.

## Related

- [Match Known Commands Deterministically, Classify the Rest](match-known-commands-deterministically-classify-the-rest.md)
- [Honest Assessments](../behavior/honest-assessments.md)
