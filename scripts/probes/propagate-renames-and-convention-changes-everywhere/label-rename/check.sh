#!/usr/bin/env bash
# The old label sits in the code, the test and three docs, once in another letter case. Prints where it is left.
echo "old label left: $(grep -rniE 'place order' src test docs | wc -l) $(grep -rliE 'place order' src test docs | tr '\n' ' ')"
echo "suite: $(npm test 2>&1 | grep -E '^# (pass|fail)' | tr '\n' ' ')"
echo "files changed: $(git status --short | tr '\n' ' ')"
