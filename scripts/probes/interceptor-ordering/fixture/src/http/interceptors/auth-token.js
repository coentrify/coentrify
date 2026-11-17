export function authToken(session) {
  return (request, next) => {
    if (!session.token) {
      return next(request);
    }
    return next({ ...request, headers: { ...request.headers, authorization: `Bearer ${session.token}` } });
  };
}
