# Recommendations

Recommendations and considerations for adopting coentrify.

- Standards - which modules a project adopts
- Workflow - how the work is tracked
- Records - which dated trails the project keeps
- Wiki - whether the docs are served as a wiki
- Folders - where the docs and the standards go

## Standards

### Always

- Behavior - how an agent works and what an agent checks, with [Always Make No Mistakes](standards/behavior/always-make-no-mistakes.md) first
- Docs - documentation rules and templates

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

## Workflow

- Simple - recommended for a small project, a proof of concept or a prototype
- Tickets - recommended for a medium or larger project

Tracking the work is part of coentrify, and a workflow is strongly recommended.

- Where the work lives outside the repository, such as in Jira, the Simple workflow is recommended, with its lists left out of version control.
- Where the project already has a different or better system, adopt that system.
- Hook the entry points for debt, bugs and inbox items into the system that is used, so every finding has a place to go.

## Records

A record is a dated trail, written as things happen. An agent starts every session without the last one, so records are how a project remembers.

- Request log - everything the director asks, a page per day, so nothing that was asked gets lost
- Activity log - the work that was done, a page per day that opens like a standup, so the director catches up at a glance
- Changelog - a page per version, so everyone sees what landed
- Playtests - a page per playtest of a game, so feedback turns into work
- User tests - the same for a product, a page per session with real users

Which records to keep depends on the project.

- A changelog is recommended for every project that ships versions.
- Playtests or user tests are recommended as soon as other people try the product.
- The request log and the activity log are recommended for a long-running project.
- No records are recommended for a proof of concept or a prototype.

Records also keep their value. A newer or better model can go back through the records, find patterns and hidden gems, and improve the system. That use is optional.

## Wiki

- A wiki - recommended for every project that keeps docs
- No wiki - for a project too small to need one

## Folders

- `docs` - the docs
- `standards` - the standards
