import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Car01rep03PageRoutingModule } from './car01rep03-routing.module';

import { Car01rep03 } from './car01rep03.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Car01rep03PageRoutingModule
  ],
  declarations: [Car01rep03]
})
export class Car01rep03PageModule {}
