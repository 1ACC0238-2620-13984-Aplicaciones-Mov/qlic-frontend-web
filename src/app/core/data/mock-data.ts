import { Device, Metric, SupportTicket, Tank, WaterAlert } from '../models/qlic.models';

export const DASHBOARD_METRICS: readonly Metric[] = [
  { label: "Today's use", value: '248 L', helper: '+12% vs yesterday', tone: 'success', icon: 'water_drop' },
  { label: 'Flow', value: '8.4 L/min', helper: 'Live reading', tone: 'primary', icon: 'swap_horiz' },
  { label: 'Pressure', value: '3.1 bar', helper: 'Healthy range', tone: 'primary', icon: 'speed' },
  { label: 'Active alerts', value: '3', helper: 'Needs attention', tone: 'danger', icon: 'warning_amber' },
];

export const ALERTS: readonly WaterAlert[] = [
  { id: 1, title: 'Possible leak', location: 'Kitchen', severity: 'high', status: 'open', time: '9:12 a.m.', description: 'Continuous flow detected outside the usual usage pattern.' },
  { id: 2, title: 'Tank low', location: 'Roof', severity: 'medium', status: 'open', time: '7:40 a.m.', description: 'The roof tank has fallen below the configured refill threshold.' },
  { id: 3, title: 'Consumption above limit', location: 'Garden', severity: 'low', status: 'open', time: 'Yesterday', description: 'Daily consumption is above the limit configured for this water point.' },
  { id: 4, title: 'Pressure restored', location: 'Main tank', severity: 'low', status: 'acknowledged', time: 'Oct 9', description: 'Water pressure has returned to the healthy range.' },
];

export const TANKS: readonly Tank[] = [
  { id: 1, name: 'Main tank', level: 82, status: 'normal' },
  { id: 2, name: 'Roof tank', level: 24, status: 'needs-refill' },
  { id: 3, name: 'Garden tank', level: 61, status: 'normal' },
];

export const DEVICES: readonly Device[] = [
  { id: 1, name: 'Main flow sensor', location: 'Main tank', status: 'online', lastReading: 'Now' },
  { id: 2, name: 'Roof level sensor', location: 'Roof tank', status: 'online', lastReading: '2 min ago' },
  { id: 3, name: 'Garden valve', location: 'Garden', status: 'offline', lastReading: '3 hours ago' },
];

export const SUPPORT_TICKETS: readonly SupportTicket[] = [
  { id: 1, subject: 'Sensor offline', date: 'Oct 3', status: 'open' },
  { id: 2, subject: 'Billing question', date: 'Sep 28', status: 'in-progress' },
  { id: 3, subject: 'Report export', date: 'Sep 21', status: 'resolved' },
];
