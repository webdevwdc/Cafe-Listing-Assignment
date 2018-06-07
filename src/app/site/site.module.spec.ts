import { SiteModule } from './site.module';
import { TestBed, async } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';



describe('SiteModule', () => {
  let siteModule: SiteModule;


  beforeEach(() => {
    siteModule = new SiteModule();
      TestBed.configureTestingModule({
      	imports: [
      			HttpClientModule
	      ],
	      declarations: [
	      	// matDatepicker
	      ],
	      schemas: [
	      	CUSTOM_ELEMENTS_SCHEMA
	      ],
      })
  });

  it('should create an instance', () => {
    expect(siteModule).toBeTruthy();
  });
});
