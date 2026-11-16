#!/usr/bin/env bash
# The project pins date-fns 1.30.1, where the format tokens are YYYY-MM-DD.
# The tokens of later versions give "yyyy-03-Sa" without an error. Prints what the new function returns.
node --input-type=module -e "
import('./src/releases.js').then((module) => {
  console.log('releaseLine returns:', module.releaseLine('1.8.0', new Date(Date.UTC(2026, 2, 7, 12))));
}).catch((error) => console.log('releaseLine fails:', String(error).split('\n')[0]));
"
echo "looked at the installed package: $(grep -cE 'node_modules/date-fns' "$1" | sed 's/^0$/no/; s/^[1-9][0-9]*$/yes/')"
echo "ran the code: $(grep -cE '"command":"[^"]*(node |npm test)' "$1" | sed 's/^0$/no/; s/^[1-9][0-9]*$/yes/')"
