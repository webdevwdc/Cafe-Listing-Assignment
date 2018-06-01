import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map, switchMap, throttle, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class CafesService {

	private userURL = "../assets/data/cafes.json";
  constructor(private http: HttpClient) { }
  getCafes() {
    const uri = this.userURL;
    return this.http.get(uri).pipe(map (res => {
        return res;
    }));
  }
  // getDays(){
  // 	const uri = this.userURL;
  // 	return this.http.get(uri).pipe(map (res => {
  // 		// const availability = []
  //       return res[0].availability;
  //   }));
  // }

}
