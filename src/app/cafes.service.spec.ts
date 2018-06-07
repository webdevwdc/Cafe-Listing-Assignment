import { TestBed, getTestBed, inject } from '@angular/core/testing';
import { CafesService } from './cafes.service';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CafesService', () => {
let service : CafesService;
  beforeEach(() =>  {
    TestBed.configureTestingModule({
      providers: [CafesService],
      imports: [HttpClientModule]
    });
  });
  it('should be created', inject([CafesService], (service: CafesService) => {
    expect(service).toBeTruthy();
  }));
});
