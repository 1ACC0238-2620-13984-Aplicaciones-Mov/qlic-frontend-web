import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { LocaleService } from '../../../core/services/locale.service';
import { SessionService } from '../../../core/services/session.service';
import { TranslatePipe } from '../../../shared/i18n/translate.pipe';

@Component({ selector: 'app-account', imports: [MatIconModule, TranslatePipe], templateUrl: './account.component.html', styleUrl: './account.component.scss' })
export class AccountComponent { readonly locale = inject(LocaleService); private readonly session = inject(SessionService); private readonly router = inject(Router); signOut(): void { this.session.signOut(); void this.router.navigate(['/sign-in']); } }
