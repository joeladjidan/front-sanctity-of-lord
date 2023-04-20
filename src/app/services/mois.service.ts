import { Injectable } from '@angular/core';
import {BaseService as __BaseService} from "../../components/base-service";
import {ApiConfiguration as __Configuration} from "../api-configuration";
import {HttpClient, HttpHeaders, HttpRequest, HttpResponse} from "@angular/common/http";
import {StrictHttpResponse as __StrictHttpResponse} from "../../components/strict-http-response";
import {filter as __filter, map as __map} from "rxjs/operators";
import {Observable} from 'rxjs';
import {MoisDto} from "../models/mois-dto";

@Injectable({
  providedIn: 'root'
})
export class MoisService extends __BaseService {

  private baseUrl = this.rootUrl + `/mois`;

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }


  getListMois(): Observable<__StrictHttpResponse<Array<MoisDto>>> {
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
        return __r as __StrictHttpResponse<Array<MoisDto>>;
      }),
    );
  }

}

