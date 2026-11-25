# The DEV Day

Every dated record carries the DEV day: the count of days with a commit, read from git, since the first day an agent worked on the project.

## Why

A record names where it stands in the project's life, and a session past midnight stays on the day it started.

## How To Apply

- The DEV day counts the days with a commit, read from git, since the first day an agent worked on the project. Earlier days count as proof of concept (POC) days.
- The day turns at 04:00 local time, its date included: a request at 00:30 goes on the page of the day before.
- Every dated record carries it: the request log, the activity log, the playtests, the user tests and the changelog.
- A project that keeps any of them adopts this standard with it.
- The request log's page and its DEV day are picked by code, never by hand, through the append script built from the Log Append spec in the tools ([Request Log](request-log.md)).

## Related

- [Request Log](request-log.md)
- [Activity Log](activity-log.md)
- [Playtest Files](playtest-files.md)
- [User Test Files](user-test-files.md)
- [Changelog Per Version](changelog-per-version.md)
