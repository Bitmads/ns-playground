import { Component } from '@angular/core';

import { BaseComponent } from '@ns-playground/xplat/core';
import {RouterExtensions} from "@nativescript/angular";

@Component({
  moduleId: module.id,
  selector: 'ns-playground-settings',
  templateUrl: './settings.component.html'
})
export class SettingsComponent extends BaseComponent {
  constructor(protected routerExtenstions:RouterExtensions) {
    super();

  }

  ngOnInit(){
    console.log('SETTINGS INIT');
  }

  goBack(){
    this.routerExtenstions.back();
  }

}
