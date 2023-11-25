import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dica09PageRoutingModule } from './dica09-routing.module';

import { Dica09Page } from './dica09.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dica09PageRoutingModule
  ],
  declarations: [Dica09Page]
})
export class Dica09PageModule {}
