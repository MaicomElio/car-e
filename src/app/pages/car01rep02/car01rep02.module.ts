import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Car01rep02PageRoutingModule } from './car01rep02-routing.module';

import { Car01rep02 } from './car01rep02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Car01rep02PageRoutingModule
  ],
  declarations: [Car01rep02]
})
export class Car01rep02PageModule {}
