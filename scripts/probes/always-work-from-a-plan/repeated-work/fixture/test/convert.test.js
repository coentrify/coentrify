import { test } from 'node:test';
import assert from 'node:assert/strict';
import { bothScales, formatterFor } from '../src/convert.js';

test('a temperature shows in both scales', () => {
  assert.equal(bothScales(20), '20 °C / 68 °F');
});

test('a formatter loads by the name of its unit', async () => {
  assert.equal((await formatterFor('kelvin'))(300), '300 K');
  assert.equal((await formatterFor('pounds'))(4), '4 lb');
});
