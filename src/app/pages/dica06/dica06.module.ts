import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dica06PageRoutingModule } from './dica06-routing.module';

import { Dica06Page } from './dica06.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dica06PageRoutingModule
  ],
  declarations: [Dica06Page]
})
export class Dica06PageModule {}
