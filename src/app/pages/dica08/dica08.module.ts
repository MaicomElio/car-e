import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dica08PageRoutingModule } from './dica08-routing.module';

import { Dica08Page } from './dica08.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dica08PageRoutingModule
  ],
  declarations: [Dica08Page]
})
export class Dica08PageModule {}
