import { Component } from '@angular/core';

import { BaseComponent } from '@ns-playground/xplat/core';
import {HttpClient} from "@angular/common/http";
import {timer} from "rxjs";
import {filter, switchMap} from "rxjs/operators";

@Component({
  moduleId: module.id,
  selector: 'ns-playground-home',
  templateUrl: './home.component.html'
})
export class HomeComponent extends BaseComponent {
  constructor(protected http:HttpClient) {
    super();

  }

  loading = false;
  data:any;
  setIntervals:any;

  ngOnInit() {
    console.log('HOME INIT');
    this.get();

    this.setIntervals['getThread'] = timer(0, 1000).subscribe((t:any) => {
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
