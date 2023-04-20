import { Injectable } from '@angular/core';
import {BaseService as __BaseService} from "@docs-components/base-service";
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpRequest, HttpResponse} from "@angular/common/http";
import {ApiConfiguration as __Configuration} from "../api-configuration";
import {catchError, filter as __filter, map as __map, retry} from "rxjs/operators";
import {StrictHttpResponse as __StrictHttpResponse} from "@docs-components/strict-http-response";
import {ContactDto} from "../models/contact-dto";
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService extends __BaseService {

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  private baseUrl = this.rootUrl + `/contact`;

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  getAllContact(): Observable<__StrictHttpResponse<Array<ContactDto>>> {
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
          return __r as __StrictHttpResponse<Array<ContactDto>>;
        }),
      );
  }

  // Create a new item
  enregistrer(data): Observable<ContactDto> {
    return this.http
      .post<ContactDto>(this.baseUrl + "/enregistrer/", data, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Update item by id
  update(id, data): Observable<ContactDto> {
    debugger
    return this.http
      .put<ContactDto>(this.baseUrl + "/modifier/" + id, data, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Get single student data by ID
  getContact(id): Observable<ContactDto> {
    return this.http
      .get<ContactDto>(this.baseUrl + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Delete item by id
  delete(id) {
    return this.http
      .delete<ContactDto>(this.baseUrl + '/supprimer/' + id, this.httpOptions)
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
