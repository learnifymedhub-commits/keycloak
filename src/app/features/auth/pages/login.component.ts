// src/app/features/auth/pages/login.component.ts

import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports:[RouterModule],
  template: `
    <div class="login">
      <h2>Login</h2>
      <button (click)="login()">Login with Keycloak</button>

      <a routerLink="/">Home</a>
    </div>
  `
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  login() {
    this.authService.login();
  }
}
