import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Car01rep04PageRoutingModule } from './car01rep04-routing.module';

import { Car01rep04 } from './car01rep04.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Car01rep04PageRoutingModule
  ],
  declarations: [Car01rep04]
})
export class Car01rep04PageModule {}
