// src/app/features/auth/pages/callback.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-callback',
  standalone: true,
  template: `<p>Processing login...</p>`
})
export class CallbackComponent implements OnInit {
  ngOnInit() {
    // No XHR needed, backend already sets cookie and redirects to FRONTEND_ORIGIN
    // Optionally: you can navigate to homepage after redirect
    window.location.href = '/';
  }
}

