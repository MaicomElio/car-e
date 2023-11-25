import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dica05Page } from './dica05.page';

const routes: Routes = [
  {
    path: '',
    component: Dica05Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dica05PageRoutingModule {}
