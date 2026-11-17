export function timing(timings, now = Date.now) {
  return async (request, next) => {
    const start = now();
    try {
      return await next(request);
    } finally {
      timings.push({ url: request.url, milliseconds: now() - start });
    }
  };
}
