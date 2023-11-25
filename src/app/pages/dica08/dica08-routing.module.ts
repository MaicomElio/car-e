import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dica08Page } from './dica08.page';

const routes: Routes = [
  {
    path: '',
    component: Dica08Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dica08PageRoutingModule {}
