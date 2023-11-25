import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dica03Page } from './dica03.page';

const routes: Routes = [
  {
    path: '',
    component: Dica03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dica03PageRoutingModule {}
