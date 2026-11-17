import { Injectable, signal } from '@angular/core';

const KEY = 'token';

@Injectable({ providedIn: 'root' })
export class Session {
  readonly token = signal<string | null>(localStorage.getItem(KEY));

  signIn(token: string): void {
    localStorage.setItem(KEY, token);
    this.token.set(token);
  }

  logOff(): void {
    localStorage.removeItem(KEY);
    this.token.set(null);
  }
}
