// src/app/features/auth/auth.routes.ts

import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login.component';
import { CallbackComponent } from './pages/callback.component';

export const AUTH_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'callback', component: CallbackComponent }
];
