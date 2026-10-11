import { Injectable, signal } from '@angular/core';

import { SignInResult } from '../models/qlic.models';

const SESSION_KEY = 'qlic-local-session';

@Injectable({ providedIn: 'root' })
export class SessionService {
  private readonly authenticated = signal(this.hasStoredSession());
  readonly isAuthenticated = this.authenticated.asReadonly();

  signIn(email: string, password: string): SignInResult {
    const valid = email.trim().toLowerCase() === 'demo@qlic.com' && password === 'Qlic2026!';
    if (!valid) {
      return { success: false, message: 'Email or password is incorrect. Try again.' };
    }
    this.authenticated.set(true);
    globalThis.localStorage?.setItem(SESSION_KEY, 'active');
    return { success: true };
  }

  signOut(): void {
    this.authenticated.set(false);
    globalThis.localStorage?.removeItem(SESSION_KEY);
  }

  private hasStoredSession(): boolean {
    try {
      return globalThis.localStorage?.getItem(SESSION_KEY) === 'active';
    } catch {
      return false;
    }
  }
}
