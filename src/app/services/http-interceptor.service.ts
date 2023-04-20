import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders, HttpResponse
} from '@angular/common/http';
import {Router} from "@angular/router";
import {AuthenticationResponse} from "../models/authentication-response";
import {tap} from "rxjs/operators";

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
        localStorage.getItem('accessToken') as string
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

  handleRequest(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {

        }
      }, (err: any) => {
        console.log(err);
        return this.router.navigate(['401']);
        if (err.status === 401) {
          debugger;
          if (err.error.message === 'Token is expire') {
            const params = {
              token: this.token,
              refreshToken: localStorage.getItem('refreshToken')  as string
            };
            return this.http.post('localhost:8080/auth/refresh', params).flatMap(
              (data: any) => {

              }
            );
          }
        }
        if (err.status === 403) {
          return this.router.navigate(['login']);
        }
      }));
  }
}







