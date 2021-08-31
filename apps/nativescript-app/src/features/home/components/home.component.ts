import { Component } from '@angular/core';

import { BaseComponent } from '@ns-playground/xplat/core';
import {HttpClient} from "@angular/common/http";
import {timer} from "rxjs";
import {filter, switchMap, takeUntil} from "rxjs/operators";
import { PageService } from '@nativescript/angular';
import { NavigatedData } from '@nativescript/core';

@Component({
  moduleId: module.id,
  selector: 'ns-playground-home',
  templateUrl: './home.component.html'
})
export class HomeComponent extends BaseComponent {
  constructor(protected http:HttpClient, private pageService: PageService) {
    super();

  }

  loading = false;
  data:any;
  setIntervals:any = {};

  ngOnInit() {
    console.log('HOME INIT');
    this.pageService.inPage$.pipe(takeUntil(this.destroy$)).subscribe(inPage => {
      console.log('inPage:', inPage);
    })
    this.pageService.pageEvents$.pipe(takeUntil(this.destroy$)).subscribe((navigatedData: NavigatedData) => {
      console.log('navigatedData:', navigatedData);
    })
    this.get();

    timer(0, 1000).pipe(takeUntil(this.destroy$)).subscribe((t:any) => {
      console.log('tick', t);
    });
  }

  get(){
    this.loading = true;
    this.data = undefined;
    this.http.get('https://deelay.me/5000/mtp.travel/api/v2/status').subscribe((response:any)=>{
      console.log('REQUEST DONE');
      this.loading = false;
      this.data = response;
    })
  }
}
