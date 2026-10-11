import { Injectable, signal } from '@angular/core';

import { DASHBOARD_METRICS, DEVICES, SUPPORT_TICKETS, TANKS } from '../data/mock-data';
import { SupportTicket } from '../models/qlic.models';

@Injectable({ providedIn: 'root' })
export class QlicDataService {
  readonly metrics = signal(DASHBOARD_METRICS.map((item) => ({ ...item }))).asReadonly();
  readonly tanks = signal(TANKS.map((item) => ({ ...item }))).asReadonly();
  readonly devices = signal(DEVICES.map((item) => ({ ...item }))).asReadonly();
  private readonly ticketState = signal<SupportTicket[]>(SUPPORT_TICKETS.map((item) => ({ ...item })));
  readonly tickets = this.ticketState.asReadonly();

  createTicket(subject: string): void {
    this.ticketState.update((items) => [
      { id: Date.now(), subject, date: 'Today', status: 'open' },
      ...items,
    ]);
  }
}
