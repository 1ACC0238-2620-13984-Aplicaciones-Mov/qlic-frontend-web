import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({ selector: 'app-create-account', imports: [ReactiveFormsModule, RouterLink], templateUrl: './create-account.component.html', styleUrl: './create-account.component.scss' })
export class CreateAccountComponent {
  private readonly formBuilder = inject(FormBuilder); private readonly router = inject(Router);
  readonly form = this.formBuilder.nonNullable.group({ name: ['', Validators.required], email: ['', [Validators.required, Validators.email]], password: ['', [Validators.required, Validators.minLength(8)]] });
  submit(): void { if (this.form.invalid) { this.form.markAllAsTouched(); return; } void this.router.navigate(['/sign-in']); }
}
