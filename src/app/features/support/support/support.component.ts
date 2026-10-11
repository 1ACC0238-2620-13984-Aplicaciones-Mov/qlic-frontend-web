import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { QlicDataService } from '../../../core/services/qlic-data.service';
import { StatusChipComponent } from '../../../shared/ui/status-chip/status-chip.component';
import { TranslatePipe } from '../../../shared/i18n/translate.pipe';

@Component({ selector: 'app-support', imports: [MatIconModule, ReactiveFormsModule, StatusChipComponent, TranslatePipe], templateUrl: './support.component.html', styleUrl: './support.component.scss' })
export class SupportComponent {
  private readonly formBuilder = inject(FormBuilder); readonly data = inject(QlicDataService); success = false;
  readonly form = this.formBuilder.nonNullable.group({ subject: ['', Validators.required], priority: ['Medium', Validators.required], description: ['', [Validators.required, Validators.minLength(10)]] });
  submit(): void { this.success = false; if (this.form.invalid) { this.form.markAllAsTouched(); return; } this.data.createTicket(this.form.controls.subject.value); this.form.reset({ subject: '', priority: 'Medium', description: '' }); this.success = true; }
}
