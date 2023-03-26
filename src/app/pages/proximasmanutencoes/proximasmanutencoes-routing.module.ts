import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProximasmanutencoesPage } from './proximasmanutencoes.page';

const routes: Routes = [
  {
    path: '',
    component: ProximasmanutencoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProximasmanutencoesPageRoutingModule {}
