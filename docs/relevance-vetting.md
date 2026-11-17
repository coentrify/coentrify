# Relevance Vetting

The worklist for vetting the standards against current models. A standard leaves the list once the director has ruled on it.

- The Question - what is asked of every standard
- Three Kinds - which standards are candidates
- How A Candidate Is Vetted - the estimate, the probe and the ruling
- What Changed In The Models - the basis for every estimate
- The Corrections - the 15 candidates and how each was ruled
- The Tool Facts - the round in progress

## The Question

Does a current model still need the rule, or does the model always do this correctly now?

## Three Kinds

- Decisions - laws, naming, templates and the workflow. A model cannot know a decision, so these stay. 152 standards, after four moved in from the tool facts.
- Tool facts - the pitfalls of one tool, such as Angular or Playwright. These stay while the tool behaves that way. 17 standards, after three went and four moved to the decisions.
- Corrections of agent behavior - the candidates. 15 standards, and the director ruled on all of them.

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

## The Corrections

All 15 are probed and ruled on, with the results on the [Proof](../proof.md) page.

- Stay as they are: Always Verify Before Reporting Done, Propagate Renames and Convention Changes Everywhere, Sync The Docs After Every Change, Verify Control Before Rename, Verify Staging Before Committing, Gate Commits on Exit Codes, Read Before You Truncate and Review Every Capture Before Reporting.
- Shrank: Review Changes Before Reporting Done, General Working Rules, Always Work from a Plan, Verify APIs Against Docs And The Installed Artifact and Anchor Edits After Formatting.
- Went: Honest Assessments, with one line kept in General Working Rules, and Decide, Don't Wait.

## The Tool Facts

The round in progress. A tool fact is probed the same way: a fresh agent meets the pitfall without the rule.

### Ruled

Twelve are probed and ruled on, with the results on the [Proof](../proof.md) page. A line that was not probed stays, and so does a standard whose trap was too easy.

- Stay as they are: Sprite Sheet Frames and Kill a Lingering Playwright Server Before Captures.
- Shrank: Hidden Attribute Loses To Display, Substring Locator Collisions, Track Timed Items by an Id, Prompt Small Models Differently, One Projected Node Per Control-Flow Block, Projected Content Is Never Styled by the Host and Use Modern Angular Template APIs.
- Went: Interceptor Ordering, Angular Build Checks The Templates and Init Scripts Need a Navigation.

### Not Probed

No trap here can show the failure, so these stay.

- Canvas Clicks by Coordinates fails only on a loaded machine with parallel workers.
- Real Input For Frame Races needs a race between a timer and a frame.
- Playwright Video Recording holds one fact that Playwright reports itself, and decisions beside it.

### Moved To The Decisions

A model cannot know these, so they were never candidates.

- E2E Assert Before Interacting
- E2E Runs On The Development Build
- Hygiene Tests Run on Their Own Runner
- Playwright Parallel Runs

### Last: Facts About The Harness

A probe in an empty folder cannot exercise most of these.

- Behavior - A Quiet Tree While A Suite Runs, Reload The Standards After Compacting
- Tooling - Browser Captures Go To Disk, Check Where A Pane Click Landed, Settings Changes Need a Fresh Session
