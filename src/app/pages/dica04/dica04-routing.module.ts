import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dica04Page } from './dica04.page';

const routes: Routes = [
  {
    path: '',
    component: Dica04Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dica04PageRoutingModule {}
