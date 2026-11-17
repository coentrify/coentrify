import { createClient } from './client.js';
import { authToken } from './interceptors/auth-token.js';
import { baseUrl } from './interceptors/base-url.js';
import { mockApi } from './interceptors/mock-api.js';
import { timing } from './interceptors/timing.js';

const BASE = 'https://api.shop.example';

export const timings = [];

export function createApi({ fetch, session, demo = false }) {
  const interceptors = [baseUrl(BASE), authToken(session)];
  if (demo) {
    interceptors.push(mockApi(BASE));
  }
  interceptors.push(timing(timings));
  return createClient(interceptors, fetch);
}
