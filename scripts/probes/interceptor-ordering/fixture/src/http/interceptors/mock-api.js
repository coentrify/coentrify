import { HttpError } from '../http-error.js';

const ORDERS = [
  { id: 'A-1041', total: 59.5 },
  { id: 'A-1042', total: 12 },
];

const routes = {
  '/orders': (request) => {
    if (request.headers.authorization !== 'Bearer demo') {
      throw new HttpError(401, request.url);
    }
    return { status: 200, body: ORDERS };
  },
  '/admin/reports': (request) => {
    throw new HttpError(403, request.url);
  },
};

export function mockApi(base) {
  return async (request, next) => {
    const route = routes[request.url.slice(base.length)];
    return route ? route(request) : next(request);
  };
}
