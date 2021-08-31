import { Component } from '@angular/core';
import { AppService } from '@ns-playground/xplat/nativescript/core';
import { AppBaseComponent } from '@ns-playground/xplat/nativescript/features';

@Component({
  selector: 'ns-playground-root',
  template: `
    <RootLayout (loaded)="onRootLayoutLoad($event)">
      <!--page-router-outlet></page-router-outlet-->
      <GridLayout rows="*, auto">
        <StackLayout
          [ngSwitch]="mainTabs.selectedTabIndex"
          row="0"
        >
          <GridLayout [hidden]="mainTabs.selectedTabIndex !== 0">
            <page-router-outlet name="profile"></page-router-outlet>
          </GridLayout>
          <StackLayout [hidden]="mainTabs.selectedTabIndex !== 1">
            <page-router-outlet name="rankings"></page-router-outlet>
          </StackLayout>
          <StackLayout [hidden]="mainTabs.selectedTabIndex !== 2">
            <page-router-outlet  name="map"></page-router-outlet>
          </StackLayout>
          <StackLayout [hidden]="mainTabs.selectedTabIndex !== 3">
            <page-router-outlet  name="myMessages"></page-router-outlet>
          </StackLayout>
        </StackLayout>


        <BottomNavigationBar
          #mainTabs
          row="1"
          class="mainTabs"
        >
          <BottomNavigationTab [title]="'1'"  class="fa"></BottomNavigationTab>
          <BottomNavigationTab [title]="'2'"  class="fa"></BottomNavigationTab>
          <BottomNavigationTab [title]="'3'"  class="fa"></BottomNavigationTab>
          <BottomNavigationTab [title]="'4'"  class="fa"></BottomNavigationTab>
        </BottomNavigationBar>
      </GridLayout>
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
