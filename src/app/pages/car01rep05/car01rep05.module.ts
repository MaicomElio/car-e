import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Car01rep05PageRoutingModule } from './car01rep05-routing.module';

import { Car01rep05 } from './car01rep05.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Car01rep05PageRoutingModule
  ],
  declarations: [Car01rep05]
})
export class Car01rep05PageModule {}
