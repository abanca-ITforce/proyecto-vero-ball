import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private endPoint = 'https://api.worldbank.org/v2/country';
  private format = '?per_page=1000&format=json';
  private regionsUrl = 'https://api.worldbank.org/v2/region/?format=json';
  private regionEndPoint = 'https://api.worldbank.org/v2/region/';
  private regionFormat = '?per_page=1000&format=json';
  private countryRegionFormat = '&per_page=1000&format=json';

  constructor(private httpClient: HttpClient) {}

  getAllCountries$() {
    const url = this.endPoint + this.format;
    return this.httpClient.get<any[]>(url).pipe(map(result => result[1]));
  }

  getCountryById$(countryId) {
    const url = this.endPoint + '/' + countryId + this.format;
    return this.httpClient.get<any>(url).pipe(map(result => result[1][0]));
  }

  getAllRegions$() {
    return this.httpClient.get<any[]>(this.regionsUrl).pipe(map(result => result[1]));
  }

  getRegionById$(regionId) {
    const url = this.regionEndPoint + regionId + this.regionFormat;
    return this.httpClient.get<any>(url).pipe(tap(r => console.log(r)), map(result => result[1][0]));
  }

  getCountriesByRegionId$(regionId){
    const url = this.endPoint + '?region=' + regionId + this.countryRegionFormat;
    return this.httpClient.get<any>(url).pipe(map(result => result[1]));
  }

  getIncomingLevels(){
    // const url = 'https://api.worldbank.org/v2/incomeLevel/?format=json';
    return [
      {'id':'HIC','iso2code':'XD','value':'High income'},
      {'id':'INX','iso2code':'XY','value':'Not classified'},
      {'id':'LIC','iso2code':'XM','value':'Low income'},
      {'id':'LMC','iso2code':'XN','value':'Lower middle income'},
      {'id':'LMY','iso2code':'XO','value':'Low & middle income'},
      {'id':'MIC','iso2code':'XP','value':'Middle income'},
      {'id':'UMC','iso2code':'XT','value':'Upper middle income'}
    ];
  }
}
