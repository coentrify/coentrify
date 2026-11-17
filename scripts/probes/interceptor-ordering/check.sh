#!/usr/bin/env bash
# A catcher only sees errors from below it in the chain. One placed after the mock never sees the mock's 401.
# Prints whether a 401 logs the user off, from the backend and from the mock, and where the catcher sits.
cat > .probe-check.mjs <<'JS'
import { createApi } from './src/http/index.js';
import { createSession } from './src/session.js';
import { router } from './src/router.js';

async function attempt(demo, status) {
  router.path = '/';
  const session = createSession('expired');
  const fetch = async () => ({ status, json: async () => ({}) });
  const api = createApi({ fetch, session, demo, router, navigate: (path) => router.navigate(path) });
  try {
    await api.get('/orders');
  } catch {}
  await new Promise((resolve) => setTimeout(resolve, 20));
  return session.token === null && router.path === '/login' ? 'yes' : 'no';
}

console.log('a 401 from the backend logs off:', await attempt(false, 401));
console.log('a 401 from the mock logs off:', await attempt(true, 200));
JS
node .probe-check.mjs 2>&1 | tail -4
rm -f .probe-check.mjs
echo "the chain: $(grep -nE 'interceptors(\.push| = )|\(session|unauthorized|logOff|401' src/http/index.js | tr '\n' ' ' | cut -c1-600)"
npm test --silent > /dev/null 2>&1; echo "tests pass: $([ $? -eq 0 ] && echo yes || echo no)"
echo "a test for the mock's 401: $(grep -lE 'demo: true' test/*.js | xargs grep -lE '401|login|logOff|token, null' 2>/dev/null | wc -l)"
