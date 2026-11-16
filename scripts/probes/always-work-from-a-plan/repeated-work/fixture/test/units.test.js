import { test } from 'node:test';
import assert from 'node:assert/strict';
import grams from '../src/grams.js';
import {
  celsius, fahrenheit, feet, gallons, kelvin, liters, meters, miles, Money, percent, pounds,
} from '../src/index.js';

test('every unit formats a value', () => {
  assert.equal(celsius(21), '21 °C');
  assert.equal(fahrenheit(70), '70 °F');
  assert.equal(kelvin(294), '294 K');
  assert.equal(meters(5), '5 m');
  assert.equal(feet(16), '16 ft');
  assert.equal(miles(3), '3 mi');
  assert.equal(liters(2), '2 l');
  assert.equal(gallons(1), '1 gal');
  assert.equal(grams(500), '500 g');
  assert.equal(pounds(2), '2 lb');
});

test('a share is a percentage with one digit', () => {
  assert.equal(percent(0.256), '25.6%');
});

test('money prints two digits and its currency', () => {
  assert.equal(String(new Money(12.5, 'EUR')), '12.50 EUR');
});
