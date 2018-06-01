import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {MatDatepickerModule, MatFormFieldModule, MatNativeDateModule,MatInputModule,
MatIconModule, MatToolbarModule,MatButtonModule, MatSnackBarModule} from '@angular/material';
import { AgmSnazzyInfoWindowModule, } from '@agm/snazzy-info-window';

import { SiteRoutingModule } from './site-routing.module';
import { HomeComponent } from './home/home.component';

import { MaterialTimeControlModule } from '../time/material-time-control.module';

@NgModule({
  imports: [

  	MatDatepickerModule, MatFormFieldModule,
    CommonModule,MatNativeDateModule,MatIconModule,
    SiteRoutingModule,MatInputModule, MatButtonModule,
    FormsModule,MatToolbarModule,ReactiveFormsModule,
    AgmSnazzyInfoWindowModule, MaterialTimeControlModule,MatSnackBarModule,


    AgmCoreModule.forRoot({
    	apiKey: 'AIzaSyCewk0GTGhYmDBHvt88JcAfp4aks81a88g'
    })
  ],
  declarations: [
  	HomeComponent,
  ],
  entryComponents: [
   
  ],
})
export class SiteModule { }
