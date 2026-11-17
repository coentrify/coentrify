# Relevance Vetting

The worklist for vetting the standards against current models. A standard leaves the list once the director has ruled on it.

- The Question - what is asked of every standard
- Three Kinds - which standards are candidates
- How A Candidate Is Vetted - the estimate, the probe and the ruling
- How A Trap Is Built And Run - the fixture, the prompt, the run and the check
- What Changed In The Models - the basis for every estimate
- The Corrections - the 15 candidates and how each was ruled
- The Tool Facts - the 24 tool facts and how each was ruled

## The Question

Does a current model still need the rule, or does the model always do this correctly now?

## Three Kinds

- Decisions - laws, naming, templates and the workflow. A model cannot know a decision, so these stay. 152 standards, after four moved in from the tool facts.
- Tool facts - the pitfalls of one tool, such as Angular or Playwright. These stay while the tool behaves that way. 16 standards, after four went and four moved to the decisions.
- Corrections of agent behavior - the candidates. 15 standards, and the director ruled on all of them.

The sort comes from each standard's line in its overview, so a standard can still move.

## How A Candidate Is Vetted

- An estimate comes first, from what the model documentation says changed.
- A probe comes second: a fresh agent gets a task with a trap in it, without the rule.
- A probe runs on Opus 5.5 and on Sonnet 5.5 at medium effort, through `claude -p` in an empty folder, so no standard reaches the agent.
- A probe measures the model inside that agent's own system prompt, so another agent can behave differently.
- A probe runs without the rule first. Where the failure shows up, it runs again with the rule as the project's rule file.
- A trap sits where the agent has no reason to look, and the wrong way is the easy way.
- Nothing near the trap shows the answer: no sibling file with the pattern, no comment, no check that fails on its own.
- A probe that every run passes on a trap in plain sight is no test. The trap is rebuilt, or the standard stays.
- A trap is built for its round and thrown away after it. Only the results are kept.
- Every result goes on the [Proof](../proof.md) page, with the models tested.
- The director rules per standard, one at a time.
- An estimate alone changes nothing.

## How A Trap Is Built And Run

- A fixture is a small project with the trap, in one commit.
- A prompt is the request as a director would say it. It never names the trap.
- A run is a headless agent in a copy of the fixture, with no settings loaded.
- With the rule, the standard is the `CLAUDE.md` of the copy.
- A check reads the tree and the transcript, never the agent's report.
- A check is tried on a right and a wrong answer first.
- A cell is three runs per model. A failed cell runs again with the rule.
- A shrunk standard is tested shrunk and in full.
- A second prompt continues the conversation. A turn of `/compact` compacts it.
- A fact about the harness needs no trap: change the thing while a session runs.
- No runner is edited while a trap runs.
- A run shares no port and no folder with another run.

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

A tool fact is probed the same way: a fresh agent meets the pitfall without the rule. The round is closed.

### Ruled

Fifteen are probed and ruled on, with the results on the [Proof](../proof.md) page. A line that was not probed stays, and so does a standard whose trap was too easy.

- Stay as they are: Sprite Sheet Frames, Prompt Small Models Differently, Kill a Lingering Playwright Server Before Captures, A Quiet Tree While A Suite Runs and Reload The Standards After Compacting.
- Shrank: Hidden Attribute Loses To Display, Substring Locator Collisions, Track Timed Items by an Id, One Projected Node Per Control-Flow Block, Projected Content Is Never Styled by the Host and Use Modern Angular Template APIs.
- Went: Interceptor Ordering, Angular Build Checks The Templates, Init Scripts Need a Navigation and Settings Changes Need a Fresh Session.

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

### The Facts About The Harness

- A Quiet Tree While A Suite Runs stays. Sonnet 5.5 needs it: 1 of 3 without the rule, 3 of 3 with it.
- Reload The Standards After Compacting stays for now. An imported rule file survives a compaction on its own, and both models read the other standards again unasked. A long session, and a session in the terminal or the app, are not probed yet.
- Settings Changes Need a Fresh Session went. A headless session reads the permission rules again, so its fact no longer holds.
- Browser Captures Go To Disk and Check Where A Pane Click Landed are about the browser pane of the app. A headless run has no pane, so these stay.

### Probed Twice

A standard that went or shrank on an easy trap got a hard one after.

- Three that went passed it, so they stay gone: Interceptor Ordering, Angular Build Checks The Templates and Init Scripts Need a Navigation.
- Three that shrank passed it, so they stay shrunk: Hidden Attribute Loses To Display, Substring Locator Collisions and Track Timed Items by an Id.
- Prompt Small Models Differently failed it, and is back in full.
