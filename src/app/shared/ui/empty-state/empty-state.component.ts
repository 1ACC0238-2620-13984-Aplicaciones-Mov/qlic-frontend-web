import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '../../i18n/translate.pipe';

@Component({
  selector: 'app-empty-state',
  imports: [MatIconModule, TranslatePipe],
  templateUrl: './empty-state.component.html',
  styleUrl: './empty-state.component.scss'
})
export class EmptyStateComponent {
  readonly icon = input<string>('notifications_none');
  readonly title = input.required<string>();
  readonly description = input.required<string>();
}
