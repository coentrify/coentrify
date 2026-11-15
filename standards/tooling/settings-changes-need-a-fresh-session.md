# Settings Changes Need a Fresh Session

Permission rules in `settings.json` (user-level and project-level) are read once at session start. Editing them mid-session - adding an allow, removing a deny - does NOT change what the running session permits; the old rules stay in force until a new session loads the file.

## Why

The running session never rereads the file, so even a correct edit, such as removing a `Bash(git push *)` deny, changes nothing until the next session.

## How to apply

When a denied or ungranted action blocks the current task, don't edit settings and retry in the same session expecting it to work, and don't promise that a later message in the same session will succeed after the edit. Either run the action in a fresh session, or have the user run it.
