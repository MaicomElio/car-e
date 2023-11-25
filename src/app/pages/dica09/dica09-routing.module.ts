import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dica09Page } from './dica09.page';

const routes: Routes = [
  {
    path: '',
    component: Dica09Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dica09PageRoutingModule {}
