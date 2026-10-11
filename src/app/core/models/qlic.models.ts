export type LocaleCode = 'en' | 'es-419';
export type AlertSeverity = 'high' | 'medium' | 'low';
export type AlertStatus = 'open' | 'acknowledged';

export interface Metric {
  label: string;
  value: string;
  helper: string;
  tone?: 'primary' | 'success' | 'warning' | 'danger';
  icon: string;
}

export interface WaterAlert {
  id: number;
  title: string;
  location: string;
  severity: AlertSeverity;
  status: AlertStatus;
  time: string;
  description: string;
}

export interface Tank {
  id: number;
  name: string;
  level: number;
  status: 'normal' | 'needs-refill';
}

export interface Device {
  id: number;
  name: string;
  location: string;
  status: 'online' | 'offline';
  lastReading: string;
}

export interface SupportTicket {
  id: number;
  subject: string;
  date: string;
  status: 'open' | 'in-progress' | 'resolved';
}

export interface SignInResult {
  success: boolean;
  message?: string;
}
