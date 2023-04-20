import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse, HttpRequest, HttpResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {retry, catchError, filter as __filter, map as __map} from 'rxjs/operators';
import {BaseService as __BaseService} from "@docs-components/base-service";
import {ApiConfiguration as __Configuration} from "../api-configuration";
import {StrictHttpResponse as __StrictHttpResponse} from "@docs-components/strict-http-response";
import {AmesDto} from "../models/ames-dto";

@Injectable({
  providedIn: 'root'
})
export class AmesService extends __BaseService {

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8'
    })
  }

  private baseUrl = this.rootUrl + `/ames`;

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  enregistrer(data): Observable<AmesDto> {
    return this.http
      .post<AmesDto>(this.baseUrl + "/enregistrer", data, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Get single student data by ID
  getItem(id): Observable<AmesDto> {
    return this.http
      .get<AmesDto>(this.baseUrl + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  listAmes(): Observable<__StrictHttpResponse<Array<AmesDto>>> {
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
        return __r as __StrictHttpResponse<Array<AmesDto>>;
      }),
    );
  }

  // Update item by id
  modifier(id, item): Observable<AmesDto> {
    return this.http
      .put<AmesDto>(this.baseUrl + '/modifier/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Delete item by id
  supprimer(id) {
    return this.http
      .delete<AmesDto>(this.baseUrl + '/supprimer/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
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
