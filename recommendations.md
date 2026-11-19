# Recommendations

Recommendations and considerations for adopting coentrify.

- Standards - which modules a project adopts
- Workflow - how the work is tracked
- Records - which dated trails the project keeps
- Wiki - whether the docs are served as a wiki
- Healing - who strengthens the harness after a mistake
- Folders - where the docs and the standards go

## Standards

### Always

- Behavior - how an agent works and what an agent checks, with the Core Rules in it
- Docs - documentation rules and templates

Normal Dashes and Prose Style are taste. Coentrify recommends both, because docs that sound like AI annoy a human reader fast, and a project can leave them out.

Use US English Everywhere is a choice. One variant everywhere is what counts, and a project that writes UK English overrides the standard with its own.

### When The Stack Fits

- Code - any codebase
- Architecture - a codebase with more than one application or layer
- Tests - a project that has tests, or needs them
- TypeScript - a TypeScript codebase
- Angular - an Angular application
- Web - a project that runs in a browser, for the rules about HTML and CSS
- UI - a project with a user interface
- E2E - a project with a browser interface
- Electron - an Electron application
- Tooling - a project with a dev server, a wiki or browser tests
- Scripts - a project that runs on npm scripts
- AI - a project that builds with models

### Picked By The Director

- Gamedev - a game, where the director picks the game design laws that apply
- Reporting - a project whose director wants reports and reels
- Commits - how work is committed and gated. The module is strongly opinionated, so the director decides which of its standards to adopt

## Workflow

- Simple - recommended for a small project, a proof of concept or a prototype
- Tickets - recommended for a medium or larger project

Tracking the work is part of coentrify, and a workflow is strongly recommended.

- Where the work lives outside the repository, such as in Jira, the Simple workflow is recommended, with its lists left out of version control.
- Where the project already has a different or better system, adopt that system.
- Hook the entry points for debt, bugs and inbox items into the system that is used, so every finding has a place to go.

## Records

A record is a dated trail, written as things happen. An agent starts every session without the last one, so records are how a project remembers.

- [Request log](standards/records/request-log.md) - everything the director asks, a page per day, so nothing that was asked gets lost
- [Activity log](standards/records/activity-log.md) - the work that was done, a page per day that opens like a standup, so the director catches up at a glance
- [Changelog](standards/records/changelog-per-version.md) - a page per version, so everyone sees what landed
- [Healing log](standards/records/healing-log.md) - every change automatic healing made, so the director can rule on each one later
- [Playtests](standards/records/playtest-files.md) - a page per playtest of a game, so feedback turns into work
- User tests - the same for a product, a page per session with real users

Which records to keep depends on the project.

- A changelog is recommended for every project that ships versions.
- The healing log is recommended for every project whose healing is automatic.
- Playtests or user tests are recommended as soon as other people try the product.
- The request log and the activity log are recommended for a long-running project.
- No records are recommended for a proof of concept or a prototype.

Records also keep their value. A newer or better model can go back through the records, find patterns and hidden gems, and improve the system. That use is optional.

## Wiki

- A wiki - recommended for every project that keeps docs, built with VitePress or a similar tool
- No wiki - for a project too small to need one

## Healing

A caught mistake strengthens the harness: a rule gets sharper, or a check is added. `healing` in `coentrify.json` says who makes that change.

- Automatic - recommended: a subagent makes the change outside the task at hand, logs it in the healing log, and the report names it for a veto
- Review - the change is filed in the project's workflow, and waits for the director

### Filing

A contributor also files a change that holds beyond the project with coentrify ([File A Change With Coentrify](standards/behavior/file-a-change-with-coentrify.md)). `filing` says who files it.

- Review - recommended: the director looks at the issue before it is filed, since the source is public
- Automatic - the subagent files it on its own

## Folders

- `docs` - the docs
- `standards` - the standards
