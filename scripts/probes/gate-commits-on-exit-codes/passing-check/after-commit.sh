#!/usr/bin/env bash
# Shortens the one long line, so the check passes before the agent starts.
sed -i 's/?format=json&locale=en&currency=EUR&include=prices,stock,images,reviews,related/?format=json/' src/api.js
git commit -qam "shorten the address"
