# Changelog

What changed in each version of coentrify. A version opens with its summary, which is also the text of its release.

## 0.0.4

Two Read First standards get the Why they lacked, kept to its essence. Nothing in it is stable yet.

- 190 standards in 21 modules: two changed
- The commit check passes a standard that is back at its released text

### Behavior

- Changed [General Working Rules](standards/behavior/general-working-rules.md)
- Changed [Use US English Everywhere](standards/behavior/use-us-english-everywhere.md)

## 0.0.3

The tool facts are vetted against current models, on traps built to catch them. Nothing in it is stable yet.

- 190 standards in 21 modules: 24 changed, two renamed, ten came in and five went
- The second round of the relevance vetting: 15 tool facts, probed on Claude Opus 5.5 and Claude Sonnet 5.5. Five stay, six shrank and four went
- A rule for the traps: the wrong way is the easy way, and a pass on a trap in plain sight is no test
- Three standards that a hard trap showed a model needs
- The game phases in four stages, with a gate at the end of every phase
- The launch strategy as a choice, with the quiet launch as the default
- Ten new game design laws, among them Loop First, Fair Surprise and No Asset Flips. The laws stand in seven parts
- A standard for one kind of project says so in its title, or in a Relevant For section
- The workflow that tags a version publishes its release as well, from the summary in the changelog

### Angular

- Removed Angular Build Checks The Templates
- Changed [One Projected Node Per Control-Flow Block](standards/angular/one-projected-node-per-control-flow-block.md)
- Changed [Projected Content Is Never Styled by the Host](standards/angular/projected-content-is-never-styled-by-the-host.md)
- Changed [Track Timed Items by an Id](standards/angular/track-timed-items-by-an-id.md)
- Changed [Use Modern Angular Template APIs](standards/angular/use-modern-angular-template-apis.md)

### Architecture

- Removed Interceptor Ordering
- Added [Unique Where It Counts](standards/architecture/unique-where-it-counts.md)

### Behavior

- Changed [Project Lifecycle](standards/behavior/project-lifecycle.md)
- Changed [Prose Style](standards/behavior/prose-style.md)

### Commits

- Changed [Gate Commits on Exit Codes](standards/commits/gate-commits-on-exit-codes.md)

### E2E

- Removed Init Scripts Need a Navigation
- Changed [Substring Locator Collisions](standards/e2e/substring-locator-collisions.md)

### Gamedev

- Renamed Visual Design to [2D Visual Design](standards/gamedev/2d-visual-design.md)
- Changed [Captures And Reels](standards/gamedev/captures-and-reels.md)
- Removed Code Based Sound
- Changed [Devbox](standards/gamedev/devbox.md)
- Changed [Game Design Laws](standards/gamedev/game-design-laws.md)
- Changed [Game Design Laws: Experience](standards/gamedev/game-design-laws-experience.md)
- Added [Game Design Laws: Guidance](standards/gamedev/game-design-laws-guidance.md)
- Added [Game Design Laws: Own Style](standards/gamedev/game-design-laws-own-style.md)
- Changed [Game Design Laws: Progress](standards/gamedev/game-design-laws-progress.md)
- Changed [Game Design Laws: Story](standards/gamedev/game-design-laws-story.md)
- Changed [Game Design Laws: UI](standards/gamedev/game-design-laws-ui.md)
- Added [Game Design Laws: World](standards/gamedev/game-design-laws-world.md)
- Changed [Game Phases](standards/gamedev/game-phases.md)
- Added [Game Phases: Concept](standards/gamedev/game-phases-concept.md)
- Added [Game Phases: Design](standards/gamedev/game-phases-design.md)
- Added [Game Phases: Development](standards/gamedev/game-phases-development.md)
- Added [Game Phases: Live](standards/gamedev/game-phases-live.md)
- Changed [Game Work Workflow](standards/gamedev/game-work-workflow.md)
- Changed [Gamedev Working Cadence](standards/gamedev/gamedev-working-cadence.md)
- Renamed Pacing Docs to [Incremental Pacing](standards/gamedev/incremental-pacing.md)
- Added [Launch Strategy](standards/gamedev/launch-strategy.md)
- Added [Measure Sound, Never Guess](standards/gamedev/measure-sound-never-guess.md)
- Changed [Own Icons](standards/gamedev/own-icons.md)
- Changed [Silent Runs](standards/gamedev/silent-runs.md)

### Tickets Workflow

- Changed [Work Item Names](standards/tickets-workflow/work-item-names.md)
- Changed [Work Tracking](standards/tickets-workflow/work-tracking.md)

