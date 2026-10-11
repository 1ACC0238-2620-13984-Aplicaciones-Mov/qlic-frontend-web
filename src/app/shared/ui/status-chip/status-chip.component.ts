import { Component, input } from '@angular/core';
import { TranslatePipe } from '../../i18n/translate.pipe';

@Component({
  selector: 'app-status-chip',
  imports: [TranslatePipe],
  templateUrl: './status-chip.component.html',
  styleUrl: './status-chip.component.scss'
})
export class StatusChipComponent {
  readonly label = input.required<string>();
  readonly tone = input<string>('info');
}
