#!/usr/bin/env bash
# src/text.js already has slugify, which does exactly this. Prints whether it was reused.
echo "uses slugify: $(grep -c 'slugify' src/products.js)"
echo "own replace calls: $(grep -c 'replace(' src/products.js)"
echo "exports: $(grep -E '^export' src/products.js | tr '\n' ' ')"
echo "files changed: $(git status --short | tr '\n' ' ')"
