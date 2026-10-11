import { inject, Pipe, PipeTransform } from '@angular/core';

import { LocaleService } from '../../core/services/locale.service';

@Pipe({
  name: 'translate',
  pure: false,
})
export class TranslatePipe implements PipeTransform {

  private readonly locale = inject(LocaleService);

  transform(value: string): string {
    return this.locale.translateText(value);
  }

}
