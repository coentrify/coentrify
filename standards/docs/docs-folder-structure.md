# Docs Folder Structure

A project's docs live at `docs/`, the main entry point and the wiki's root. Each folder has one job.

## Root

- `overview.md` - what the product is, functional only.
- `architecture.md` - the technical wiring.
- Nothing feature-specific or work-tracking sits at the root.

## Knowledge

- `docs/features/` - the feature docs: the product as decided ([Feature Template](feature-template.md)).
- `docs/workspace/` - the cross-cutting concern docs as flat files: `authentication.md`, `design-system.md`, `testing.md` and the like ([Workspace Template](workspace-template.md)).

## Work

- `docs/development/` - all work tracking: tickets, plan, refine list, roadmap and the archive ([Work Tracking](../tickets-workflow/work-tracking.md)).

## Records

All records sit together under `docs/records/`, one group in the wiki with an `overview.md` listing them. Each record folder is a dated trail, written as things happen; its shape lives in its own memory.

- `docs/records/log/` - everything the director says, one file per day ([Request Log](../records/request-log.md)).
- `docs/records/activity/` - the work done, one file per day ([Activity Log](../records/activity-log.md)).
- `docs/records/playtests/` - one file per playtest ([Playtest Files](../gamedev/playtest-files.md)).
- `docs/records/changelog/` - one page per version ([Changelog Per Version](../gamedev/changelog-per-version.md)).
- Any other dated trail a project keeps, such as the agent's ideas or the outside playtesters' pages, joins them under `docs/records/`, never at the docs root.

## Why

Every folder answering one question - what the product is, what is being worked on, what happened - keeps the wiki sidebar scannable and tells a reader where a fact belongs before they look. The records grouped under one folder read as one thing in the sidebar; spread over the docs root they crowd it.

## Related

- [Docs Are Hierarchical, Explicit And Short](docs-are-hierarchical-explicit-and-short.md)
