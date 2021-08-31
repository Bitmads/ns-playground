import { Directive } from '@angular/core';

// libs
import { BaseComponent } from '@ns-playground/xplat/core';
import { AppService } from '@ns-playground/xplat/nativescript/core';

@Directive()
export abstract class AppBaseComponent extends BaseComponent {
  constructor(protected appService: AppService) {
    super();
  }
}
