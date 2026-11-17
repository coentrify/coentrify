#!/usr/bin/env bash
# The tone of two badges is set in a template, and one of them is the typo. tsc skips the templates, so only the build sees them.
# Prints whether the app still builds, and which check the agent ran.
here="$(cd "$(dirname "$0")" && pwd)"
echo "tone limited: $(grep -cE "input<[^>]*'bad'|input<Tone|input<BadgeTone|: *InputSignal" src/app/ui/badge/badge.ts | sed 's/^0$/no/; s/^[1-9][0-9]*$/yes/')"
npx ng build --configuration development > .probe-build.log 2>&1; code=$?
echo "the build passes: $([ $code -eq 0 ] && echo yes || echo no)"
echo "errors in the build: $(grep -c 'ERROR' .probe-build.log)"
rm -f .probe-build.log
echo "warning left in a template: $(grep -l "warning" src/app/orders/*.html src/app/returns/*.html 2>/dev/null | wc -l)"
python3 "$here/../ran.py" "$1"
