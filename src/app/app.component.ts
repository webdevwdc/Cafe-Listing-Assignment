import {CafesService } from './cafes.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CafesService]
})
export class AppComponent {
  title = 'Cafes List';
  close: boolean;
  favrt: boolean;
  favicon = 'favorite_border';
  icon = 'reorder';
  cafes: any;

  Icon() {
  this.close = !this.close;
  if (this.close === true) {
  this.icon = 'close' ;
  } else {
  this.icon = 'reorder' ;
  }
}
  constructor(private http: HttpClient, private service: CafesService) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.getCafes();
  }
  getCafes() {
    this.service.getCafes().subscribe(results => {
      this.cafes = results;
      console.log(this.cafes);
    });
  }
}
