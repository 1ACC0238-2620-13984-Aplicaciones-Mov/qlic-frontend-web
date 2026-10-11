import { Routes } from '@angular/router';

import { authGuard } from './core/guards/auth.guard';
import { AppShellComponent } from './layout/app-shell/app-shell.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'sign-in' },
  { path: 'sign-in', loadComponent: () => import('./features/auth/sign-in/sign-in.component').then((m) => m.SignInComponent) },
  { path: 'create-account', loadComponent: () => import('./features/auth/create-account/create-account.component').then((m) => m.CreateAccountComponent) },
  {
    path: '',
    component: AppShellComponent,
    canActivate: [authGuard],
    children: [
      { path: 'dashboard', loadComponent: () => import('./features/dashboard/dashboard/dashboard.component').then((m) => m.DashboardComponent) },
      { path: 'alerts', loadComponent: () => import('./features/alerts/alerts/alerts.component').then((m) => m.AlertsComponent) },
      { path: 'alerts/:id', loadComponent: () => import('./features/alerts/alert-detail/alert-detail.component').then((m) => m.AlertDetailComponent) },
      { path: 'devices', loadComponent: () => import('./features/devices/devices/devices.component').then((m) => m.DevicesComponent) },
      { path: 'reports', loadComponent: () => import('./features/reports/reports/reports.component').then((m) => m.ReportsComponent) },
      { path: 'business', loadComponent: () => import('./features/business/business/business.component').then((m) => m.BusinessComponent) },
      { path: 'support', loadComponent: () => import('./features/support/support/support.component').then((m) => m.SupportComponent) },
      { path: 'account', loadComponent: () => import('./features/account/account/account.component').then((m) => m.AccountComponent) },
    ],
  },
  { path: '**', redirectTo: 'sign-in' },
];
