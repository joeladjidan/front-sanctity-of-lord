import { Injectable } from '@angular/core';
import {BaseService as __BaseService} from "@docs-components/base-service";
import {HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders, HttpRequest, HttpResponse} from "@angular/common/http";
import {ApiConfiguration as __Configuration} from "../api-configuration";
import {catchError, filter as __filter, map as __map, retry} from "rxjs/operators";
import {StrictHttpResponse as __StrictHttpResponse} from "@docs-components/strict-http-response";
import {ContactDto} from "../models/contact-dto";
import {Observable, throwError} from 'rxjs';
import {DonneeDto} from "../models/donnee-dto";

@Injectable({
  providedIn: 'root'
})
export class DonneeService extends __BaseService {

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8'
    })
  }

  private baseUrl = this.rootUrl + `/fichier`;
  private donneeUrl = this.rootUrl + `/donnee`;

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  // Create a new item
  enregistrer(data): Observable<DonneeDto> {
    return this.http
      .post<DonneeDto>(this.donneeUrl + "/enregistrer", data, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  enregistrerFichier(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }

  getDonnee(filename: string): Observable<__StrictHttpResponse<DonneeDto>> {
    debugger
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    __headers.set('Access-Control-Allow-Origin', '*');
    let __body: any = null;
    let req = new HttpRequest<DonneeDto>(
      'GET',
      `${this.donneeUrl}/nomfichier/${filename}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<DonneeDto>(req)
      .pipe(
        retry(2),
        catchError(this.handleError),
        __filter(r => r instanceof HttpResponse),
        __map((__r) => {
          return __r as __StrictHttpResponse<DonneeDto>;
        }),
      );
  }

  getDonneById(id): Observable<ContactDto> {
    return this.http
      .get<DonneeDto>(this.donneeUrl + '/' + id)
      .pipe(
         retry(2),
         catchError(this.handleError)
      )
  }

  getListDonnee(): Observable<__StrictHttpResponse<Array<DonneeDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    __headers.set('Access-Control-Allow-Origin', '*');
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      `${this.donneeUrl}/tous`,
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
          return __r as __StrictHttpResponse<Array<DonneeDto>>;
        }),
      );
  }

  // Update item by id
  update(id, data): Observable<DonneeDto> {
    return this.http
      .put<DonneeDto>(this.donneeUrl + '/modifier/' + id, data, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Delete item by id
  delete(id) {
    return this.http
      .delete<DonneeDto>(this.donneeUrl + '/supprimer/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  ajouterFichier(file: File): Observable<HttpEvent<{}>> {
    const data: FormData = new FormData();
    data.append('file', file);
    const newRequest = new HttpRequest('POST', this.baseUrl + "/enregistrer", data, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(newRequest);
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
