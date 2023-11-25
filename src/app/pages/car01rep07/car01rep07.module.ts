import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Car01rep07PageRoutingModule } from './car01rep07-routing.module';

import { Car01rep07 } from './car01rep07.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Car01rep07PageRoutingModule
  ],
  declarations: [Car01rep07]
})
export class Car01rep07PageModule {}
