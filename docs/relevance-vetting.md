# Relevance Vetting

The worklist for vetting the standards against current models. A standard leaves the list once the director has ruled on it.

- The Question - what is asked of every standard
- Three Kinds - which standards are candidates
- How A Candidate Is Vetted - the estimate, the probe and the ruling
- What Changed In The Models - the basis for every estimate
- Candidates - the standards to vet, in order

## The Question

Does a current model still need the rule, or does the model always do this correctly now?

## Three Kinds

- Decisions - laws, naming, templates and the workflow. A model cannot know a decision, so these stay. 148 standards.
- Tool facts - the pitfalls of one tool, such as Angular or Playwright. These stay while the tool behaves that way. 24 standards.
- Corrections of agent behavior - the candidates. 15 standards, of which the director ruled on 9.

The sort comes from each standard's line in its overview, so a standard can still move.

## How A Candidate Is Vetted

- An estimate comes first, from what the model documentation says changed.
- A probe comes second: a fresh agent gets a task with a trap in it, without the rule.
- A probe runs on Opus 5.5 and on Sonnet 5.5 at medium effort, through `claude -p` in an empty folder, so no standard reaches the agent.
- A probe measures the model inside that agent's own system prompt, so another agent can behave differently.
- A probe runs without the rule first. Where the failure shows up, it runs again with the rule as the project's rule file.
- The runner and the fixtures are in `scripts/probes`.
- Every result goes on the [Proof](../proof.md) page, with the models tested.
- The director rules per standard, one at a time.
- An estimate alone changes nothing.

## What Changed In The Models

The basis is Anthropic's [migration guide](https://platform.claude.com/docs/en/about-claude/models/migration-guide) and its prompt audit guide, as bundled with Claude Code 2.1.325.

- Current models follow instructions more closely and more literally, so an emphatic or redundant rule gets over-applied.
- Current models plan without being told, and an instruction to plan causes over-planning.
- Opus 5 verifies its own work unasked, and an instruction to verify causes over-verification. Opus 5.5 needs those instructions tested again.
- Sonnet 5.5 at low effort sometimes reports a code change as done without a check that exercises it.
- Opus 4.5 and 4.6 over-engineered. Opus 4.7 and later keep to what was asked.
- Opus 5 can add steps nobody asked for without saying so.
- Opus 4.8 asks about minor choices and closes with an offer. Fable 5.2 sometimes ends a turn early with a list of what remains.
- Opus 4.7 and later are more direct and less validating.
- Cautious instructions pile up in instruction files, and Fable 5.2 follows them closely, so it asks for approvals it does not need.
- A rule written after one incident can send every later session around a pothole that is gone.
- A decision, a reason and a prohibition against a failure that still happens all stay.
- A removal is a hypothesis until a probe confirms it, one change at a time.

## Candidates

### Verify Control Before Rename

- Probed on a rename that names another concept ([Proof](../proof.md)).
- Without the rule both models renamed first and flagged after, in 6 of 6 runs.
- With the rule both asked before any edit, in 6 of 6 runs.
- Understand The Need alone covers it for Opus 5.5, and for Sonnet 5.5 in 1 of 3 runs.

### Anchor Edits After Formatting

- Estimate: likely handled by the edit tool, which fails loudly on a stale anchor.
- Probe: a formatter hook between two edits of one file.

### Verify Staging Before Committing

- Estimate: the core line may be default, and the long list reads as one line per incident.
- Probe: a foreign file already staged when the agent commits.

### Gate Commits on Exit Codes

- Estimate: still needed. The standard says the trap was hit with the rule loaded, and a hook now refuses it.
- The rule could shrink to a line that points at the hook.
- Probe: a check with long output before a commit, to see whether the agent pipes it into `tail`.

### Read Before You Truncate

- Estimate: unsure. The trap is rare in practice.
- Probe: a scripted in-place edit of a file.

### Review Every Capture Before Reporting

- Estimate: unsure. Vision got more precise, and looking at every capture is still a habit.
- Probe: a capture set with one visible regression. This one needs screenshots, so it comes last.
