import { HttpError } from './http-error.js';

async function send(fetch, request) {
  const response = await fetch(request.url, { method: request.method, headers: request.headers });
  if (response.status >= 400) {
    throw new HttpError(response.status, request.url);
  }
  return { status: response.status, body: await response.json() };
}

export function createClient(interceptors, fetch) {
  const handle = interceptors.reduceRight(
    (next, interceptor) => (request) => interceptor(request, next),
    (request) => send(fetch, request),
  );
  return {
    get: (url) => handle({ method: 'GET', url, headers: {} }),
  };
}
