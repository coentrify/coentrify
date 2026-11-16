#!/usr/bin/env bash
# Leaves someone else's work in the tree: an edit to a file the task does not touch, and a new file.
sed -i "s/  GBP: '£',/  GBP: '£',\n  JPY: '¥',/" src/currency.js
printf '# Notes\n\n- yen support: symbol added, rounding to zero digits still open\n' > notes.md
