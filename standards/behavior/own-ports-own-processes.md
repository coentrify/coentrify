# Own Ports, Own Processes

Every server the agent starts (dev server, preview, e2e web server) runs on a port of its own, and the agent only ever stops what it started.

## Why

The user is running the project too: the thing being tested is usually the thing they are using.

## Own Ports

- Each project gets a fixed, random 5-digit port (e.g. `41737`) for the agent's servers, stable so launch configs and tooling can rely on it, and different per project so parallel agents never collide.
- The framework's default port stays free for the user, who tests the build by hand with a separate `npm start`.
- Never fall back to the default port, and never reuse a server that already listens on a port: it may be the user's app, another project, or stale code.
- A session in a worktree can find the launch config's port taken by another session's server; it adds an entry of its own on a free port for the run and leaves that entry out of the commit.

## Kill Only Your Own

- Capture `$!` when you background a process, and kill that PID.
- If you must match by pattern, make the pattern yours: a distinctive port or env var, and match on that.
- Before any `pkill`, run the equivalent `pgrep -fl` and read what would die.
- Never free a port by killing whatever listens on it; start your own on another port instead.
- When you do kill something of theirs, say so plainly and restart it before continuing.

### Why

A pattern kill that looks local can hit a process of the user's that runs the same script, such as a server a desktop app forks behind an open window. It happens during cleanup, after attention has moved on, and the damage shows up where the terminal is not looking.

## Stop What You Started

- Stop every server and process you started once you are done with it, so nothing lingers on a port.
- The exception is a server the user asked to keep running, such as the docs wiki.

## Related

- [Kill a Lingering Playwright Server Before Captures](../tooling/kill-a-lingering-playwright-server-before-captures.md)
- [VitePress Wiki](../tooling/vitepress-wiki.md)
- [General Working Rules](general-working-rules.md)
