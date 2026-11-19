# Standards Check

The worklist from a check of every standard in 0.0.6, for bloat, wording and inconsistencies. A finding leaves the list once it is fixed or ruled.

- Waiting For A Ruling - conflicts that only the director can settle
- Bloat - pages over budget, and rules said on several pages
- Structure - how the template is applied
- Mechanical - fixes that follow the house rules, by module

## Waiting For A Ruling

1. Where wiring lives. Docs Describe Behavior, Not Wiring keeps library names, providers and paths out of the architecture and concern docs. The workspace and application templates and Docs Folder Structure put them there, and Documentation Philosophy sends implementation detail to a debt doc.
2. Where the simple workflow's lists live. Its templates put the plan, todo, roadmap and debt at the docs root, and the bugs in `docs/workspace/`. Docs Folder Structure says nothing of work tracking sits at the root, and that all of it lives in `docs/development/`.
3. What the todo is. The Simple Workflow calls it what was decided. The Roadmap Template calls it biggish features still to be workshopped. The Plan Template sends small follow-ups to the inbox.
4. Whether the work order is fixed. Dev Tiers says a fixed order. The Simple Workflow says the order is flexible and depends on the lifecycle.
5. Who makes a rule change. Always Make No Mistakes leaves it to `healing`. Standards Maintenance surfaces a rule change before it is applied. Standards Over Skills fixes a skill without flagging it.
6. When old code is conformed. Don't Introduce Tech Debt conforms it when the fix is cheap and in scope, and files debt otherwise. General Working Rules says code that predates a convention follows it once touched.
7. Always Polished against the phases. Game Design Laws: Progress says whatever gets made is good, even with few features. Game Phases: Development says a rough part is fine and polish waits for Alpha.
8. Three gaps in the ticket rules.
   - The Definition of Ready includes the director's go, while ready and go are separate steps everywhere else.
   - A docs story gets no verdict in Work Tracking, while everywhere else only debt skips acceptance.
   - An epic is optional for a feature or a bug, and a ticket outside an epic is on no list.
9. Agent additions in docs. Flag Every Addition Of Your Own lets an agent decide and flag a name or a number in the docs. Docs Hold Only What The Director Decided keeps such an extension out of the docs until the director says it.
10. Where `Enum<T>` lives. No Magic Values puts it in the core layer, App-Shield lets ui depend on nothing in the workspace, and Folder Concerns gives ui its own `generics/`.
11. One meaning per term.
    - "Go" is the director's approval in the glossary, and a pass in three pages.
    - "Gate" ends a phase, and also means a cap, an unlock and a place.
    - "User" stands for the director in Feature Workflow, Own Ports and four more pages.
    - "User test" and "test session" stand beside "playtest".
12. The base of a builder's next ticket. Agent Roles cuts it from the last landed branch, and Parallel Agents rebases onto main after each commit.

## Bloat

Over budget:

- Agent Roles - 973 words, a standard. Its Every Brief Says section alone is 363, and summarizes standards it says a brief never summarizes.
- Game Design Laws: Progress - 686
- Docs Are Hierarchical, Explicit and Short - 649
- Parallel Agents - 647
- Writing A Ticket - 641
- Game Design Laws: Experience - 641
- The Conductor - 632
- Gamedev Working Cadence - 622
- E2E Test Conventions - 612

Said on several pages, with drift between them:

- The Done part in the landing commit, on four pages of Tickets Workflow.
- A light debt story starts whatever the load, on three pages.
- Archive at the verdict, on three pages, and twice on Work Tracking.
- The answer to a question goes into the docs, on Work Workflow and Work Tracking.
- The agent names content under Veto, on Gamedev Working Cadence, Incremental Pacing and Game Phases: Development.
- A lint rule over a review by eye, on four pages beside Pre-empt Recurring Code Review Nits, which owns it.
- The token rules, on Dark Mode Through Tokens, UI Refactor and Always Use Design Tokens For Colors.
- The slot naming, on UI Component Design and UI Layout Via Slot Composition.
- The ui layer's purity, on App-Shield and UI Component Design.
- The content projection rule, on Prefer Content Projection Over Props (Angular) and UI Component Design.

