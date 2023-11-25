import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dica07Page } from './dica07.page';

const routes: Routes = [
  {
    path: '',
    component: Dica07Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dica07PageRoutingModule {}
