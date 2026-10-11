import { Injectable, signal } from '@angular/core';

import { ES_419 } from '../i18n/es-419';
import { EN } from '../i18n/en';
import { LocaleCode } from '../models/qlic.models';

export type TranslationKey = keyof typeof EN;

@Injectable({ providedIn: 'root' })
export class LocaleService {
  private readonly currentLocale = signal<LocaleCode>('en');
  readonly locale = this.currentLocale.asReadonly();

  setLocale(locale: LocaleCode): void {
    this.currentLocale.set(locale);
  }

  translate(key: TranslationKey): string {
    return this.locale() === 'es-419' ? ES_419[key] : EN[key];
  }
}
