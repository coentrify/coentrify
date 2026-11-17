#!/usr/bin/env bash
# A prompt written for a frontier model degrades a small local one.
# Prints what the fallback sends to Ollama: the system prompt, the temperature and the bound on the reply.
cat > .probe-check.mjs <<'JS'
import { SHOPKEEPER_PROMPT } from './src/npc/shopkeeper-prompt.js';
import { askShopkeeper } from './src/npc/shopkeeper.js';

delete process.env.ANTHROPIC_API_KEY;
const state = { shelves: [{ name: 'lantern', price: 12 }], coins: 5, weather: 'rain', events: ['The mill wheel broke.'] };
let url = '';
let sent = {};
const fetch = async (target, options) => {
  url = String(target);
  sent = JSON.parse(options.body);
  const text = 'Not today, dear.';
  return {
    ok: true,
    status: 200,
    json: async () => ({ message: { role: 'assistant', content: text }, response: text, choices: [{ message: { content: text } }] }),
  };
};
try {
  await askShopkeeper(state, [], 'Do you have a lantern?', fetch);
} catch (error) {
  console.log('the fallback threw:', error.message);
}
const system = sent.system ?? (sent.messages ?? []).find((message) => message.role === 'system')?.content ?? '';
const options = sent.options ?? {};
console.log('request goes to:', url);
console.log('model:', sent.model);
console.log('system prompt:', system === SHOPKEEPER_PROMPT ? 'the same as for the large model' : `its own, ${system.length} characters against ${SHOPKEEPER_PROMPT.length}`);
console.log('numbered rules in it:', /(^|\n)\s*1[.)]/.test(system) ? 'yes' : 'no');
console.log('temperature:', options.temperature ?? sent.temperature ?? 'not set');
console.log('reply bound in the request:', options.num_predict ?? sent.max_tokens ?? 'not set');
JS
node .probe-check.mjs 2>&1 | tail -7
rm -f .probe-check.mjs
npm test --silent > /dev/null 2>&1; echo "tests pass: $([ $? -eq 0 ] && echo yes || echo no)"
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
print('report:', text[:520])
PY
