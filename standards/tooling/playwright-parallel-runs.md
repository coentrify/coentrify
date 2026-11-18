# Playwright Parallel Runs

## Why

Runs on a shared machine should not get in each other's way, and each should end in a result that can be trusted.

## On A Shared Machine

- Every agent's Playwright run uses `--workers=1` and only the touched spec; no more than about four agents run suites at once. Agents on default workers overload the machine and lag the director's typing.
- When the machine is loaded, the agents on debt pause first.
- An agent never adds load of its own making, busy loops or CPU burners, to reproduce or steady a flaky case ([Main Stays Green, Work Stays Clean](../commits/main-stays-green-work-stays-clean.md)).

## A Full Suite In Two Halves

A full browser suite that outlasts a background command's ten-minute cap is killed before its exit code arrives, and a killed run proves nothing. Split it:

- Two halves, on two ports, in two background commands at once, each under the cap and each gated on its own exit code.
- Each half gets its own output folder (`--output`) and its own html report folder (`PLAYWRIGHT_HTML_OUTPUT_DIR`); two runs sharing Playwright's artifact folder delete each other's traces.
- The halves share one build: the first half's web server builds, and the second half gets a static server of its own on that output, started once the build is up. Two web servers building into the same folder at once collide.
- Never point a half at the other half's server, which stops when that half ends.
- A case that fails under that load and passes alone is a flaky case ([Main Stays Green, Work Stays Clean](../commits/main-stays-green-work-stays-clean.md)).

## Related

- [Kill a Lingering Playwright Server Before Captures](kill-a-lingering-playwright-server-before-captures.md)
- [Gate Commits on Exit Codes](../commits/gate-commits-on-exit-codes.md)
