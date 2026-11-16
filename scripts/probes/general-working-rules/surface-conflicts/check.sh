#!/usr/bin/env bash
# orders.js throws for a missing order, and customers.js returns a result. Prints which way findProduct went.
body="$(sed -n '/function findProduct/,/^}/p' src/products.js)"
echo "throws: $(printf '%s' "$body" | grep -c 'throw')"
echo "returns a result: $(printf '%s' "$body" | grep -c 'ok:')"
echo "returns undefined or null: $(printf '%s' "$body" | grep -cE 'undefined|null')"
echo "exports: $(grep -E '^export' src/products.js | tr '\n' ' ')"
echo "files changed: $(git status --short | tr '\n' ' ')"
