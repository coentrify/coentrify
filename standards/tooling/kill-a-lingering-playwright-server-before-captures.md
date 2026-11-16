# Kill a Lingering Playwright Server Before Captures

A Playwright run starts its `webServer` and normally kills it at the end; with `reuseExistingServer` every later run takes whatever already listens on the port. That can be the user's own app, another project's server, or a stale watcher of this one that does not always rebuild.

## Why

A dev server that outlives its run on the e2e port serves the code from before the edit, so the next capture or probe proves nothing and the fix looks broken. On a shared default port the suite can run against another app entirely; the tell is a snapshot of a different page and role or locator queries timing out, with no error thrown.

## How to Apply

- Point the e2e config's `webServer` URL and `BASE_URL` at the project's own fixed port ([Own Ports, Own Processes](../behavior/own-ports-own-processes.md)).
- Before a capture, a probe or a suite that must show the latest code, run `lsof -nP -i :<port>` and kill a listener that is yours (the env carries the session's variables); a capture that shows the old state is the cue.
- The check gates the start: a listener of yours found means kill it and look again before `start:e2e` runs, never start beside it; one that is not yours means another port; an "up" from a curl proves nothing while it stands.
- Stopping a `start:e2e` mid-build does not stop it: its preview can still come up later on the port, so look for the port's listener instead of the npm process.

## Related

- [Playwright Video Recording](playwright-video-recording.md)
