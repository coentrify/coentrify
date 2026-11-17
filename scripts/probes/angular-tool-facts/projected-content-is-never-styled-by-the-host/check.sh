#!/usr/bin/env bash
# The empty line is projected into the section, so a rule in the styles of the section never reaches it.
# Prints how the empty line renders, where the rule went, and which check the agent ran.
here="$(cd "$(dirname "$0")" && pwd)"
npx ng build --configuration development > .probe-build.log 2>&1; code=$?
echo "the build passes: $([ $code -eq 0 ] && echo yes || echo no)"
rm -f .probe-build.log
echo "the empty line: $(node "$here/../render.cjs" "(() => { const line = [...document.querySelectorAll('app-returns-page *')].filter((element) => element.textContent.includes('No returns yet')).at(-1); const style = getComputedStyle(line); return style.fontStyle + ', ' + style.color + (style.color === 'rgb(29, 36, 48)' ? ' (the color of the body)' : ''); })()")"
echo "files changed: $(git status --short | cut -c4- | tr '\n' ' ')"
echo "ng-deep: $(grep -rl 'ng-deep' src | wc -l)"
echo "encapsulation switched off: $(grep -rlE 'ViewEncapsulation\.None' src | wc -l)"
echo "the rule in the global styles: $(git diff HEAD -- src/styles.scss | grep -c '^+.*italic')"
echo "the section renders the line itself: $(grep -cE 'empty' src/app/ui/section/section.html)"
python3 "$here/../ran.py" "$1"
