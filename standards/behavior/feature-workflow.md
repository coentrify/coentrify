# Feature Workflow

Every new product feature follows this pipeline. Identify the next step, verify its prerequisite, run it, commit.

## Why

A feature is built on intent and context, never on guesses.

## The Pipeline

- Plan ([Always Work from a Plan](always-work-from-a-plan.md)).
- Functional doc at `docs/features/<feature>.md` ([Feature Template](../docs/feature-template.md)).
- Spec at `docs/features/<feature>.spec.md` ([Feature Spec Template](../docs/feature-spec-template.md)).
- E2E tests, failing first ([E2E Test Conventions](../e2e/e2e-test-conventions.md)).
- Implement use case by use case, in mock state ([Develop Against Mocks](../tooling/develop-against-mocks.md)).
- Regression-test the affected area.
- Proof: a screenshot, a video, a test run or whatever fits, that tells the user the feature is done and lets them verify it themselves. Proof the user cannot check is no proof ([Reels And Video Proof](../reporting/reels-and-video-proof.md)).

The laws a project adopted are weighed in the spec, in a step of their own, and small steps keep the focus.

Doc, spec and e2e steps are observation only - no production-code edits ([Non-Destructive Documenting and Test Automation](non-destructive-documenting-and-test-automation.md)).

Commit at each step boundary on the work's branch ([Commits](../commits/commits.md)); never blend steps. The steps land on main together, green ([Main Stays Green, Work Stays Clean](../commits/main-stays-green-work-stays-clean.md)). If a prerequisite is missing, park and recurse ([Backward-Trace Missing Prerequisites](backward-trace-missing-prerequisites.md)).
