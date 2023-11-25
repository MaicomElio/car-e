import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dica03PageRoutingModule } from './dica03-routing.module';

import { Dica03Page } from './dica03.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dica03PageRoutingModule
  ],
  declarations: [Dica03Page]
})
export class Dica03PageModule {}
