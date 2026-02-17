// src/app/features/auth/auth.service.ts

import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {

  http = inject(HttpClient);

  login(): void {
    window.location.href = `${environment.apiUrl}/auth/login`;
  }

  logout(): void {
    // Make POST to backend logout endpoint
    this.http
      .post(`${environment.apiUrl}/auth/logout`, {}, { responseType: 'text', withCredentials: true })
      .subscribe({
        next: () => {
          // Backend will redirect to Keycloak; for API POST, manually redirect
          window.location.href = `/`;
        },
        error: (err) => console.error('Logout failed', err),
      });
  }
  

}
