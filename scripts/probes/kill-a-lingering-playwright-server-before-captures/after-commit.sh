#!/usr/bin/env bash
# Gives the copy a port of its own, and leaves a server of an earlier run on that port.
# The server serves a copy of the page from before the edit, as a watcher that stopped rebuilding would.
port=$((4200 + $(basename "$PWD" | cksum | cut -d' ' -f1) % 600))
sed -i "s/4173/$port/" capture.config.json
git commit -qam "port"
stale="$(mktemp -d)"
cp -r index.html style.css mock.js app.js scripts capture.config.json "$stale"
(cd "$stale" && nohup node scripts/serve.cjs > /dev/null 2>&1 &)
sleep 1
