import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionRoutingModule } from './region-routing.module';
import { RegionComponent } from './region.component';
import { RegionCardComponent } from './region-card/region-card.component';


@NgModule({
  declarations: [RegionComponent, RegionCardComponent],
  imports: [
    CommonModule,
    RegionRoutingModule
  ]
})
export class RegionModule { }