## Structure

- 40 standards have no Related section.
- About 20 pages use headings of their own where the template has How To Apply.
- Many How To Apply lists open with a reason or an example where an instruction belongs.
- Four templates put Why at the bottom, under a Purpose section, and three have none.
- Six pages state no rule in their opening, such as Plans Vs Persistent Files and Anchor Edits After Formatting.
- The template asks for a Relevant For section, and no page has one. The laws use a `Relevant for:` line.
- Short words in titles are cased both ways, such as Always Work From A Plan beside Reload The Standards After Compacting.
- The standards hold 463 semicolons, and pairing two cases with one is the most common break of Prose Style.
- Several overview lines are garbled or have drifted from their page, mostly in Behavior and Tickets Workflow.

## Mechanical

### Behavior, Commits And Reporting

- `verify-staging-before-committing.md:18,20` - `git add -A <path>` beside "never `git add -A`". Say "never a bare `git add -A`".
- `verify-staging-before-committing.md:21` - unstaging the director's entries changes their work. Commit only your paths with `git commit -- <paths>`.
- `gate-commits-on-exit-codes.md:12-13` - "nothing in between: no `;`" beside a recommended shape with a `;`. State the rule as only `&&` between the exit-code test and the commit.
- `change-report.md:26` - a project skill `changelog-report` that does not exist, and "this workspace".
- `non-destructive-documenting-and-test-automation.md:3` - "observation phases" where Feature Workflow says steps, and its list differs from Feature Workflow's.
- `backward-trace-missing-prerequisites.md:3` - "pause and build" beside "start once it has its go" and Feature Workflow's "park".
- `note-issues.md:3` - "the most relevant doc" where the page now defers to the workflow.
- `dev-tiers.md:11`, `main-stays-green-work-stays-clean.md:15,19`, `free-text-replies-no-buttons.md:15` - ticket wording in pages that hold for the simple workflow too.
- `a-maybe-is-a-trigger-to-investigate.md:3` - "under not done" names a section that exists nowhere. The same for "the log" in Prototype Mode and Commits, and "the subagent" in File A Change.
- `overview.md:41,45` - two garbled lines. Lines 5, 16 and 40 have drifted from their pages.
- `commits.md:15` - the good example is an action itself.
- `reels-and-video-proof.md:21` - the example breaks the page's own rule against the first person.
- `review-every-capture-before-reporting.md:13,15` - "remind of", and a style budget from one project.
- `docs-hold-only-what-the-director-decided.md:14,17` and `verify-apis-against-docs-and-the-installed-artifact.md:11,13` - sentences that are hard to parse.
- Repeats on one page: Sync The Docs line 3, Verify Control Before Rename line 11, Project Lifecycle lines 12 and 13, Don't Filter Data lines 3, 11 and 13.
- Contrastive or paired lines: A Go Before Work Elsewhere, Standards Over Skills, Review Every Capture, Dev Tiers, Change Report and Reels And Video Proof.

### Code, Architecture, TypeScript, Angular And Web

