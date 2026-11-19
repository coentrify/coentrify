# Change Report

When a unit of work is done - a fixed bug, a resolved finding, an improvement, a new or changed feature - write a short report a teammate can read in two minutes and trust. It shows the problem with proof, where it lived, why it happened, what else it touched, and the fix with the same proof. For a feature it shows the old flow, what changed, and the user benefit.

## Why

A change report proves a change and shows how far it spread, so the work is reviewed without running it again.

## Section Shape

- Headline + one-sentence hook - what was wrong (or what's new) and what changed.
- TLDR - what / where / fix, three lines, in a callout.
- The Problem (feature: *Before*) - what the user saw, with a screenshot.
- Context & Reproduction - conditions, where it appears, steps, expected vs actual.
- Analysis - root cause in a sentence or two. A bug is smoke, name the fire.
- The Sweep - grep for siblings of the same pattern. Record what else was affected (screenshots) and what was verified clean. This is what earns trust.
- The Fix (feature: *After*) - what changed, with before/after images at every location the sweep named.
- Verification - how it was confirmed: test added, e2e, type check, manual. Never an unconfirmed fix.
- Impact (feature: *Benefit*, led with) - user-facing effect, plus follow-ups linked out.
- References - feature/spec/use-case/bug/PR, and related reports.

Drop sections that don't apply. Screenshots over prose. Videos only when the point is motion. Name files and slugs by concept, not translated UI copy.

## Deliverable

Where a project keeps a changelog per version, that page is the record and this report is not written ([Changelog Per Version](../records/changelog-per-version.md)). Elsewhere the report is a page in the docs wiki, kept so the team can always go back and see what changed: a per-target changelog with a curated newest-first index, entry pages dated and slugged, screenshots stored alongside. A project keeps its own mechanics for this (wiki paths, asset folder, index format) in its docs.

## How to Apply

- Reach for this when picking an item off a bugs list, recording a finding, or finishing a feature.
- Only product changes are entries: what the user of the product sees or does differently. Changes to the wiki, the capture and reel scripts, lint or hooks are not changelog entries. Their commit is the record.
- Run the enumerate-first sweep before declaring the pattern closed.
- Capture proof and verify before reporting.
- Never soften a state in the proof.

## Related

- [Sweeps Enumerate Into Tech-Debt First](../behavior/sweeps-enumerate-into-tech-debt-first.md)
- [Don't Filter Data Without a Spec](../behavior/dont-filter-data-without-a-spec.md)
- [Never Obscure Information the User Needs](../ui/never-obscure-information-the-user-needs.md)
- [Always Verify Before Reporting Done](../behavior/always-verify-before-reporting-done.md)
- [Reels And Video Proof](reels-and-video-proof.md)
- [Name by Concept, Not Copy](../code/name-by-concept-not-copy.md)
