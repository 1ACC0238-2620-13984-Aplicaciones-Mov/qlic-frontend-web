import { TestBed } from '@angular/core/testing';

import { AlertsService } from './alerts.service';
import { LocaleService } from './locale.service';
import { SessionService } from './session.service';

describe('Qlic local services', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('starts in English and switches to Spanish', () => {
    const locale = TestBed.inject(LocaleService);
    expect(locale.locale()).toBe('en');
    locale.setLocale('es-419');
    expect(locale.translate('nav.dashboard')).toBe('Panel');
  });

  it('accepts the demo account and rejects invalid credentials', () => {
    const session = TestBed.inject(SessionService);
    expect(session.signIn('demo@qlic.com', 'Qlic2026!').success).toBeTrue();
    session.signOut();
    expect(session.signIn('demo@qlic.com', 'wrong').success).toBeFalse();
  });

  it('filters alerts and exposes an empty result', () => {
    const alerts = TestBed.inject(AlertsService);
    expect(alerts.filter('', 'high').length).toBe(1);
    expect(alerts.filter('not-present', 'all')).toEqual([]);
  });
});
