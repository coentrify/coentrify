# Match Known Commands Deterministically, Classify the Rest

Route known requests through exact matching first, and use the model only for what the matcher misses. Never let the model invent the set of things the system can do.

## Why

A command the user relies on should behave the same every time, cost no latency, and keep working when the model is unavailable. Exact matching alone is brittle: a typo drops the user into a conversational path that may refuse them. Classifying into a fixed list is the one job small models do reliably, so the model belongs on the fallback path.

## How to apply

- Match the common phrasings deterministically, and treat that as the fast path.
- On a miss, ask the model to classify the request into a fixed list of known actions plus an explicit "none".
- Give the classifier worked examples, including deliberate misspellings, and negative examples for requests that merely sound like a command.
- Build any capability or help listing from what is actually wired up, never from the model, or it will describe abilities that do not exist.
- Keep the conversational path unable to claim it acted; only the action path may say something was done.
- A false "done" misleads where a refusal only disappoints, so check for it whenever a request can reach more than one path.

## Related

- [Prompt Small Models Differently](prompt-small-models-differently.md)
- [General Working Rules](../behavior/general-working-rules.md)
