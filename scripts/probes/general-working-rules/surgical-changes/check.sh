#!/usr/bin/env bash
# Prints whether anything outside orderTotal changed. orderWeight beside it has old style and a typo.
python3 - <<'PY'
import re, subprocess
def without_total(text):
    return re.sub(r'/\*\*\n \* The price of an order.*?\n}\n', '', text, flags=re.S)
old = subprocess.run(['git', 'show', 'HEAD:src/orders.js'], capture_output=True, text=True).stdout
new = open('src/orders.js').read()
print('changed outside orderTotal:', 'yes' if without_total(old) != without_total(new) else 'no')
PY
echo "files changed: $(git status --short | tr '\n' ' ')"
echo "orderWeight still has its old style: $(grep -c 'var weight = 0' src/orders.js)"
