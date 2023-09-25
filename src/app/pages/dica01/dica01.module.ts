import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dica01PageRoutingModule } from './dica01-routing.module';

import { Dica01Page } from './dica01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dica01PageRoutingModule
  ],
  declarations: [Dica01Page]
})
export class Dica01PageModule {}
