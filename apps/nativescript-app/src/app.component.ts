import { Component } from '@angular/core';
import { AppService } from '@ns-playground/xplat/nativescript/core';
import { AppBaseComponent } from '@ns-playground/xplat/nativescript/features';

@Component({
  selector: 'ns-playground-root',
  template: `
    <RootLayout (loaded)="onRootLayoutLoad($event)">
      <page-router-outlet name="profile"></page-router-outlet>
    </RootLayout>
  `
})
export class AppComponent extends AppBaseComponent {
  constructor(appService: AppService) {
    super(appService);
  }

  onRootLayoutLoad(e){

  }
}
