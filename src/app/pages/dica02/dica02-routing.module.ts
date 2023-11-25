import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dica02Page } from './dica02.page';

const routes: Routes = [
  {
    path: '',
    component: Dica02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dica02PageRoutingModule {}
