import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dica07PageRoutingModule } from './dica07-routing.module';

import { Dica07Page } from './dica07.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dica07PageRoutingModule
  ],
  declarations: [Dica07Page]
})
export class Dica07PageModule {}
