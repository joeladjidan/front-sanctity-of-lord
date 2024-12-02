import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Router} from "@angular/router";
import {AuthenticationResponse} from "../models/authentication-response";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  http: any;
  token: any;
  constructor(
    private router: Router
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authenticationResponse: AuthenticationResponse = {};
    if (localStorage.getItem('accessToken')) {
      authenticationResponse = JSON.parse(
        localStorage.getItem('accessToken') as string,
      );
      const authReq = req.clone({
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + authenticationResponse
        })
      });
      return this.handleRequest(authReq, next);
    }
    return this.handleRequest(req, next);
  }


  handleRequest(request: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
          catchError((error) => {
            if (error.status === 401) {
              // Token expired, redirect to login page
              let authenticationResponse: AuthenticationResponse = {};
              if (localStorage.getItem('refreshToken')) {
                authenticationResponse = JSON.parse(
                  localStorage.getItem('refreshToken') as string,
                );
                const authReq = request.clone({
                  headers: new HttpHeaders({
                    Authorization: 'Bearer ' + authenticationResponse
                  })
                });
                return this.handleRequest(authReq, next);
              }
           //   this.router.navigate(['/login']);
            }
            if (error.status === 400) {
              // Token expired, redirect to login page
              this.router.navigate(['/login']);
            }
            return throwError(error);
          }));
    }
}







