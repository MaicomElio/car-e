import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Car01rep09PageRoutingModule } from './car01rep09-routing.module';

import { Car01rep09 } from './car01rep09.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Car01rep09PageRoutingModule
  ],
  declarations: [Car01rep09]
})
export class Car01rep09PageModule {}
