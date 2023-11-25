import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dica05PageRoutingModule } from './dica05-routing.module';

import { Dica05Page } from './dica05.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dica05PageRoutingModule
  ],
  declarations: [Dica05Page]
})
export class Dica05PageModule {}
