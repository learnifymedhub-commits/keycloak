// src/app/core/services/api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {

  constructor(private http: HttpClient) {}

  get(path: string) {
    return this.http.get(`${environment.apiUrl}${path}`, {
      withCredentials: true
    }).toPromise();
  }

  post(path: string, body: unknown) {
    return this.http.post(`${environment.apiUrl}${path}`, body, {
      withCredentials: true
    }).toPromise();
  }
}
