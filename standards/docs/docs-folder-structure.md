# Docs Folder Structure

A project's docs live at `docs/`, the main entry point and the wiki's root. Each folder has one job.

## Why

Every folder answers one question, so a reader knows where a fact belongs before looking.

## Root

- `overview.md` - what the product is, functional only.
- `architecture.md` - the technical wiring.
- Nothing feature-specific or work-tracking sits at the root.

## Knowledge

- `docs/features/` - the feature docs: the product as decided ([Feature Template](feature-template.md)).
- `docs/workspace/` - the cross-cutting concern docs as flat files: `authentication.md`, `design-system.md`, `testing.md` and the like ([Workspace Template](workspace-template.md)).

## Work

- `docs/development/` - all work tracking, whichever the workflow: the lists of the simple workflow ([The Simple Workflow](../simple-workflow/the-simple-workflow.md)), or the tickets, their generated lists and the archive ([Work Tracking](../tickets-workflow/work-tracking.md)).

## Records

All records sit together under `docs/records/`, one group in the wiki with an `overview.md` listing them. Each record folder is a dated trail, written as things happen. Its shape lives in its own standard.

- `docs/records/log/` - everything the director says, one file per day ([Request Log](../records/request-log.md)).
- `docs/records/activity/` - the work done, one file per day ([Activity Log](../records/activity-log.md)).
- `docs/records/playtests/` - one file per playtest of a game ([Playtest Files](../records/playtest-files.md)).
- `docs/records/user-tests/` - one file per session with real users ([User Test Files](../records/user-test-files.md)).
- `docs/records/changelog/` - one page per version ([Changelog Per Version](../records/changelog-per-version.md)).
- Any other dated trail a project keeps joins them under `docs/records/`, never at the docs root.

## Related

- [Docs Are Hierarchical, Explicit And Short](docs-are-hierarchical-explicit-and-short.md)
