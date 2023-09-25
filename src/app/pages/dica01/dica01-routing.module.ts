import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dica01Page } from './dica01.page';

const routes: Routes = [
  {
    path: '',
    component: Dica01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dica01PageRoutingModule {}
