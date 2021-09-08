import { Component } from '@angular/core';

import { BaseComponent } from '@ns-playground/xplat/core';
import {HttpClient} from "@angular/common/http";
import {Subject, timer} from "rxjs";
import {filter, switchMap, takeUntil} from "rxjs/operators";
import { PageService } from '@nativescript/angular';
import { NavigatedData, Page } from '@nativescript/core';

@Component({
  moduleId: module.id,
  selector: 'ns-playground-home',
  templateUrl: './home.component.html'
})
export class HomeComponent extends BaseComponent {
  _intervalStop$: Subject<void>;

  constructor(protected http:HttpClient, private page: Page) {
    super();
    this.page.on('navigatedFrom', () => {
      console.log('navigatedFrom')
      this._intervalStop$.next();
      this._intervalStop$.complete();
      this._intervalStop$ = null;
    });
    this.page.on('navigatedTo', () => {
      console.log('navigatedTo');
      if (!this._intervalStop$) {
        this._setupInterval();
      }
    });
  }

  loading = false;
  data:any;

  get intervalStop$() {
    if (!this._intervalStop$) {
      this._intervalStop$ = new Subject();
    }
    return this._intervalStop$;
  }

  ngOnInit() {
    console.log('HOME INIT');
    this.get();

    this._setupInterval();
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

  private _setupInterval() {
    timer(0, 1000).pipe(takeUntil(this.intervalStop$)).subscribe((t:any) => {
      console.log('tick', t);
    });
  }
}
