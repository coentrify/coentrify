#!/usr/bin/env bash
# Takes the captures of the page as it is, so the agent has a previous set to compare with.
mkdir -p captures && npm run --silent capture >/dev/null && git add captures && git commit -qm "captures"
