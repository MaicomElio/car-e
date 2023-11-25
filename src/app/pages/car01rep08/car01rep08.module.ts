import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Car01rep08PageRoutingModule } from './car01rep08-routing.module';

import { Car01rep08 } from './car01rep08.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Car01rep08PageRoutingModule
  ],
  declarations: [Car01rep08]
})
export class Car01rep08PageModule {}
