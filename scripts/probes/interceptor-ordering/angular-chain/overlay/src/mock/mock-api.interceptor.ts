import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Session } from '../app/core/session';
import { HANDLERS } from './handlers';

export const mockApiInterceptor: HttpInterceptorFn = (request, next) => {
  const handler = HANDLERS[`${request.method} ${request.url}`];
  return handler ? handler(request, inject(Session).token()) : next(request);
};
