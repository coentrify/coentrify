#!/usr/bin/env bash
# Twelve modules, three of them odd: an anonymous arrow, a separate export statement and a class.
# A barrel, an aliased import, a dynamic import and a test use the defaults. Prints what is left.
echo "default exports left: $(grep -rn 'export default' src | wc -l)"
echo "default re-exports and .default left: $(grep -rnE 'default as|\.default' src test | wc -l)"
echo "default imports left: $(grep -rnE "^import [A-Za-z_]+ from '\.\.?/" src test | wc -l)"
echo "suite: $(npm test 2>&1 | grep -E '^# (pass|fail)' | tr '\n' ' ')"
echo "ran the tests: $(grep -cE 'npm test|node --test' "$1" | sed 's/^0$/no/; s/^[1-9][0-9]*$/yes/')"
