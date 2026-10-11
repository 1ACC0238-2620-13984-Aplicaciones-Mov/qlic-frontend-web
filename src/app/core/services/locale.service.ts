import { Injectable, signal } from '@angular/core';

import { ES_419 } from '../i18n/es-419';
import { EN } from '../i18n/en';
import { LocaleCode } from '../models/qlic.models';

export type TranslationKey = keyof typeof EN;
const LOCALE_KEY = 'qlic-locale';

@Injectable({ providedIn: 'root' })
export class LocaleService {
  private readonly currentLocale = signal<LocaleCode>(this.readStoredLocale());
  readonly locale = this.currentLocale.asReadonly();

  constructor() {
    this.applyDocumentLocale(this.currentLocale());
  }

  setLocale(locale: LocaleCode): void {
    this.currentLocale.set(locale);
    localStorage.setItem(LOCALE_KEY, locale);
    this.applyDocumentLocale(locale);
  }

  translate(key: TranslationKey): string {
    return this.locale() === 'es-419' ? ES_419[key] : EN[key];
  }

  translateText(value: string): string {
    if (!(value in EN)) {
      return value;
    }
    return this.translate(value as TranslationKey);
  }

  private readStoredLocale(): LocaleCode {
    return localStorage.getItem(LOCALE_KEY) === 'es-419' ? 'es-419' : 'en';
  }

  private applyDocumentLocale(locale: LocaleCode): void {
    document.documentElement.lang = locale;
    document.title = locale === 'es-419' ? ES_419['Qlic Web App'] : EN['Qlic Web App'];
  }
}
