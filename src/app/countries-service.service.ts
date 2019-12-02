import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesServiceService {
  private url = 'https://api.worldbank.org/v2/country';
  private apendix = '?per_page=1000&format=json';

  constructor(private http: HttpClient) {

  }

  getCountries$(){
    return this.http.get<any[]>(this.url + this.apendix).pipe(map(data => (data[1])));
  }


}
