import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeusveiculosPage } from './meusveiculos.page';

const routes: Routes = [
  {
    path: '',
    component: MeusveiculosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeusveiculosPageRoutingModule {}
