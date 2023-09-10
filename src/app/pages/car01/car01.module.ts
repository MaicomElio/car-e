import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Car01PageRoutingModule } from './car01-routing.module';

import { Car01Page } from './car01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Car01PageRoutingModule
  ],
  declarations: [Car01Page]
})
export class Car01PageModule {}
