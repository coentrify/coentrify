#!/usr/bin/env bash
# Lays the files of this trap over the shared Angular app, commits them, and installs the packages.
cp -r "$(dirname "$0")/overlay/." . && git add -A && git commit -qm "contact line" && npm ci --silent > /dev/null 2>&1
