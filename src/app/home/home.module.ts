import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { CountriesComponent } from './countries/countries.component';
import { MatListModule } from '@angular/material/list';
import { CountriesServiceService } from '../countries-service.service';


@NgModule({
  declarations: [HomeComponent, CountriesComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatListModule

  ]
})
export class HomeModule { }
