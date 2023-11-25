import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dica10Page } from './dica10.page';

const routes: Routes = [
  {
    path: '',
    component: Dica10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dica10PageRoutingModule {}
