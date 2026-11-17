#!/usr/bin/env bash
# Two nodes for a named slot under one @if land in the default slot, in the body of the card.
# Prints where the two buttons render, the NG8011 warnings of the build, and which check the agent ran.
here="$(cd "$(dirname "$0")" && pwd)"
npx ng build --configuration development > .probe-build.log 2>&1; code=$?
echo "the build passes: $([ $code -eq 0 ] && echo yes || echo no)"
echo "NG8011 warnings: $(grep -c 'NG8011' .probe-build.log)"
rm -f .probe-build.log
echo "the buttons: $(node "$here/../render.cjs" "[...document.querySelectorAll('button')].filter((button) => /Refund|Reorder/.test(button.textContent)).map((button) => button.textContent.trim() + ' in the ' + (button.closest('.card__actions') ? 'actions' : 'body')).join(', ') || 'none'")"
python3 "$here/../ran.py" "$1"
