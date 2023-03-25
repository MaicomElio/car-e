import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeusveiculosPageRoutingModule } from './meusveiculos-routing.module';

import { MeusveiculosPage } from './meusveiculos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeusveiculosPageRoutingModule
  ],
  declarations: [MeusveiculosPage]
})
export class MeusveiculosPageModule {}
