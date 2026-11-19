# Start Playwright On A Clean Port

Before a Playwright run, the e2e port is clean: a lingering server of yours is killed, since `reuseExistingServer` takes whatever already listens there.

## Why

Every run starts clean, so it shows the code as it stands.

## How To Apply

- Point the e2e config's `webServer` URL and `BASE_URL` at the project's own fixed port ([Own Ports, Own Processes](../behavior/own-ports-own-processes.md)).
- Before a capture, a probe or a suite that must show the latest code, run `lsof -nP -i :<port>` and kill a listener that is yours (the env carries the session's variables).
- The check gates the start:
  - A listener of yours found means kill it and look again before `start:e2e` runs, never start beside it.
  - A listener that is not yours means another port.
  - An "up" from a curl proves nothing while it stands.
- Stopping a `start:e2e` mid-build does not stop it: its preview can still come up later on the port, so look for the port's listener instead of the npm process.
- What listens there can be the director's own app, another project's server, or a stale watcher of this one that does not always rebuild. The tell is a capture of the old state, a snapshot of a different page, or role and locator queries that time out with no error.

## Related

- [Playwright Video Recording](playwright-video-recording.md)
