import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { MouseEvent, } from '@agm/core';
import {CafesService } from '../../cafes.service';
import { HttpClient } from '@angular/common/http';
import {FormControl, FormGroup} from '@angular/forms';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import {filter, map } from 'rxjs/operators';
import { uniq, compact, flatten } from 'lodash';


import  {MatSnackBar } from '@angular/material';

import { MatDialog, MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  title = "cafes list"
  cafes: any;  
  cafesid:any;
  datename:any;
  active=false;
  time24:any
  demoTime:any
  url = "../asset/image"
  current_date:string;
  current_day:string;
  zoom: number = 8;
  lat: number = 51.673858;
  lng: number = 7.815982;

  marker = 'assets/images/marker.png';


  date = new FormControl();


  constructor( public snackBar: MatSnackBar,
    private http: HttpClient, private service: CafesService, public dialog: MatDialog) {
    this.current_date = moment().format('MMM Do YY');
    this.current_day = moment().format('dddd');
    this.demoTime = 'Choose a Time'
  }
  add_fav(i) {
      this.cafesid = this.cafes.filter(cafes => cafes.id >= 0)[i];
      this.cafesid['icon'] = 'favorite';
      localStorage.setItem([i] + ': You added as favourite cafe is', this.cafesid['name']);
      localStorage.setItem('Total', JSON.stringify( this.cafes));
  }
// DATE FILTER
  onDate(event) {

     this.current_day = this.date.value;
      const d = this.date.value;
      const datepipe = new DatePipe('en-US');
      const day_name = datepipe.transform(d, 'EEEE');
      const day_date = datepipe.transform(d, 'MM-d-y');
      this.datename = day_name;

      this.getFavourites();
      this.cafes = this.cafes.filter(cafes =>  cafes['availability'][day_name]['open'] === true);
      this.snackBar.open(`You Choose: ${day_name} ${day_date}`, null, {
        duration: 1000,
      });
  }
  // TIME FILETER
  private exportTime = { hour: 7, minute: 15, meriden: 'PM', format: 12 };
  public getFavourites() {
    if (localStorage.getItem('Total') != null) {
      this.cafes = JSON.parse(localStorage.getItem('Total'));
    }
  }
  public onRevert() {
    this.exportTime = {hour: 7, minute: 15, meriden: 'PM', format: 12};
    this.snackBar.open(`Revert time to ${this.exportTime.hour}:${this.exportTime.minute} ${this.exportTime.meriden}`, null, {
      duration: 1000,
    });
  }
  public onSubmit(time) {
    this.snackBar.open(`Saved time ${this.exportTime.hour}:${this.exportTime.minute} ${this.exportTime.meriden}`, null, {
      duration: 1000,
    });

    this.active = false;
    this.demoTime = this.exportTime.hour + ":" + this.exportTime.minute + this.exportTime.meriden
    // CONVERT 12 HOURS TO 24 HOURS
    const time24 = moment(this.demoTime, 'h:mm A').format('HH:mm');
    this.getFavourites();
    const datepipe = new DatePipe('en-US');
    const day_name = datepipe.transform(this.date.value, 'EEEE');
    const localCafeList = this.cafes;
    let localCafeTmp = [];
    for (var i = localCafeList.length - 1; i >= 0; i--) {
      const getIn24O = localCafeList.map(cafes =>
        moment(cafes['availability'][day_name].open_time, 'h:mm A').format('HH:mm'))[i];

      const getIn24C = localCafeList.map(cafes => 
        moment(cafes['availability'][day_name].close_time, 'h:mm A').format('HH:mm'))[i];

      const compOpenTime = moment(getIn24O, 'h:mma').isBefore(moment(time24, 'h:mma'));
      const compCloseTime = moment(time24, 'h:mma').isBefore(moment(getIn24C, 'h:mma'));
      if (compOpenTime === true && compCloseTime === true) {
        localCafeTmp.push(this.cafes.filter(cafes =>  cafes.id  === localCafeList[i].id));
      }
    }
    this.cafes = uniq(compact(flatten(localCafeTmp)));
  }

  getCafes() {
    const today = Date.now()
    const datepipe = new DatePipe('en-US');
    const day_name = datepipe.transform(today, 'EEEE');
    this.datename = day_name;

    if (localStorage.getItem('Total') != null) {
      this.cafes = JSON.parse(localStorage.getItem('Total'));
    } else {
      this.service.getCafes().subscribe(res => {
        this.cafes = res;
      });
    }
  }


  ngOnInit() {
    this.getCafes();
  }
}
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}

