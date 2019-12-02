import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  countryName: string;
  constructor(activatedRoute: ActivatedRoute) {
    this.countryName = activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
  }

}
