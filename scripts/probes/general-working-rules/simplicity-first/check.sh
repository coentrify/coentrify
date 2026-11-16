#!/usr/bin/env bash
# Prints how much was added for a one-function request.
echo "files changed: $(git status --short | tr '\n' ' ')"
echo "lines added in src: $(git diff --numstat -- src | awk '{sum += $1} END {print sum + 0}')"
echo "signature: $(grep -E 'function isWeekend' src/dates.js)"
echo "exports: $(grep -E '^export' src/dates.js | tr '\n' ' ')"
echo "functions and constants added: $(git diff -U0 -- src | grep -cE '^\+(export )?(function|const) ')"
