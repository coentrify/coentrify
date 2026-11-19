# Overview

The Tooling standards: development tools.

- [Browser Captures Go To Disk](browser-captures-go-to-disk.md) - base64 captures go to disk through a script, never by hand
- [Check Where A Pane Click Landed](check-where-a-pane-click-landed.md) - check where a pane click landed before calling a control broken
- [Defer Tooling Until The Cost Shows Up](defer-tooling-until-the-cost-shows-up.md) - add heavy tooling only once its absence costs something
- [Develop Against Mocks](develop-against-mocks.md) - develop against a committed, toggleable mock layer
- [Hygiene Tests Run On Their Own Runner](hygiene-tests-run-on-their-own-runner.md) - hygiene checks run as plain vitest specs on their own runner
- [Lightweight Test Reporting Only](lightweight-test-reporting-only.md) - lightweight test reporting only
- [Node Versions](node-versions.md) - even Node majors only
- [Parallel Agents](parallel-agents.md) - a git worktree, an e2e port and a scratchpad per agent. Reset to main first, commit then rebase, builders on the cheaper model, land through pick.sh and main-checks.sh, clean up only after git cherry
- [Playwright Parallel Runs](playwright-parallel-runs.md) - one worker per agent run, and a long suite runs as two halves
- [Playwright Video Recording](playwright-video-recording.md) - video options per file, and variants share one flow function
- [Read Before You Truncate](read-before-you-truncate.md) - read a file into a variable before opening it for write
- [Start Playwright On A Clean Port](start-playwright-on-a-clean-port.md) - lsof the e2e port before a run, since reuseExistingServer takes anything
- [VitePress Wiki](vitepress-wiki.md) - the docs wiki on its own port, open at session start
