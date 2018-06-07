import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WTimeComponent } from './w-time.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core"

import {MatToolbarModule, MatCommonModule, MatButtonModule} from '@angular/material';

describe('WTimeComponent', () => {
  let component: WTimeComponent;
  let fixture: ComponentFixture<WTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatToolbarModule, MatCommonModule, MatButtonModule],
      declarations: [ WTimeComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