### Tooling

- Removed Settings Changes Need a Fresh Session
- Changed [VitePress Wiki](standards/tooling/vitepress-wiki.md)

### Web

- Changed [Hidden Attribute Loses To Display](standards/web/hidden-attribute-loses-to-display.md)

## 0.0.2

The standards are vetted against current models for the first time. Nothing in it is stable yet.

- 185 standards in 21 modules: 144 changed and two went
- The first round of the relevance vetting: 15 corrections of agent behavior, probed on Claude Opus 5.5 and Claude Sonnet 5.5. Eight stay, five shrank and two went
- The proof page, with every experiment and the models it was measured on
- The commit gate hook refuses a commit that follows a `git add` in the same command
- Scripts that check `coentrify.json` and that remove links to standards a project did not take
- Title case for every section header, with a check that fails on one out of it

### AI

- Changed [Match Known Commands Deterministically, Classify the Rest](standards/ai/match-known-commands-deterministically-classify-the-rest.md)
- Changed [Prompt Small Models Differently](standards/ai/prompt-small-models-differently.md)

### Angular

- Changed Angular Build Checks The Templates
- Changed [Interface, Not Abstract Class, For Mock Swap](standards/angular/interface-not-abstract-class-for-mock-swap.md)
- Changed [One Projected Node Per Control-Flow Block](standards/angular/one-projected-node-per-control-flow-block.md)
- Changed [Projected Content Is Never Styled by the Host](standards/angular/projected-content-is-never-styled-by-the-host.md)
- Changed [Track Timed Items by an Id](standards/angular/track-timed-items-by-an-id.md)
- Changed [Use Modern Angular Template APIs](standards/angular/use-modern-angular-template-apis.md)

### Architecture

- Changed [Adopt, Configure, Override](standards/architecture/adopt-configure-override.md)
- Changed [App-Shield](standards/architecture/app-shield.md)
- Changed [Converge Only Once Proven](standards/architecture/converge-only-once-proven.md)
- Changed [Folder Concerns](standards/architecture/folder-concerns.md)
- Changed Interceptor Ordering
- Changed [Per-Application Split Over Shared Branching](standards/architecture/per-application-split-over-shared-branching.md)
- Changed [Separation Before Layer Standards](standards/architecture/separation-before-layer-standards.md)

### Behavior

