import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Car01replistPageRoutingModule } from './car01replist-routing.module';

import { Car01replistPage } from './car01replist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Car01replistPageRoutingModule
  ],
  declarations: [Car01replistPage]
})
export class Car01replistPageModule {}
