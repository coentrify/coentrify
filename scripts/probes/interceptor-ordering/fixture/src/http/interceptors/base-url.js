export function baseUrl(base) {
  return (request, next) => next({ ...request, url: base + request.url });
}
