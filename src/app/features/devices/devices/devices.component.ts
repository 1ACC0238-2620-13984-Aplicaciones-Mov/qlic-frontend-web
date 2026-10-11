import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { QlicDataService } from '../../../core/services/qlic-data.service';
import { StatusChipComponent } from '../../../shared/ui/status-chip/status-chip.component';
import { TranslatePipe } from '../../../shared/i18n/translate.pipe';

@Component({ selector: 'app-devices', imports: [MatIconModule, StatusChipComponent, TranslatePipe], templateUrl: './devices.component.html', styleUrl: './devices.component.scss' })
export class DevicesComponent { readonly data = inject(QlicDataService); showAddForm = false; newDeviceName = ''; addDevice(): void { this.showAddForm = true; } }
