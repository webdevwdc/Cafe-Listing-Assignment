import { TestBed, inject } from '@angular/core/testing';

import { CafesService } from './cafes.service';

describe('CafesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CafesService]
    });
  });

  it('should be created', inject([CafesService], (service: CafesService) => {
    expect(service).toBeTruthy();
  }));
});
