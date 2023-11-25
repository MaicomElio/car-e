import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Car01rep06PageRoutingModule } from './car01rep06-routing.module';

import { Car01rep06 } from './car01rep06.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Car01rep06PageRoutingModule
  ],
  declarations: [Car01rep06]
})
export class Car01rep06PageModule {}
