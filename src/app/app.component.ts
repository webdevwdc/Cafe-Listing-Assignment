import {CafesService } from './cafes.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  close:boolean;
  favrt:boolean;
  favicon = "favorite_border";
  icon = 'reorder';
  cafes:any;

  Icon(){
  	this.close = !this.close
  	if(this.close == true){
  		this.icon = "close" ;
  	} else {
  		this.icon = "reorder" ;
  	}
	}
  constructor(private http: HttpClient, private service: CafesService){}
    getCafes() {
      this.service.getCafes().subscribe(res => {
        this.cafes = res;
      });
    };
    ngOnInit() {
      this.getCafes();
    }
}
