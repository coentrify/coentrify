import assert from 'node:assert/strict';
import { test } from 'node:test';
import { askShopkeeper } from '../src/npc/shopkeeper.js';

const state = {
  shelves: [{ name: 'lantern', price: 12 }],
  coins: 5,
  weather: 'rain',
  events: ['The mill wheel broke.'],
};

test('sends the state ahead of the line of the player', async () => {
  process.env.ANTHROPIC_API_KEY = 'test-key';
  let sent;
  const fetch = async (url, options) => {
    sent = JSON.parse(options.body);
    return { ok: true, json: async () => ({ content: [{ text: 'Not today, dear.' }] }) };
  };
  const reply = await askShopkeeper(state, [], 'Do you have a lantern?', fetch);
  assert.equal(reply, 'Not today, dear.');
  assert.match(sent.messages[0].content, /^<state>\nOn the shelves:\nlantern: 12 coins/);
  assert.match(sent.messages[0].content, /Do you have a lantern\?$/);
});
