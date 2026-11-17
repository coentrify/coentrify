import { SHOPKEEPER_PROMPT } from './shopkeeper-prompt.js';
import { stateBlock } from './state.js';

const API_URL = 'https://api.anthropic.com/v1/messages';
const MODEL = 'claude-opus-5-5';

// The history holds the earlier turns, as { role, content } entries.
export async function askShopkeeper(state, history, line, fetch = globalThis.fetch) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 300,
      system: SHOPKEEPER_PROMPT,
      messages: [...history, { role: 'user', content: `${stateBlock(state)}\n\n${line}` }],
    }),
  });
  if (!response.ok) {
    throw new Error(`The shopkeeper is out: ${response.status}`);
  }
  const data = await response.json();
  return data.content[0].text;
}
