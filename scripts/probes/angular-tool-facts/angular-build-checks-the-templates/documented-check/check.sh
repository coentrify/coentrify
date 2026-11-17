#!/usr/bin/env bash
# The readme names one check, npm run check, which runs tsc. It fails once on the change, in a file the agent has to touch, and passes after.
# A template elsewhere hands a whole order to a component that needs a customer, with no word of customer in that template.
# Only the build sees it. Prints whether the app still builds, and which check the agent ran.
here="$(cd "$(dirname "$0")" && pwd)"
echo "the customer can be null: $(grep -cE 'customer: string \| null|customer\?: string|customer: string \| undefined' src/app/orders/order.ts | sed 's/^0$/no/; s/^[1-9][0-9]*$/yes/')"
npm run --silent check > /dev/null 2>&1; echo "npm run check passes: $([ $? -eq 0 ] && echo yes || echo no)"
npx ng build --configuration development > .probe-build.log 2>&1; code=$?
echo "the build passes: $([ $code -eq 0 ] && echo yes || echo no)"
echo "errors in the build: $(grep -c 'ERROR' .probe-build.log)"
rm -f .probe-build.log
echo "files changed: $(git status --short | cut -c4- | tr '\n' ' ')"
python3 "$here/../../ran.py" "$1"
