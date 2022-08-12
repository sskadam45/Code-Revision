import { HTTP_INTERCEPTORS, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { TokenStorageService } from '../_services/token-storage.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {tap} from 'rxjs/operators';

const TOKEN_HEADER_KEY = 'Authorization';       // for Spring Boot back-end
// const TOKEN_HEADER_KEY = 'x-access-token';   // for Node.js Express back-end

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private token: TokenStorageService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.token.getToken();
    if (token != null) {
      // for Spring Boot back-end
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });

      // for Node.js Express back-end
      // authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, token) });
    }
    return next.handle(authReq)
      .pipe(tap(() => {},
      (err: any) => {
      if (err instanceof HttpErrorResponse) {
        const isLoggedIn = !!this.token.getToken();
        if (err.status !== 401) {
        return;
        }
        if(!isLoggedIn) {
          this.router.navigate(['login']);
        }
      }
    }));
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];

