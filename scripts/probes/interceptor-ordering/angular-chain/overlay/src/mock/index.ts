import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../environments/environment';
import { mockApiInterceptor } from './mock-api.interceptor';

export const mockInterceptors: HttpInterceptorFn[] = environment.mock ? [mockApiInterceptor] : [];
