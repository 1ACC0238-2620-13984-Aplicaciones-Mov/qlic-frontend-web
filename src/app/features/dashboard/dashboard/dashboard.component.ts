import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

import { AlertsService } from '../../../core/services/alerts.service';
import { QlicDataService } from '../../../core/services/qlic-data.service';
import { MetricCardComponent } from '../../../shared/ui/metric-card/metric-card.component';
import { StatusChipComponent } from '../../../shared/ui/status-chip/status-chip.component';

@Component({ selector: 'app-dashboard', imports: [MatIconModule, MetricCardComponent, RouterLink, StatusChipComponent], templateUrl: './dashboard.component.html', styleUrl: './dashboard.component.scss' })
export class DashboardComponent {
  readonly data = inject(QlicDataService);
  readonly alerts = inject(AlertsService);
  readonly openAlerts = () => this.alerts.alerts().filter((alert) => alert.status === 'open').slice(0, 3);
}
