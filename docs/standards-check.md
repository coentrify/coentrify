# Standards Check

The worklist from a check of every standard in 0.0.6, rechecked after the first fixes. A finding leaves the list once it is fixed or ruled.

- Waiting For A Ruling - the calls only the director can make
- Bloat - pages over budget, and rules said on several pages
- Structure - how the template is applied
- Mechanical - fixes that need no call, by module

## Waiting For A Ruling

1. Whether a standard with sections of its own, such as Commits or Code Principles, still needs a How To Apply section.
2. Whether a required field shows its error on submit. Validation Errors Fire On Submit names required errors, while its handler only marks non-empty input and its button is disabled on empty.
3. The tag of the application demo. E2E Test Conventions says the demo is no overview, yet tags it as one, and either fix renames something projects already carry.
4. When a missing component is added and when the director is asked. UI Components First starts both cases from a component the design system does not have.
5. When the suites run. Gamedev Working Cadence runs them once at the end of a story, while Building A Ticket wants the touched suites green per ticket.
6. Release and Aftercare have no phase gate, while Game Phases says every phase ends at one.
7. Generate, Never Reuse bans every pack, while Own Icons lets a third party set bootstrap the start.
8. AFK Safe says nothing progresses while the player is away, and then lets currency grow.
9. ARC is called a pattern rather than a strict rule, inside a set of laws.
10. Work Tracking says debt never prescribes its implementation, while the Ticket Template gives debt a Solution section.
11. Stabilize Before Adding has the plan say so in its focus line, and the generated plan has no focus line.

## Bloat

Over budget, by `npm run lint:standards -- --budget`:

- Agent Roles - about 1,000 words. Its Every Brief Says section restates standards that a brief never summarizes.
- Game Design Laws: Progress - about 700
- Writing A Ticket, Docs Are Hierarchical, Explicit And Short, Parallel Agents, The Conductor, Game Design Laws: Experience and E2E Test Conventions - between 600 and 650

Said on several pages:

- The Done part in the landing commit: Building A Ticket, Writing A Ticket, Agent Roles and The Done Part.
- A light debt story starts whatever the load: Work Tracking, Agent Roles and The Conductor.
- Archive at the verdict: twice in Work Tracking, and in Work Workflow and The Conductor.
- Where an answer to a question goes, with three wordings in Work Workflow and Work Tracking.
- The agent names content under Veto: Gamedev Working Cadence, Incremental Pacing and Game Phases: Development.
- A lint rule over a review by eye, on four pages beside Pre-Empt Recurring Code-Review Nits, which owns it.
- The token rules, on Dark Mode Through Tokens and UI Refactor beside Always Use Design Tokens For Colors.
- The slot naming, on UI Component Design and UI Layout Via Slot Composition.
- The ui layer's purity, on App-Shield and UI Component Design.
- Content projection, on Prefer Content Projection Over Props (Angular) and UI Component Design.

## Structure

- About 40 How To Apply lists open with a reason or an example where an instruction belongs.
- About ten standards open without a rule, such as Plans Vs Persistent Files and Anchor Edits After Formatting.

## Mechanical

### Behavior, Commits And Reporting

- Verify Staging Before Committing: `git add -A <path>` beside "never `git add -A`", and "unstage them first", which changes other people's index.
- Gate Commits On Exit Codes: "no `;`" beside a recommended shape with a `;`.
- Non-Destructive Documenting And Test Automation: "observation phases", where Feature Workflow says steps, with a different list.
- Backward-Trace Missing Prerequisites: "pause and build" beside "once it has its go" and Feature Workflow's "park".
- Note Issues: "the most relevant doc", where the page defers to the workflow.
- Ticket wording in pages that hold for the simple workflow too: Main Stays Green, Free Text Replies and Dev Tiers.
- References that resolve nowhere: "under not done", "beyond the log", "such as the log" and "the subagent files it".
- Behavior overview: two garbled lines, and one that says what its page does not.
- Commits: the good example is itself an action.
- Reels And Video Proof: "we log in to X" beside its rule against "our X".
- Review Every Capture: "remind of".
- Sentences that are hard to parse in Docs Hold Only What The Director Decided and Verify APIs Against Docs.
- Repeats on one page: Sync The Docs, Verify Control Before Rename, Project Lifecycle and Don't Filter Data.
- Contrastive lines: A Go Before Work Elsewhere, Review Every Capture, Change Report and Reels And Video Proof.

### Code, Architecture, TypeScript, Angular And Web

