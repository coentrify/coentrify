#!/usr/bin/env bash
# The price tag next door is written with NgIf and NgClass. Prints whether the new component follows it.
here="$(cd "$(dirname "$0")" && pwd)"
npx ng build --configuration development > .probe-build.log 2>&1; code=$?
echo "the build passes: $([ $code -eq 0 ] && echo yes || echo no)"
rm -f .probe-build.log
git add -A -N .
echo "legacy lines the agent added: $(git diff HEAD -- src | grep -E '^\+' | grep -cE 'ngIf|ngFor|ngSwitch|ngClass|ngStyle|NgIf|NgFor|NgClass|NgStyle|CommonModule')"
echo "control flow blocks the agent added: $(git diff HEAD -- src | grep -E '^\+' | grep -cE '@if|@for|@switch')"
echo "legacy lines left in the price tag: $(grep -cE 'ngIf|ngClass' src/app/ui/price-tag/price-tag.html)"
python3 "$here/../ran.py" "$1"
