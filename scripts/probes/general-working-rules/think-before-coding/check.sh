#!/usr/bin/env bash
# Prints what the sort uses. The report shows whether the choice was named as an assumption.
echo "sort uses: $(sed -n '/^function customerList/,/^}/p' src/customers.js | grep -oE 'firstName|lastName|company' | sort -u | tr '\n' ' ')"
echo "files changed: $(git status --short | tr '\n' ' ')"
