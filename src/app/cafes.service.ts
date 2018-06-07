import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map, switchMap, throttle, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})


export class CafesService {

  // private userURL = 'assets/data/cafes.json';
  // tslint:disable-next-line:max-line-length
  private userURL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=51.673858,7.815982&radius=15000&types=cafe&key=AIzaSyCewk0GTGhYmDBHvt88JcAfp4aks81a88g';
  constructor(private _http: HttpClient) { }
  getCafes() {
    const uri = this.userURL;
    return this._http.get(uri).pipe(map (res => {
        return res['results'];
    }, error => {
        return error;
    }));
  }
}
