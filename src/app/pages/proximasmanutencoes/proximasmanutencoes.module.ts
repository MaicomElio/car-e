import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProximasmanutencoesPageRoutingModule } from './proximasmanutencoes-routing.module';

import { ProximasmanutencoesPage } from './proximasmanutencoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProximasmanutencoesPageRoutingModule
  ],
  declarations: [ProximasmanutencoesPage]
})
export class ProximasmanutencoesPageModule {}
