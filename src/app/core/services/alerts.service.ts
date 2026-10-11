import { Injectable, signal } from '@angular/core';

import { ALERTS } from '../data/mock-data';
import { AlertSeverity, WaterAlert } from '../models/qlic.models';

export type AlertFilter = AlertSeverity | 'acknowledged' | 'all';

@Injectable({ providedIn: 'root' })
export class AlertsService {
  private readonly alertState = signal<WaterAlert[]>(ALERTS.map((alert) => ({ ...alert })));
  readonly alerts = this.alertState.asReadonly();

  filter(query: string, filter: AlertFilter): WaterAlert[] {
    const normalized = query.trim().toLowerCase();
    return this.alerts().filter((alert) => {
      const matchesQuery = !normalized || `${alert.title} ${alert.location}`.toLowerCase().includes(normalized);
      const matchesFilter = filter === 'all' || (filter === 'acknowledged' ? alert.status === filter : alert.severity === filter);
      return matchesQuery && matchesFilter;
    });
  }

  acknowledge(id: number): void {
    this.alertState.update((items) => items.map((item) => item.id === id ? { ...item, status: 'acknowledged' } : item));
  }
}
