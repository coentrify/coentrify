import { test } from 'node:test';
import assert from 'node:assert/strict';
import { anchorFor } from '../src/anchor.js';

test('a heading and its question form get distinct anchors', () => {
  assert.equal(anchorFor('Why'), '#why');
  assert.equal(anchorFor('Why?'), '#why-');
});
