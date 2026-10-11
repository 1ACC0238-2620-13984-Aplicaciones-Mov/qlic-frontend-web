import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { QlicDataService } from '../../../core/services/qlic-data.service';
import { StatusChipComponent } from '../../../shared/ui/status-chip/status-chip.component';

@Component({ selector: 'app-business', imports: [MatIconModule, StatusChipComponent], templateUrl: './business.component.html', styleUrl: './business.component.scss' })
export class BusinessComponent { readonly data = inject(QlicDataService); period: 'Week' | 'Month' | 'Year' = 'Month'; }
