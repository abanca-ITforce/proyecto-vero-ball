import { Component, OnInit } from '@angular/core';
import { CountriesServiceService } from 'src/app/countries-service.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countriesList$;

  constructor(private countriesService: CountriesServiceService) {
    this.countriesList$ = countriesService.getCountries$();
  }

  ngOnInit() {
  }

}