- `always-add-explicit-types.md:15,24` - two examples break the page's own rule and No Abbreviated Names.
- `per-application-split-over-shared-branching.md:13` - reads as leave to add the second branch and file debt. The duplication point is made three times.
- `separation-before-layer-standards.md:11` - a "feature layer" App-Shield does not have. The same in UI Components First and UI Library Is Domain-Agnostic.
- `use-modern-angular-template-apis.md` - names no API, so an agent cannot tell legacy from modern.
- `no-inline-templates.md:5` - "tagged template string" is wrong. It is a plain template literal.
- `pre-empt-recurring-code-review-nits.md:11-15` - GitHub Actions, Angular, CSS and SCSS rules in the language-agnostic module, and "pins" for versions.
- `code-principles.md:13-25` - the heading Dependency Injection over "compose, don't extend", an unclear line 19, and game jargon on line 25.
- `ui-copy-in-template.md:3` - "booleans/enums" invites the `enum` No Magic Values bans. The pattern has three names across pages.
- `standards.md:48` - "pick, override and extend" beside Adopt, Configure, Override, and Adopt, Configure, Customize in the origin.
- `no-describe-what-comments.md:3` - sends rationale to commits, while the page and Escape Hatch Comments keep why-comments in code.
- `hidden-attribute-loses-to-display.md:3,12` and `transitions-only-on-user-toggle.md:3,13` - rules that read wrong or describe the bug, and Angular wording in the web module.
- `projected-content-is-never-styled-by-the-host.md:11-12`, `canmatch-wildcard-for-route-access.md:11-18`, `barrel-imports.md:14` - references that resolve only in one project or under Related.
- Filler: "genuinely", "truly", "really", "actually", "legitimately" and "demonstrably" on about ten pages. Capitals for emphasis in App-Shield and Pre-empt.

### Docs, Tooling And Records

- `docs/overview.md:8` - names a feedback folder that does not exist.
- `docs-state-knowledge.md:3` - calls development a knowledge page.
- `request-log.md:11,13` - two different starts for the DEV day count, and POC is never spelled out.
- `documentation-philosophy.md:15` - "short imperative noun phrases" beside one short sentence per list item.
- `request-log.md:3`, `vitepress-wiki.md:16` - one record called Request Log, `log/` and Chat Log.
- `feature-template.md:46` - "Lists rot; the source of truth is the code" against the page's own functional source of truth, and a fragment.
- `feature-spec-template.md:69`, `playwright-video-recording.md:22` - `<feature>` where E2E Test Conventions says `<feature-id>`.
- `docs-are-hierarchical-explicit-and-short.md` - one concept under four names: altitude, breadth, level of awareness and focus level.
- `workspace-template.md:23,29,31` - App-Shield unlinked, Angular examples unmarked, and a `## development/` heading where the application template says Work.
- `ui-vocabulary.md`, `feature-spec-template.md`, `feature-template.md` - Dutch words and components from one project.
- `parallel-agents.md:16,21-23` - a repeat of Agent Roles, a fact without a rule, and two terms never explained.
- `changelog-per-version.md:20,24,28` - "keeps the list by hand" beside "never written free hand".
- `tooling/overview.md:10` - a line that only repeats its title.
- In-app browser and browser pane name one thing. "Afterwards" is British in two pages.

### UI, E2E, Simple Workflow And Tests

- `validation-errors-fire-on-submit.md:3,12-13` - "required" in the rule, while the handler only marks non-empty input, so a required error never fires.
- `ui-refactor-preserve-dont-redesign.md:13` - allows a hardcoded value where Always Use Design Tokens For Colors adds a token.
- `ui-layout-via-slot-composition.md:11,14` - "the body is always the default slot" beside a layout with none.
- `e2e-test-conventions.md:27,33` - the demo is no overview, yet takes an overview tag.
- `e2e-tests-must-demonstrate-behavior.md:12` - separate toggle tests beside the bracketed test. "Contrast" has three meanings across the modules.
- `bugs-template.md:12` - a reference link with no definition. The debt list goes by four names.
- `bugs-template.md:7`, `technical-debt-template.md:7` - "Catalogues" is British.
- `ui-library-is-domain-agnostic.md:11-14` - a line that contradicts its own first half, and one point made three times.
- `ui-components-first.md:14-15` - two cases with the same start, so an agent cannot tell when to add and when to ask.
- `substring-locator-collisions.md:13` - "nothing fails" beside "strict mode fails".
- `roadmap-template.md:43` - a section after Related, and a concepts page that does not resolve.
- `plan-template.md:23,44-47` - a list name that differs from its siblings, and a section that repeats Remove Completed Items.
- `bracket-state-changes-with-contrast-assertions.md:21` - an `e2e:case` script that exists nowhere.
- `ui-styleguide.md:3-12` - a long preamble that repeats the Why, and "dumb" where UI Component Design says pure.
- `test-the-system-behind-a-mock.md:12-13` and `real-input-for-frame-races.md:11` - a point made three times, and an 80-word mechanism as one bullet.

