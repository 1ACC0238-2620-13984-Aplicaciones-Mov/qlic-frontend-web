import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({ selector: 'app-reports', imports: [MatIconModule], templateUrl: './reports.component.html', styleUrl: './reports.component.scss' })
export class ReportsComponent { period: 'Week' | 'Month' | 'Year' = 'Month'; }
