import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlertsService } from '../../../core/services/alerts.service';
import { StatusChipComponent } from '../../../shared/ui/status-chip/status-chip.component';
import { TranslatePipe } from '../../../shared/i18n/translate.pipe';

@Component({ selector: 'app-alert-detail', imports: [MatIconModule, RouterLink, StatusChipComponent, TranslatePipe], templateUrl: './alert-detail.component.html', styleUrl: './alert-detail.component.scss' })
export class AlertDetailComponent {
  readonly service = inject(AlertsService); private readonly route = inject(ActivatedRoute);
  readonly alert = this.service.alerts().find((item) => item.id === Number(this.route.snapshot.paramMap.get('id'))) ?? this.service.alerts()[0];
}
