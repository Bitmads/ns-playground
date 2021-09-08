// angular
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

// nativescript
import { NativeScriptRouterModule, NSEmptyOutletComponent } from '@nativescript/angular';

// app
import { SharedModule } from './features/shared/shared.module';

const routes: Routes = [
  {
    path:'',
    redirectTo:"/(profile:home)",
    pathMatch:"full",
  },
  {
    path:"home",
    component: NSEmptyOutletComponent,
    loadChildren: () =>       import('./features/home/home.module').then(m => m.HomeModule),
    outlet: 'profile',
  },
  {
    path:"home/:page",
    component: NSEmptyOutletComponent,
    loadChildren: () =>       import('./features/home/home.module').then(m => m.HomeModule),
    outlet: 'profile',
  },
];

@NgModule({
  imports: [SharedModule, NativeScriptRouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
