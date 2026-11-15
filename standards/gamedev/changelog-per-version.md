# Changelog Per Version

Every version gets its own page in `docs/records/changelog/<version>.md`, listed newest on top in the wiki. Its list is a view the wiki generates from the tickets that landed in the version, so no builder appends to it and no conductor keeps it.

## Why

The changelog is the list the director plays a version against: which tickets landed in it. Each ticket holds its summary and its proof, so the changelog says it once by linking them. A generated list also never conflicts between builders landing in parallel.

## The Page

- The H1 carries the DEV day as a suffix, the way the log's does: `# 0.0.33 - DEV day 13`, so the wiki's menu shows it. A page in progress carries the day it is being worked on, retitled the morning a new day starts on it, and the tag day at the close.
- The header, kept by hand, names the tag date with its DEV day and whether the build was packaged.
- Under it, the generated list: every ticket that landed in the version, workspace tickets included, in landing order, each line its id and its link, `- FEAT-214: [Blueprint Glows Until Plans Open](/tickets/FEAT-214)`.
- A ticket belongs to the version whose tag first holds its landing commit; one landed after the last tag lists under the version in progress.
- An in-game "What's New", where a game has one, shows the player-facing tickets alone, never the workspace's or a secret.

## Versions

- Every batch of work closes with a version: the closing commit is tagged `v<version>`.
- The bump and the next page wait for the next version's first landing, which bumps the app and creates the page with its header; an unused version gets deleted.

## Related

- [Work Tracking](../tickets-workflow/work-tracking.md)
- [Captures And Reels](captures-and-reels.md)
- [Playtest Files](playtest-files.md)
- [Change Report](../reporting/change-report.md)
