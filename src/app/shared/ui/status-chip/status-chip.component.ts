import { Component, input } from '@angular/core';

@Component({
  selector: 'app-status-chip',
  imports: [],
  templateUrl: './status-chip.component.html',
  styleUrl: './status-chip.component.scss'
})
export class StatusChipComponent {
  readonly label = input.required<string>();
  readonly tone = input<string>('info');
}
