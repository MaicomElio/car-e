import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dica04PageRoutingModule } from './dica04-routing.module';

import { Dica04Page } from './dica04.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dica04PageRoutingModule
  ],
  declarations: [Dica04Page]
})
export class Dica04PageModule {}
