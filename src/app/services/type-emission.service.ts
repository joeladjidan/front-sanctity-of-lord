import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse, HttpRequest, HttpResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {retry, catchError, filter as __filter, map as __map} from 'rxjs/operators';
import {BaseService as __BaseService} from "@docs-components/base-service";
import {ApiConfiguration as __Configuration} from "../api-configuration";
import {StrictHttpResponse as __StrictHttpResponse} from "@docs-components/strict-http-response";
import {TypeEmissionDto} from "../models/type-emission-dto";

@Injectable({
  providedIn: 'root'
})
export class TypeEmissionService extends __BaseService {

  private baseUrl = this.rootUrl + `/type-emission`;

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }


  getTypeEmission(): Observable<__StrictHttpResponse<Array<TypeEmissionDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    __headers.set('Access-Control-Allow-Origin', '*');
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      `${this.baseUrl}/tous`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req)
      .pipe(
        __filter(r => r instanceof HttpResponse),
        retry(2),
        catchError(this.handleError),
        __map((__r) => {
          return __r as __StrictHttpResponse<Array<TypeEmissionDto>>;
        }),
      );
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}

