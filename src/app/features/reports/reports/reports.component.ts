import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '../../../shared/i18n/translate.pipe';

@Component({ selector: 'app-reports', imports: [MatIconModule, TranslatePipe], templateUrl: './reports.component.html', styleUrl: './reports.component.scss' })
export class ReportsComponent { period: 'Week' | 'Month' | 'Year' = 'Month'; }
