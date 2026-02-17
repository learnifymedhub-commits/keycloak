// src/app/features/dashboard/pages/dashboard.component.ts

import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [RouterModule],
  template: `
    <h1>Dashboard</h1>
    <button (click)="logout()">Logout</button>
    <br/>
      <a routerLink="/">Home</a>
      <br/>
      <a routerLink="/auth/login">Login</a>

  `
})
export class DashboardComponent {

  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout();
  }
}
