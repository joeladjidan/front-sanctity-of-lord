import { Injectable } from '@angular/core';
import {BaseService as __BaseService} from "../../components/base-service";
import {ApiConfiguration as __Configuration} from "../api-configuration";
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpRequest, HttpResponse} from "@angular/common/http";
import {StrictHttpResponse as __StrictHttpResponse} from "../../components/strict-http-response";
import {catchError, filter as __filter, map as __map, retry} from "rxjs/operators";
import {Observable, throwError} from "rxjs";
import {ArchivreDto} from "../models/archivre-dto";

@Injectable({
  providedIn: 'root'
})
export class ArchivresService extends __BaseService {

  private baseUrl = this.rootUrl + `/archivre`;

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }


  getListArchivre(): Observable<__StrictHttpResponse<Array<ArchivreDto>>> {
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

    return this.http.request<any>(req).pipe(
      __filter(r => r instanceof HttpResponse),
      __map((__r) => {
        return __r as __StrictHttpResponse<Array<ArchivreDto>>;
      }),
    );
  }

  searchArchivre(mois: string , annee: string): Observable<__StrictHttpResponse<Array<ArchivreDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    __headers.set('Access-Control-Allow-Origin', '*');
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      `${this.baseUrl}/search/${mois}/${annee}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req)
      .pipe(
        retry(2),
        catchError(this.handleError),
        __filter(r => r instanceof HttpResponse),
        __map((__r) => {
          return __r as __StrictHttpResponse<Array<ArchivreDto>>;
        }),
      );
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    debugger
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

