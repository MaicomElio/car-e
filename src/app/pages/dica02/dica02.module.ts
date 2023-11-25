import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dica02PageRoutingModule } from './dica02-routing.module';

import { Dica02Page } from './dica02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dica02PageRoutingModule
  ],
  declarations: [Dica02Page]
})
export class Dica02PageModule {}