### Gamedev, Electron And Scripts

- `no-npx-in-scripts.md:3` - recommends `npm exec`, which is `npx` and fetches from the network in CI.
- `thin-wrappers-in-ci-and-hooks.md:12` - the husky preamble, which husky 9 deprecates.
- `gamedev-working-cadence.md:15,23` - bugs on the planning page "regardless", and suites at the end of a story where Building A Ticket wants them per ticket.
- `game-design-laws.md:41` - "the end is always visible" beside "the ultimate goal is not revealed too soon".
- `game-phases.md:46` - a demo cut during Alpha, while the quiet launch has none.
- `game-phases-live.md:7,11` and `game-phases-concept.md:11` - phases without a gate, and a gate that is no question.
- `captures-and-reels.md:19,21,32` - reels on demand beside a copy per version.
- `game-design-laws-own-style.md:19` - Generate, Never Reuse repeats No Asset Flips, and clashes with the bootstrap set in Own Icons.
- `game-design-laws-experience.md:35` - "nothing auto progresses" beside currency that grows while away.
- `game-design-laws-guidance.md:25` - "a pattern, not a strict rule" in a set of laws.
- `npm-script-naming.md:32` - `playwright:install` breaks its own format, and the page states no rule.
- `electron-packaging-and-suite.md:3,13,15` and `electron-shell-shape.md:11` - gamedev terms in Electron, and an unnamed framework.
- `gamedev/overview.md:9-15` - "the generic game design laws about" seven times.
- `launch-strategy.md:11-25` - the reasons of the quiet launch mixed into what it is.
- Small: "finetuning", "hud", "grey boxes", "playstyles" beside "play style".

### Tickets Workflow, Security And AI

- `work-workflow.md:95` - the planning page lists tickets with a small question, while a question keeps a ticket on the refine list and the page lists stories.
- `work-workflow.md:20,40,42` - lines placed by hand on lists that are generated.
- `tickets-workflow/overview.md:12-13` - lines that drifted from their pages.
- `agent-roles.md:29,43` - a backlog, which Work Tracking rules out, and a hundred tickets for an unnamed role.
- `work-tracking.md:134` - a 194-word paragraph, and `## Blocked` with two meanings.
- `work-tracking.md:156` - "no generated file sits in the repo" beside the generated lists.
- `the-conductor.md:11-13,22-23` - reads as the conductor granting a go, and examples that break Work Item Names.
- `work-workflow.md:16,66` - every unit into a ticket beside bare lines and docs, and an epic where a story belongs.
- `work-tracking.md:37` - debt never prescribes the implementation, while its template has a Solution.
- `work-workflow.md:5`, `work-tracking.md:57` - pointers to the wrong page for the ticket's shape and the Done part.
- `writing-a-ticket.md:19` - a groomer, a role that does not exist.
- `stabilize-before-adding.md:3` - a focus line that is defined nowhere.
- `the-done-part.md:12` - ARC and the Laws as an example in a generic page.
- `ticket-template.md` - no Why and no Related.
- `work-item-names.md:12,20` - action names banned and then prescribed, and "How To Apply".
- `never-access-the-keychain.md:3,12,13` - contrastive scaffolding, an off-topic line, and "the user".
- `match-known-commands-deterministically-classify-the-rest.md:17-18`, `prompt-small-models-differently.md:16` - a paired line, and jargon.
