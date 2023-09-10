import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Car01newrepPageRoutingModule } from './car01newrep-routing.module';

import { Car01newrepPage } from './car01newrep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Car01newrepPageRoutingModule
  ],
  declarations: [Car01newrepPage]
})
export class Car01newrepPageModule {}
