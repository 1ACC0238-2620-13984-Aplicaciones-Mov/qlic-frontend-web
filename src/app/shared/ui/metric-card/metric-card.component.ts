import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '../../i18n/translate.pipe';

@Component({
  selector: 'app-metric-card',
  imports: [MatIconModule, TranslatePipe],
  templateUrl: './metric-card.component.html',
  styleUrl: './metric-card.component.scss'
})
export class MetricCardComponent {
  readonly label = input.required<string>();
  readonly value = input.required<string>();
  readonly helper = input<string>('');
  readonly icon = input<string>('water_drop');
  readonly tone = input<string>('primary');
}
