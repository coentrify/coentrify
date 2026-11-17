import { HttpInterceptorFn } from '@angular/common/http';
import { mockInterceptors } from '../../../mock';
import { apiUrlInterceptor } from './api-url.interceptor';
import { authInterceptor } from './auth.interceptor';
import { languageInterceptor } from './language.interceptor';

export const interceptors: HttpInterceptorFn[] = [...mockInterceptors, apiUrlInterceptor, authInterceptor, languageInterceptor];
