import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDatepickerModule, MatFormFieldModule, MatIconModule, MatSnackBarModule,
MatNativeDateModule, MatInputModule } from '@angular/material';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmSnazzyInfoWindowModule, } from '@agm/snazzy-info-window';

import { MaterialTimeControlModule } from '../../time/material-time-control.module';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core"


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, ],
      imports: [
        MatDatepickerModule,FormsModule, ReactiveFormsModule, MatFormFieldModule,MatSnackBarModule,
        MatIconModule, MaterialTimeControlModule, AgmCoreModule,AgmSnazzyInfoWindowModule,
        HttpClientModule, MatNativeDateModule,MatInputModule, BrowserAnimationsModule,
        AgmCoreModule.forRoot({})
      ],
      providers: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as a header title 'cafes list'`, async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const home = fixture.debugElement.componentInstance;
    expect(home.title).toEqual('cafes list');
  }));

  it('should render title in a h2 tag', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('cafes list');
  }));
  
});