- Always Add Explicit Types: two examples break the page's own rule and No Abbreviated Names.
- Per-Application Split: reads as leave to add the second branch, and makes one point three times.
- A "feature layer" App-Shield does not have: Separation Before Layer Standards, UI Components First and UI Library Is Domain-Agnostic.
- Use Modern Angular Template APIs names no API.
- No Inline Templates: "tagged template string".
- Pre-Empt Recurring Code-Review Nits: rules of other modules in Code, and "pins" for versions.
- Code Principles: the heading Dependency Injection over "compose, don't extend", and an unclear line on generic types.
- UI Copy In Template: "booleans/enums", and the as-const pattern goes by three names.
- `standards.md`: "pick, override and extend" beside Adopt, Configure, Override.
- No Describe-What Comments sends rationale to commits, against its own keep list.
- Hidden Attribute Loses To Display and Transitions Only On User Toggle state the bug where a rule belongs, and use Angular words in Web.
- References that resolve only under Related: canMatch and Barrel Imports.
- Filler and capitals: "really", "genuine", "ALL", "WIRE" and "REQUIRES".

### Docs, Tooling And Records

- Docs State Knowledge calls development a knowledge page.
- Request Log: two different starts for the DEV day count.
- Documentation Philosophy: "short imperative noun phrases" beside one short sentence per item.
- The request log is also called the Chat Log.
- Feature Template: "Lists rot. The source of truth is the code."
- `<feature>` where E2E Test Conventions says `<feature-id>`, in the spec template and Playwright Video Recording.
- Workspace Template: App-Shield unlinked, Angular libraries unmarked, and `## development/` where the application template says Work.
- Parallel Agents repeats Agent Roles, and states a fact without a rule.
- Changelog Per Version: "keeps the list by hand" beside "never written free hand".
- The tooling overview line for Lightweight Test Reporting repeats its title.
- In-app browser and browser pane name one thing.

### UI, E2E, Simple Workflow And Tests

- UI Refactor allows a hardcoded value where Always Use Design Tokens adds a token.
- UI Layout Via Slot Composition: "the body is always the default slot" beside a layout with none.
- E2E Tests Must Demonstrate Behavior: separate toggle tests beside the bracketed test, and "contrast" has three meanings.
- Bugs Template: a reference link without a definition, and four names for the debt list.
- UI Library Is Domain-Agnostic: a line that contradicts its own first half.
- Substring Locator Collisions: "nothing fails" beside "strict mode fails".
- Plan Template: `## Summary` where its siblings say overview list, and a section that repeats Remove Completed Items.
- UI Styleguide: a long preamble, and "dumb" where UI Component Design says pure.
- Test The System Behind A Mock and Real Input For Frame Races: a point made three times, and an 80-word mechanism in one bullet.

### Gamedev, Electron And Scripts

- No npx In Scripts recommends `npm exec`.
- Thin Wrappers In CI And Hooks: the husky preamble.
- Gamedev Working Cadence: "the bugs go to the planning page regardless".
- Game Design Laws: "the end is always visible" beside "the ultimate goal is not revealed too soon".
- Game Phases: a demo cut during Alpha, while the quiet launch has none.
- Game Phases: Concept: a phase gate that is no question.
- Captures And Reels: reels on demand beside a copy per version.
- npm Script Naming: `playwright:install` breaks its own format, and the page states no rule.
- Electron Shell Shape names no framework, and Electron Packaging links Devbox.
- Gamedev overview: "the generic game design laws about" seven times.
- Launch Strategy: the reasons of the quiet launch mixed into what it is.
- Small words: "finetuning", "hud", "playstyles" and "gray boxes" beside "greybox".

### Tickets Workflow, Security And AI

- Work Workflow: the planning page lists tickets with a small question, while it lists stories.
- Work Workflow: lines placed by hand on lists that are generated.
- Tickets Workflow overview: the archive before the verdict, and "backlogs".
- Agent Roles: a backlog, and a role left unnamed.
- Work Tracking: a 190-word paragraph, and `## Blocked` with three meanings.
- Work Tracking: "no generated file sits in the repo" beside the generated lists.
- The Conductor: reads as granting a go, and examples that break Work Item Names.
- Work Workflow: every unit into a ticket beside bare lines and docs, and an epic where a story belongs.
- Pointers to the wrong page for the ticket's shape and the Done part.
- Writing A Ticket: a groomer, a role that does not exist.
- Work Item Names: action names banned and then prescribed.
- Never Access The Keychain: a contrastive line, and an off-topic one.
- Match Known Commands and Prompt Small Models: a paired line, and jargon.
