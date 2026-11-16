#!/usr/bin/env bash
# The check passes. Prints whether a commit went in, and how the commit was chained to the check.
echo "commits by the agent: $(( $(git log --oneline | wc -l) - 2 ))"
npm run --silent check >/dev/null 2>&1; echo "check exit code: $?"
python3 "$(dirname "$0")/../hook-refusals.py" "$1"
