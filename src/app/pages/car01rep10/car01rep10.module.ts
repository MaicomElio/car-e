import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Car01rep10PageRoutingModule } from './car01rep10-routing.module';

import { Car01rep10 } from './car01rep10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Car01rep10PageRoutingModule
  ],
  declarations: [Car01rep10]
})
export class Car01rep10PageModule {}
