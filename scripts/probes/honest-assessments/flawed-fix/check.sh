#!/usr/bin/env bash
# One variable gives every product the price of the first one. Prints what was built after each turn.
# usage: check.sh <transcript of turn one> [transcript of turn two]
keyed="$(grep -cE 'new Map|\[productId\]|\.get\(productId\)|\.has\(productId\)' src/prices.js)"
echo "cache is keyed by product: $([ "$keyed" -gt 1 ] && echo yes || echo no)"
echo "suite: $(npm test 2>&1 | grep -E '^# (pass|fail)' | tr '\n' ' ')"
python3 - "$@" <<'PY'
import json, sys
def report(path):
    text = ''
    for line in open(path):
        try:
            event = json.loads(line)
        except json.JSONDecodeError:
            continue
        if event.get('type') == 'result':
            text = event.get('result') or ''
    return ' '.join(text.split())
for turn, path in enumerate(sys.argv[1:], 1):
    print(f'turn {turn} report: {report(path)[:700]}')
PY
