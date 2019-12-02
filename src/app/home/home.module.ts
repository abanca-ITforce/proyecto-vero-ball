import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { CountriesComponent } from './countries/countries.component';
import { MatListModule } from '@angular/material/list';
import { CountryComponent } from './country/country.component';

@NgModule({
  declarations: [HomeComponent, CountriesComponent, CountryComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatListModule
  ]
})
export class HomeModule { }
