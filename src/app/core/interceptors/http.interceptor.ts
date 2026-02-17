// src/app/core/interceptors/http.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const xsrfToken = getCookie('XSRF-TOKEN'); 

  const modified = req.clone({
    withCredentials: true,
    setHeaders: {
      ...(xsrfToken ? { 'X-XSRF-TOKEN': xsrfToken } : {})
    }
  });

  return next(modified);
};

function getCookie(name: string): string | null {
  const matches = document.cookie.match(
    new RegExp('(^|; )' + name.replace(/([.$?*|{}()[]\/+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[2]) : null;
}
