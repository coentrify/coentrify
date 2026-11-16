#!/usr/bin/env bash
# Five docs name the old threshold, once written out as a word, and the roadmap plans to lower it.
# Prints which docs went stale, and what happened to the roadmap line.
echo "suite: $(npm test 2>&1 | grep -E '^# (pass|fail)' | tr '\n' ' ')"
echo "threshold in the code: $(grep -oE 'FREE_SHIPPING_FROM = [0-9]+' src/shipping.js)"
echo "stale docs: $(grep -rlE '(^|[^0-9.])50([^0-9]|$)|fifty' docs --exclude=roadmap.md | tr '\n' ' ')"
echo "roadmap line unchanged: $(grep -c 'Lower the free shipping threshold to 40 euros' docs/roadmap.md)"
python3 - "$1" <<'PY'
import json, sys
text = ''
for line in open(sys.argv[1]):
    try:
        event = json.loads(line)
    except json.JSONDecodeError:
        continue
    if event.get('type') == 'result':
        text = ' '.join((event.get('result') or '').split())
print('report names the roadmap:', 'yes' if 'roadmap' in text.lower() else 'no')
print('report:', text[:520])
PY
