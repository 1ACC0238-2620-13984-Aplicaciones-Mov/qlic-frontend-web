import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { LocaleService } from '../../../core/services/locale.service';
import { SessionService } from '../../../core/services/session.service';

@Component({ selector: 'app-sign-in', imports: [MatIconModule, ReactiveFormsModule, RouterLink], templateUrl: './sign-in.component.html', styleUrl: './sign-in.component.scss' })
export class SignInComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly session = inject(SessionService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  readonly locale = inject(LocaleService);
  showPassword = false;
  credentialsError = '';
  readonly form = this.formBuilder.nonNullable.group({ email: ['', [Validators.required, Validators.email]], password: ['', Validators.required], remember: [false] });

  submit(): void {
    this.credentialsError = '';
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    const result = this.session.signIn(this.form.controls.email.value, this.form.controls.password.value);
    if (!result.success) { this.credentialsError = result.message ?? 'Unable to sign in.'; return; }
    void this.router.navigateByUrl(this.route.snapshot.queryParamMap.get('returnUrl') ?? '/dashboard');
  }
}