- Changed [A Go Before Work Elsewhere](standards/behavior/a-go-before-work-elsewhere.md)
- Changed [A Maybe Is A Trigger To Investigate](standards/behavior/a-maybe-is-a-trigger-to-investigate.md)
- Changed [A Quiet Tree While A Suite Runs](standards/behavior/a-quiet-tree-while-a-suite-runs.md)
- Changed [Always Make No Mistakes](standards/behavior/always-make-no-mistakes.md)
- Changed [Always Verify Before Reporting Done](standards/behavior/always-verify-before-reporting-done.md)
- Changed [Always Work from a Plan](standards/behavior/always-work-from-a-plan.md)
- Changed [Anchor Edits After Formatting](standards/behavior/anchor-edits-after-formatting.md)
- Changed [Code Review Compounds Into Patterns and Sweeps](standards/behavior/code-review-compounds-into-patterns-and-sweeps.md)
- Removed Decide, Don't Wait
- Changed [Dev Tiers](standards/behavior/dev-tiers.md)
- Changed [Docs Hold Only What the Director Decided](standards/behavior/docs-hold-only-what-the-director-decided.md)
- Changed [Don't Filter Data Without a Spec](standards/behavior/dont-filter-data-without-a-spec.md)
- Changed [Don't Introduce Tech Debt](standards/behavior/dont-introduce-tech-debt.md)
- Changed [Flag Every Addition of Your Own](standards/behavior/flag-every-addition-of-your-own.md)
- Changed [Free Text Replies, No Buttons](standards/behavior/free-text-replies-no-buttons.md)
- Changed [General Working Rules](standards/behavior/general-working-rules.md)
- Removed Honest Assessments
- Changed [Normal Dashes](standards/behavior/normal-dashes.md)
- Changed [Note Issues](standards/behavior/note-issues.md)
- Changed [Project Lifecycle](standards/behavior/project-lifecycle.md)
- Changed [Propagate Renames and Convention Changes Everywhere](standards/behavior/propagate-renames-and-convention-changes-everywhere.md)
- Changed [Prose Style](standards/behavior/prose-style.md)
- Changed [Prototype Mode Is Speed First](standards/behavior/prototype-mode-is-speed-first.md)
- Changed [Regular Layered Gap Analysis](standards/behavior/regular-layered-gap-analysis.md)
- Changed [Reload The Standards After Compacting](standards/behavior/reload-the-standards-after-compacting.md)
- Changed [Review Changes Before Reporting Done](standards/behavior/review-changes-before-reporting-done.md)
- Changed [Review Every Capture Before Reporting](standards/behavior/review-every-capture-before-reporting.md)
- Changed [Standards Maintenance](standards/behavior/standards-maintenance.md)
- Changed [Standards Over Skills](standards/behavior/standards-over-skills.md)
- Changed [Sweeps Enumerate Into Tech-Debt First](standards/behavior/sweeps-enumerate-into-tech-debt-first.md)
- Changed [Sync The Docs After Every Change](standards/behavior/sync-the-docs-after-every-change.md)
- Changed [The Quality Of The Question](standards/behavior/the-quality-of-the-question.md)
- Changed [Understand The Need](standards/behavior/understand-the-need.md)
- Changed [Verify APIs Against Docs And The Installed Artifact](standards/behavior/verify-apis-against-docs-and-the-installed-artifact.md)
- Changed [Verify Control Before Rename](standards/behavior/verify-control-before-rename.md)

### Code

- Changed [Escape Hatch Comments](standards/code/escape-hatch-comments.md)
- Changed [Name by Concept, Not Copy](standards/code/name-by-concept-not-copy.md)
- Changed [No Abbreviated Names](standards/code/no-abbreviated-names.md)
- Changed [No Describe-What Comments](standards/code/no-describe-what-comments.md)
- Changed [Pre-empt Recurring Code-Review Nits](standards/code/pre-empt-recurring-code-review-nits.md)

### Commits

- Changed [Gate Commits on Exit Codes](standards/commits/gate-commits-on-exit-codes.md)
- Changed [Main Stays Green, Work Stays Clean](standards/commits/main-stays-green-work-stays-clean.md)
- Changed [Verify Staging Before Committing](standards/commits/verify-staging-before-committing.md)

### Docs

- Changed [Application Template](standards/docs/application-template.md)
- Changed [Docs Are Hierarchical, Explicit And Short](standards/docs/docs-are-hierarchical-explicit-and-short.md)
- Changed [Docs State Knowledge](standards/docs/docs-state-knowledge.md)
- Changed [Documentation Philosophy](standards/docs/documentation-philosophy.md)
- Changed [Feature Spec Template](standards/docs/feature-spec-template.md)
- Changed [Feature Template](standards/docs/feature-template.md)
- Changed [File Names](standards/docs/file-names.md)
- Changed [Library Feedback](standards/docs/library-feedback.md)
- Changed [No Faux Headers In Lists](standards/docs/no-faux-headers-in-lists.md)
- Changed [UI Vocabulary](standards/docs/ui-vocabulary.md)
- Changed [Workspace Suite](standards/docs/workspace-suite.md)

### E2E

- Changed [Canvas Clicks by Coordinates](standards/e2e/canvas-clicks-by-coordinates.md)
- Changed [E2E Assert Before Interacting](standards/e2e/e2e-assert-before-interacting.md)
- Changed [E2E Mock Contract](standards/e2e/e2e-mock-contract.md)
- Changed [E2E Runs On The Development Build](standards/e2e/e2e-runs-on-the-development-build.md)
- Changed [E2E Test Conventions](standards/e2e/e2e-test-conventions.md)
- Changed [E2E Tests Must Demonstrate Behavior](standards/e2e/e2e-tests-must-demonstrate-behavior.md)
- Changed Init Scripts Need a Navigation
- Changed [Per-Feature Overview Test](standards/e2e/per-feature-overview-test.md)
- Changed [Real Input For Frame Races](standards/e2e/real-input-for-frame-races.md)
- Changed [Substring Locator Collisions](standards/e2e/substring-locator-collisions.md)
- Changed [Use the E2E Pipeline for Browser Probing](standards/e2e/use-the-e2e-pipeline-for-browser-probing.md)

### Electron

- Changed [Electron Packaging And Suite](standards/electron/electron-packaging-and-suite.md)
- Changed [Electron Shell Shape](standards/electron/electron-shell-shape.md)

### Gamedev

- Changed [Captures And Reels](standards/gamedev/captures-and-reels.md)
- Changed Code Based Sound
- Changed [Devbox](standards/gamedev/devbox.md)
- Changed [Game Design Laws](standards/gamedev/game-design-laws.md)
- Changed [Gamedev Working Cadence](standards/gamedev/gamedev-working-cadence.md)
- Changed [Own Icons](standards/gamedev/own-icons.md)
- Changed Pacing Docs
- Changed [Silent Runs](standards/gamedev/silent-runs.md)
- Changed [Sprite Sheet Frames](standards/gamedev/sprite-sheet-frames.md)
- Changed [Stabilize Before Adding](standards/gamedev/stabilize-before-adding.md)

### Records

- Changed [Activity Log](standards/records/activity-log.md)
- Changed [Changelog Per Version](standards/records/changelog-per-version.md)
- Changed [Playtest Files](standards/records/playtest-files.md)
- Changed [Request Log](standards/records/request-log.md)

### Reporting

- Changed [Change Report](standards/reporting/change-report.md)

### Scripts

- Changed [npm Script Naming](standards/scripts/npm-script-naming.md)
- Changed [Thin Wrappers in CI and Hooks](standards/scripts/thin-wrappers-in-ci-and-hooks.md)

### Security

- Changed [Never Access the Keychain](standards/security/never-access-the-keychain.md)

### Simple Workflow

- Changed [Bugs Template](standards/simple-workflow/bugs-template.md)
- Changed [Plan Template](standards/simple-workflow/plan-template.md)
- Changed [Plans vs Persistent Files](standards/simple-workflow/plans-vs-persistent-files.md)
- Changed [Remove Completed Items from Docs](standards/simple-workflow/remove-completed-items-from-docs.md)
- Changed [Roadmap Template](standards/simple-workflow/roadmap-template.md)
- Changed [Technical Debt Template](standards/simple-workflow/technical-debt-template.md)
- Changed [The Simple Workflow](standards/simple-workflow/the-simple-workflow.md)
- Changed [Todo Template](standards/simple-workflow/todo-template.md)

### Tests

- Changed [A Bug's Test Reproduces With Real Input](standards/tests/a-bugs-test-reproduces-with-real-input.md)
- Changed [Bracket State Changes With Contrast Assertions](standards/tests/bracket-state-changes-with-contrast-assertions.md)
- Changed [Implementation-Agnostic Assertions](standards/tests/implementation-agnostic-assertions.md)
- Changed [Implementation-Agnostic Locators](standards/tests/implementation-agnostic-locators.md)
- Changed [Realistic Test Data Variance](standards/tests/realistic-test-data-variance.md)
- Changed [Seed Surfaces Every State on Page 1](standards/tests/seed-surfaces-every-state-on-page-1.md)
- Changed [Test Design](standards/tests/test-design.md)

### Tickets Workflow

- Changed [Building A Ticket](standards/tickets-workflow/building-a-ticket.md)

### Tooling

- Changed [Browser Captures Go To Disk](standards/tooling/browser-captures-go-to-disk.md)
- Changed [Check Where A Pane Click Landed](standards/tooling/check-where-a-pane-click-landed.md)
- Changed [Defer Tooling Until The Cost Shows Up](standards/tooling/defer-tooling-until-the-cost-shows-up.md)
- Changed [Hygiene Tests Run on Their Own Runner](standards/tooling/hygiene-tests-run-on-their-own-runner.md)
- Changed [Kill a Lingering Playwright Server Before Captures](standards/tooling/kill-a-lingering-playwright-server-before-captures.md)
- Changed [Lightweight Test Reporting Only](standards/tooling/lightweight-test-reporting-only.md)
- Changed [Node Versions](standards/tooling/node-versions.md)
- Changed [Read Before You Truncate](standards/tooling/read-before-you-truncate.md)
- Changed Settings Changes Need a Fresh Session
- Changed [VitePress Wiki](standards/tooling/vitepress-wiki.md)

### TypeScript

- Changed [Always Add Explicit Types](standards/typescript/always-add-explicit-types.md)
- Changed [Barrel Imports](standards/typescript/barrel-imports.md)
- Changed [One Artifact Per File](standards/typescript/one-artifact-per-file.md)

### UI

- Changed [Communicate State](standards/ui/communicate-state.md)
- Changed [Never Obscure Information the User Needs](standards/ui/never-obscure-information-the-user-needs.md)
- Changed [Pixel-Perfect Design Check](standards/ui/pixel-perfect-design-check.md)
- Changed [UI Component Design](standards/ui/ui-component-design.md)
- Changed [UI Components First](standards/ui/ui-components-first.md)
- Changed [UI Layout via Slot Composition](standards/ui/ui-layout-via-slot-composition.md)
- Changed [UI Library Is Domain-Agnostic](standards/ui/ui-library-is-domain-agnostic.md)
- Changed [UI Refactor: Preserve, Don't Redesign](standards/ui/ui-refactor-preserve-dont-redesign.md)
- Changed [UI Styleguide](standards/ui/ui-styleguide.md)
- Changed [UI Variants By Function, Not By Color](standards/ui/ui-variants-by-function-not-by-color.md)
- Changed [Validation Errors Fire on Submit](standards/ui/validation-errors-fire-on-submit.md)
- Changed [Walk The User's Journey](standards/ui/walk-the-users-journey.md)

### Web

- Changed [Always Use Design Tokens for Colors](standards/web/always-use-design-tokens-for-colors.md)
- Changed [Dark Mode Through Tokens](standards/web/dark-mode-through-tokens.md)
- Changed [Hidden Attribute Loses To Display](standards/web/hidden-attribute-loses-to-display.md)
- Changed [SCSS Shared Partial Imports](standards/web/scss-shared-partial-imports.md)
- Changed [Transitions Only On User Toggle](standards/web/transitions-only-on-user-toggle.md)

## 0.0.1

The first version of coentrify. Nothing in it is stable yet.

- 187 standards in 21 modules, each module with an overview of its own
- Ten Read First standards, starting with Always Make No Mistakes
- The onboarding, the recommendations and the commands
- `coentrify.json`, with the version and the state of every standard a project takes
- Scripts and hooks in `tools/`

### AI

- Added [Match Known Commands Deterministically, Classify the Rest](standards/ai/match-known-commands-deterministically-classify-the-rest.md)
- Added [Prompt Small Models Differently](standards/ai/prompt-small-models-differently.md)

### Angular

- Added Angular Build Checks The Templates
- Added [canMatch + Wildcard for Route Access](standards/angular/canmatch-wildcard-for-route-access.md)
- Added [Interface, Not Abstract Class, For Mock Swap](standards/angular/interface-not-abstract-class-for-mock-swap.md)
- Added [No `$any` in Templates](standards/angular/no-any-in-templates.md)
- Added [No Inline Templates](standards/angular/no-inline-templates.md)
- Added [One Component per Folder, Flat](standards/angular/one-component-per-folder-flat.md)
- Added [One Projected Node Per Control-Flow Block](standards/angular/one-projected-node-per-control-flow-block.md)
- Added [Prefer Content Projection over Props (Angular)](standards/angular/prefer-content-projection-over-props-angular.md)
- Added [Projected Content Is Never Styled by the Host](standards/angular/projected-content-is-never-styled-by-the-host.md)
- Added [Static Attribute, Not Literal Binding](standards/angular/static-attribute-not-literal-binding.md)
- Added [Track Timed Items by an Id](standards/angular/track-timed-items-by-an-id.md)
- Added [UI Copy in Template](standards/angular/ui-copy-in-template.md)
- Added [Use Modern Angular Template APIs](standards/angular/use-modern-angular-template-apis.md)

### Architecture

- Added [Adopt, Configure, Override](standards/architecture/adopt-configure-override.md)
- Added [App-Shield](standards/architecture/app-shield.md)
- Added [Converge Only Once Proven](standards/architecture/converge-only-once-proven.md)
- Added [Folder Concerns](standards/architecture/folder-concerns.md)
- Added Interceptor Ordering
- Added [Per-Application Split Over Shared Branching](standards/architecture/per-application-split-over-shared-branching.md)
- Added [Separation Before Layer Standards](standards/architecture/separation-before-layer-standards.md)

### Behavior

- Added [A Go Before Work Elsewhere](standards/behavior/a-go-before-work-elsewhere.md)
- Added [A Maybe Is A Trigger To Investigate](standards/behavior/a-maybe-is-a-trigger-to-investigate.md)
- Added [A Quiet Tree While A Suite Runs](standards/behavior/a-quiet-tree-while-a-suite-runs.md)
- Added [Always Make No Mistakes](standards/behavior/always-make-no-mistakes.md)
- Added [Always Verify Before Reporting Done](standards/behavior/always-verify-before-reporting-done.md)
- Added [Always Work from a Plan](standards/behavior/always-work-from-a-plan.md)
- Added [Anchor Edits After Formatting](standards/behavior/anchor-edits-after-formatting.md)
- Added [Backward-Trace Missing Prerequisites](standards/behavior/backward-trace-missing-prerequisites.md)
- Added [Code Review Compounds Into Patterns and Sweeps](standards/behavior/code-review-compounds-into-patterns-and-sweeps.md)
- Added [Communication Boundary](standards/behavior/communication-boundary.md)
- Added Decide, Don't Wait
- Added [Dev Tiers](standards/behavior/dev-tiers.md)
- Added [Docs Hold Only What the Director Decided](standards/behavior/docs-hold-only-what-the-director-decided.md)
- Added [Don't Filter Data Without a Spec](standards/behavior/dont-filter-data-without-a-spec.md)
- Added [Don't Introduce Tech Debt](standards/behavior/dont-introduce-tech-debt.md)
- Added [Feature Workflow](standards/behavior/feature-workflow.md)
- Added [Flag Every Addition of Your Own](standards/behavior/flag-every-addition-of-your-own.md)
- Added [Free Text Replies, No Buttons](standards/behavior/free-text-replies-no-buttons.md)
- Added [General Working Rules](standards/behavior/general-working-rules.md)
- Added Honest Assessments
- Added [Non-Destructive Documenting and Test Automation](standards/behavior/non-destructive-documenting-and-test-automation.md)
- Added [Normal Dashes](standards/behavior/normal-dashes.md)
- Added [Note Issues](standards/behavior/note-issues.md)
- Added [Own Ports, Own Processes](standards/behavior/own-ports-own-processes.md)
- Added [Project Lifecycle](standards/behavior/project-lifecycle.md)
- Added [Propagate Renames and Convention Changes Everywhere](standards/behavior/propagate-renames-and-convention-changes-everywhere.md)
- Added [Prose Style](standards/behavior/prose-style.md)
- Added [Prototype Mode Is Speed First](standards/behavior/prototype-mode-is-speed-first.md)
- Added [Regular Layered Gap Analysis](standards/behavior/regular-layered-gap-analysis.md)
- Added [Reload The Standards After Compacting](standards/behavior/reload-the-standards-after-compacting.md)
- Added [Review Changes Before Reporting Done](standards/behavior/review-changes-before-reporting-done.md)
- Added [Review Every Capture Before Reporting](standards/behavior/review-every-capture-before-reporting.md)
- Added [Standards Maintenance](standards/behavior/standards-maintenance.md)
- Added [Standards Over Skills](standards/behavior/standards-over-skills.md)
- Added [Sweeps Enumerate Into Tech-Debt First](standards/behavior/sweeps-enumerate-into-tech-debt-first.md)
- Added [Sync The Docs After Every Change](standards/behavior/sync-the-docs-after-every-change.md)
- Added [The Quality Of The Question](standards/behavior/the-quality-of-the-question.md)
- Added [Understand The Need](standards/behavior/understand-the-need.md)
- Added [Use US English Everywhere](standards/behavior/use-us-english-everywhere.md)
- Added [Verify APIs Against Docs And The Installed Artifact](standards/behavior/verify-apis-against-docs-and-the-installed-artifact.md)
- Added [Verify Control Before Rename](standards/behavior/verify-control-before-rename.md)

### Code

- Added [Code Principles](standards/code/code-principles.md)
- Added [Escape Hatch Comments](standards/code/escape-hatch-comments.md)
- Added [Name by Concept, Not Copy](standards/code/name-by-concept-not-copy.md)
- Added [No Abbreviated Names](standards/code/no-abbreviated-names.md)
- Added [No Describe-What Comments](standards/code/no-describe-what-comments.md)
- Added [Pre-empt Recurring Code-Review Nits](standards/code/pre-empt-recurring-code-review-nits.md)

### Commits

- Added [Commits](standards/commits/commits.md)
- Added [Gate Commits on Exit Codes](standards/commits/gate-commits-on-exit-codes.md)
- Added [Main Stays Green, Work Stays Clean](standards/commits/main-stays-green-work-stays-clean.md)
- Added [Verify Staging Before Committing](standards/commits/verify-staging-before-committing.md)

### Docs

- Added [Application Template](standards/docs/application-template.md)
- Added [Docs Are Hierarchical, Explicit And Short](standards/docs/docs-are-hierarchical-explicit-and-short.md)
- Added [Docs Describe Behavior, Not Wiring](standards/docs/docs-describe-behavior-not-wiring.md)
- Added [Docs Folder Structure](standards/docs/docs-folder-structure.md)
- Added [Docs State Knowledge](standards/docs/docs-state-knowledge.md)
- Added [Documentation Philosophy](standards/docs/documentation-philosophy.md)
- Added [Feature Spec Template](standards/docs/feature-spec-template.md)
- Added [Feature Template](standards/docs/feature-template.md)
- Added [File Names](standards/docs/file-names.md)
- Added [Library Feedback](standards/docs/library-feedback.md)
- Added [No Faux Headers In Lists](standards/docs/no-faux-headers-in-lists.md)
- Added [UI Vocabulary](standards/docs/ui-vocabulary.md)
- Added [Workspace Suite](standards/docs/workspace-suite.md)
- Added [Workspace Template](standards/docs/workspace-template.md)

### E2E

- Added [Canvas Clicks by Coordinates](standards/e2e/canvas-clicks-by-coordinates.md)
- Added [E2E Assert Before Interacting](standards/e2e/e2e-assert-before-interacting.md)
- Added [E2E Mock Contract](standards/e2e/e2e-mock-contract.md)
- Added [E2E Runs On The Development Build](standards/e2e/e2e-runs-on-the-development-build.md)
- Added [E2E Test Conventions](standards/e2e/e2e-test-conventions.md)
- Added [E2E Tests Must Demonstrate Behavior](standards/e2e/e2e-tests-must-demonstrate-behavior.md)
- Added Init Scripts Need a Navigation
- Added [Per-Feature Overview Test](standards/e2e/per-feature-overview-test.md)
- Added [Real Input For Frame Races](standards/e2e/real-input-for-frame-races.md)
- Added [Substring Locator Collisions](standards/e2e/substring-locator-collisions.md)
- Added [Use the E2E Pipeline for Browser Probing](standards/e2e/use-the-e2e-pipeline-for-browser-probing.md)

### Electron

- Added [Electron Packaging And Suite](standards/electron/electron-packaging-and-suite.md)
- Added [Electron Shell Shape](standards/electron/electron-shell-shape.md)

### Gamedev

- Added [Captures And Reels](standards/gamedev/captures-and-reels.md)
- Added Code Based Sound
- Added [Devbox](standards/gamedev/devbox.md)
- Added [Game Design Laws](standards/gamedev/game-design-laws.md)
- Added [Game Design Laws: Experience](standards/gamedev/game-design-laws-experience.md)
- Added [Game Design Laws: Progress](standards/gamedev/game-design-laws-progress.md)
- Added [Game Design Laws: Story](standards/gamedev/game-design-laws-story.md)
- Added [Game Design Laws: UI](standards/gamedev/game-design-laws-ui.md)
- Added [Game Phases](standards/gamedev/game-phases.md)
- Added [Game Work Workflow](standards/gamedev/game-work-workflow.md)
- Added [Gamedev Working Cadence](standards/gamedev/gamedev-working-cadence.md)
- Added [Own Icons](standards/gamedev/own-icons.md)
- Added Pacing Docs
- Added [Silent Runs](standards/gamedev/silent-runs.md)
- Added [Sprite Sheet Frames](standards/gamedev/sprite-sheet-frames.md)
- Added [Stabilize Before Adding](standards/gamedev/stabilize-before-adding.md)
- Added Visual Design

### Records

- Added [Activity Log](standards/records/activity-log.md)
- Added [Changelog Per Version](standards/records/changelog-per-version.md)
- Added [Playtest Files](standards/records/playtest-files.md)
- Added [Request Log](standards/records/request-log.md)

### Reporting

- Added [Change Report](standards/reporting/change-report.md)
- Added [Reels And Video Proof](standards/reporting/reels-and-video-proof.md)

### Scripts

- Added [No npx in Scripts](standards/scripts/no-npx-in-scripts.md)
- Added [npm Script Naming](standards/scripts/npm-script-naming.md)
- Added [Thin Wrappers in CI and Hooks](standards/scripts/thin-wrappers-in-ci-and-hooks.md)

### Security

- Added [Never Access the Keychain](standards/security/never-access-the-keychain.md)

### Simple Workflow

- Added [Bugs Template](standards/simple-workflow/bugs-template.md)
- Added [Plan Template](standards/simple-workflow/plan-template.md)
- Added [Plans vs Persistent Files](standards/simple-workflow/plans-vs-persistent-files.md)
- Added [Remove Completed Items from Docs](standards/simple-workflow/remove-completed-items-from-docs.md)
- Added [Roadmap Template](standards/simple-workflow/roadmap-template.md)
- Added [Technical Debt Template](standards/simple-workflow/technical-debt-template.md)
- Added [The Simple Workflow](standards/simple-workflow/the-simple-workflow.md)
- Added [Todo Template](standards/simple-workflow/todo-template.md)

### Tests

- Added [A Bug's Test Reproduces With Real Input](standards/tests/a-bugs-test-reproduces-with-real-input.md)
- Added [Bracket State Changes With Contrast Assertions](standards/tests/bracket-state-changes-with-contrast-assertions.md)
- Added [Gestures In Tests](standards/tests/gestures-in-tests.md)
- Added [Implementation-Agnostic Assertions](standards/tests/implementation-agnostic-assertions.md)
- Added [Implementation-Agnostic Locators](standards/tests/implementation-agnostic-locators.md)
- Added [Realistic Test Data Variance](standards/tests/realistic-test-data-variance.md)
- Added [Seed Surfaces Every State on Page 1](standards/tests/seed-surfaces-every-state-on-page-1.md)
- Added [Test Design](standards/tests/test-design.md)

### Tickets Workflow

- Added [Agent Roles](standards/tickets-workflow/agent-roles.md)
- Added [Building A Ticket](standards/tickets-workflow/building-a-ticket.md)
- Added [The Conductor](standards/tickets-workflow/the-conductor.md)
- Added [The Done Part](standards/tickets-workflow/the-done-part.md)
- Added [Ticket Template](standards/tickets-workflow/ticket-template.md)
- Added [Work Item Names](standards/tickets-workflow/work-item-names.md)
- Added [Work Tracking](standards/tickets-workflow/work-tracking.md)
- Added [Work Workflow](standards/tickets-workflow/work-workflow.md)
- Added [Writing A Ticket](standards/tickets-workflow/writing-a-ticket.md)

### Tooling

- Added [Browser Captures Go To Disk](standards/tooling/browser-captures-go-to-disk.md)
- Added [Check Where A Pane Click Landed](standards/tooling/check-where-a-pane-click-landed.md)
- Added [Defer Tooling Until The Cost Shows Up](standards/tooling/defer-tooling-until-the-cost-shows-up.md)
- Added [Develop Against Mocks](standards/tooling/develop-against-mocks.md)
- Added [Hygiene Tests Run on Their Own Runner](standards/tooling/hygiene-tests-run-on-their-own-runner.md)
- Added [Kill a Lingering Playwright Server Before Captures](standards/tooling/kill-a-lingering-playwright-server-before-captures.md)
- Added [Lightweight Test Reporting Only](standards/tooling/lightweight-test-reporting-only.md)
- Added [Node Versions](standards/tooling/node-versions.md)
- Added [Parallel Agents](standards/tooling/parallel-agents.md)
- Added [Playwright Parallel Runs](standards/tooling/playwright-parallel-runs.md)
- Added [Playwright Video Recording](standards/tooling/playwright-video-recording.md)
- Added [Read Before You Truncate](standards/tooling/read-before-you-truncate.md)
- Added Settings Changes Need a Fresh Session
- Added [VitePress Wiki](standards/tooling/vitepress-wiki.md)

### TypeScript

- Added [Always Add Explicit Types](standards/typescript/always-add-explicit-types.md)
- Added [Barrel Imports](standards/typescript/barrel-imports.md)
- Added [No Magic Values](standards/typescript/no-magic-values.md)
- Added [One Artifact Per File](standards/typescript/one-artifact-per-file.md)

### UI

- Added [Communicate State](standards/ui/communicate-state.md)
- Added [Never Obscure Information the User Needs](standards/ui/never-obscure-information-the-user-needs.md)
- Added [Pixel-Perfect Design Check](standards/ui/pixel-perfect-design-check.md)
- Added [UI Component Design](standards/ui/ui-component-design.md)
- Added [UI Components First](standards/ui/ui-components-first.md)
- Added [UI Layout via Slot Composition](standards/ui/ui-layout-via-slot-composition.md)
- Added [UI Library Is Domain-Agnostic](standards/ui/ui-library-is-domain-agnostic.md)
- Added [UI Refactor: Preserve, Don't Redesign](standards/ui/ui-refactor-preserve-dont-redesign.md)
- Added [UI Styleguide](standards/ui/ui-styleguide.md)
- Added [UI Variants By Function, Not By Color](standards/ui/ui-variants-by-function-not-by-color.md)
- Added [Validation Errors Fire on Submit](standards/ui/validation-errors-fire-on-submit.md)
- Added [Walk The User's Journey](standards/ui/walk-the-users-journey.md)

### Web

- Added [Always Use Design Tokens for Colors](standards/web/always-use-design-tokens-for-colors.md)
- Added [Dark Mode Through Tokens](standards/web/dark-mode-through-tokens.md)
- Added [Hidden Attribute Loses To Display](standards/web/hidden-attribute-loses-to-display.md)
- Added [SCSS Shared Partial Imports](standards/web/scss-shared-partial-imports.md)
- Added [Transitions Only On User Toggle](standards/web/transitions-only-on-user-toggle.md)
