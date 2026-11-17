import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Session } from '../session';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const token = inject(Session).token();
  if (!token) {
    return next(request);
  }
  return next(request.clone({ setHeaders: { Authorization: `Bearer ${token}` } }));
};
