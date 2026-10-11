import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { LocaleCode } from '../../core/models/qlic.models';
import { LocaleService, TranslationKey } from '../../core/services/locale.service';
import { SessionService } from '../../core/services/session.service';

@Component({
  selector: 'app-app-shell',
  imports: [MatIconModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.scss',
})
export class AppShellComponent {
  private readonly router = inject(Router);
  readonly localeService = inject(LocaleService);
  private readonly session = inject(SessionService);
  menuOpen = false;

  readonly navigation: readonly { path: string; icon: string; label: TranslationKey }[] = [
    { path: '/dashboard', icon: 'space_dashboard', label: 'nav.dashboard' },
    { path: '/alerts', icon: 'notifications_none', label: 'nav.alerts' },
    { path: '/devices', icon: 'sensors', label: 'nav.devices' },
    { path: '/reports', icon: 'assessment', label: 'nav.reports' },
    { path: '/business', icon: 'domain', label: 'nav.business' },
    { path: '/support', icon: 'help_outline', label: 'nav.support' },
  ];

  translate(key: TranslationKey): string { return this.localeService.translate(key); }
  setLocale(value: string): void { this.localeService.setLocale(value as LocaleCode); }
  signOut(): void { this.session.signOut(); void this.router.navigate(['/sign-in']); }
}
