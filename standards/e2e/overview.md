# Overview

The E2E standards: end-to-end tests.

- [E2E Assert Before Interacting](e2e-assert-before-interacting.md) - assert presence before interacting
- [E2E Mock Contract](e2e-mock-contract.md) - mock scenario constants shared through one const file
- [E2E Runs On The Development Build](e2e-runs-on-the-development-build.md) - suites run on the development build, never a production build
- [E2E Test Conventions](e2e-test-conventions.md) - one spec per feature, use-case titles, @use-case tags
- [E2E Tests Must Demonstrate Behavior](e2e-tests-must-demonstrate-behavior.md) - watch the video; cover contrast cases
- [One Check For Many Canvas Clicks](one-check-for-many-canvas-clicks.md) - many canvas clicks get one visibility check, then go through page.mouse
- [Per-Feature Overview Test](per-feature-overview-test.md) - every spec ends with a one-take overview test
- [Real Input For Frame Races](real-input-for-frame-races.md) - frame races need real mouse input, not dispatched events
- [Substring Locator Collisions](substring-locator-collisions.md) - new UI text can collide with substring locators
- [Use the E2E Pipeline for Browser Probing](use-the-e2e-pipeline-for-browser-probing.md) - probe live DOM through a Playwright spec, not ad-hoc scripts
