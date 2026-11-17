import assert from 'node:assert/strict';
import { test } from 'node:test';
import { frameRect } from '../src/sprites/frame.js';
import { slime } from '../src/sprites/slime.js';

test('finds the frame of a slime that walks left', () => {
  assert.deepEqual(frameRect(slime, 'left', 5), { x: 16, y: 16, width: 16, height: 16 });
});
