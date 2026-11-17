import { HttpErrorResponse, HttpEvent, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, delay, of, throwError } from 'rxjs';
import { ORDERS } from '../app/orders/order';

type Handler = (request: HttpRequest<unknown>, token: string | null) => Observable<HttpEvent<unknown>>;

const LATENCY = 150;
const DEMO_TOKEN = 'demo';

function answer(body: unknown): Observable<HttpEvent<unknown>> {
  return of(new HttpResponse({ status: 200, body })).pipe(delay(LATENCY));
}

function refuse(request: HttpRequest<unknown>, status: number): Observable<HttpEvent<unknown>> {
  return throwError(() => new HttpErrorResponse({ status, url: request.url }));
}

export const HANDLERS: Record<string, Handler> = {
  'GET /api/orders': (request, token) => (token === DEMO_TOKEN ? answer(ORDERS) : refuse(request, 401)),
  'GET /api/reports': (request) => refuse(request, 403),
};
