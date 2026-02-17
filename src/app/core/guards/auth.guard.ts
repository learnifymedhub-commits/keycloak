// src/app/core/guards/auth.guard.ts

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

export const authGuard: CanActivateFn = async () => {
  const api = inject(ApiService);
  const router = inject(Router);

  try {
    await api.get('/auth/me');
    return true;
  } catch {
    router.navigate(['/auth/login']);
    return false;
  }
};
