
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpOptionsService {

  // Démonstration de HttpHeaders
  creerHeaders(): HttpHeaders {
    let headers = new HttpHeaders();

    headers = headers.set('Accept', 'application/json');

    headers = headers.append('X-Role', 'student');
    headers = headers.append('X-Role', 'developer');

    return headers;
  }

  // Démonstration de HttpParams
  creerParams(): HttpParams {
    let params = new HttpParams();

    params = params.set('page', '1');

    params = params.append('category', 'tech');
    params = params.append('category', 'marketing');

    return params;
  }
}
