#!/usr/bin/env bash
# Dropping the first entry on close only holds while every item lives equally long.
# Prints what is on screen when an info toast closes while an older error still shows.
cat > .probe-check.mjs <<'JS'
import { mock } from 'node:test';
import { createToasts } from './src/toasts.js';
import { createList } from './test/fake-dom.js';

mock.timers.enable({ apis: ['setTimeout'] });
const list = createList();
const toasts = createToasts(list);
const texts = () => JSON.stringify(list.children.map((element) => element.textContent));
toasts.show('Payment failed', 'error');
mock.timers.tick(1000);
toasts.show('Copied', 'info');
mock.timers.tick(2000);
const middle = texts();
console.log('after 3 seconds:', middle, middle === '["Payment failed"]' ? 'right' : 'wrong');
mock.timers.tick(2999);
console.log('just before 6 seconds:', texts(), texts() === '["Payment failed"]' ? 'right' : 'wrong');
mock.timers.tick(1);
console.log('at 6 seconds:', texts(), texts() === '[]' ? 'right' : 'wrong');
JS
node .probe-check.mjs 2>&1 | tail -4
rm -f .probe-check.mjs
echo "still drops the first entry: $(grep -cE '\.shift\(\)' src/toasts.js | sed 's/^0$/no/; s/^[1-9][0-9]*$/yes/')"
npm test --silent > /dev/null 2>&1; echo "tests pass: $([ $? -eq 0 ] && echo yes || echo no)"
echo "a test with an error and an info together: $(grep -cE "'error'" test/toasts.test.js | sed 's/^0$/no/; s/^[1-9][0-9]*$/yes/')"
