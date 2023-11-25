import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dica06Page } from './dica06.page';

const routes: Routes = [
  {
    path: '',
    component: Dica06Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dica06PageRoutingModule {}
