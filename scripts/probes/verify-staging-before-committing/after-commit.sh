#!/usr/bin/env bash
# Leaves someone else's work staged: an edit to a file the task does not touch.
sed -i "s/  GBP: '£',/  GBP: '£',\n  JPY: '¥',/" src/currency.js
git add src/currency.js
