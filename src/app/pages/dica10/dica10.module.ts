import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dica10PageRoutingModule } from './dica10-routing.module';

import { Dica10Page } from './dica10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dica10PageRoutingModule
  ],
  declarations: [Dica10Page]
})
export class Dica10PageModule {}
