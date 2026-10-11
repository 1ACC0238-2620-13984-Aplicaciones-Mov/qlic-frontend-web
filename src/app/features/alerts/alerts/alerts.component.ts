import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

import { AlertFilter, AlertsService } from '../../../core/services/alerts.service';
import { EmptyStateComponent } from '../../../shared/ui/empty-state/empty-state.component';
import { StatusChipComponent } from '../../../shared/ui/status-chip/status-chip.component';

@Component({ selector: 'app-alerts', imports: [EmptyStateComponent, MatIconModule, RouterLink, StatusChipComponent], templateUrl: './alerts.component.html', styleUrl: './alerts.component.scss' })
export class AlertsComponent {
  readonly service = inject(AlertsService);
  query = '';
  selectedFilter: AlertFilter = 'all';
  pushEnabled = true;
  emailEnabled = false;
  leakEnabled = true;
  readonly filters: readonly { label: string; value: AlertFilter }[] = [{ label: 'All open', value: 'all' }, { label: 'Acknowledged', value: 'acknowledged' }, { label: 'High', value: 'high' }, { label: 'Medium', value: 'medium' }, { label: 'Low', value: 'low' }];
  get results() { return this.service.filter(this.query, this.selectedFilter); }
  setQuery(value: string): void { this.query = value; }
  clearFilters(): void { this.query = ''; this.selectedFilter = 'all'; }
}
