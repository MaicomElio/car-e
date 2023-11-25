import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  {
    path: 'loader',
    loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'config',
    loadChildren: () => import('./pages/config/config.module').then( m => m.ConfigPageModule)
  },
  {
    path: 'meusveiculos',
    loadChildren: () => import('./pages/meusveiculos/meusveiculos.module').then( m => m.MeusveiculosPageModule)
  },
  {
    path: 'historico',
    loadChildren: () => import('./pages/historico/historico.module').then( m => m.HistoricoPageModule)
  },
  {
    path: 'dicas',
    loadChildren: () => import('./pages/dicas/dicas.module').then( m => m.DicasPageModule)
  },
  {
    path: 'proximasmanutencoes',
    loadChildren: () => import('./pages/proximasmanutencoes/proximasmanutencoes.module').then( m => m.ProximasmanutencoesPageModule)
  },
  {
    path: 'notificacoes',
    loadChildren: () => import('./pages/notificacoes/notificacoes.module').then( m => m.NotificacoesPageModule)
  },
  {
    path: 'car01',
    loadChildren: () => import('./pages/car01/car01.module').then( m => m.Car01PageModule)
  },
  {
    path: 'car01newrep',
    loadChildren: () => import('./pages/car01newrep/car01newrep.module').then( m => m.Car01newrepPageModule)
  },
  {
    path: 'car01replist',
    loadChildren: () => import('./pages/car01replist/car01replist.module').then( m => m.Car01replistPageModule)
  },
  {
    path: 'dica01',
    loadChildren: () => import('./pages/dica01/dica01.module').then( m => m.Dica01PageModule)
  },
  {
    path: 'car01rep02',
    loadChildren: () => import('./pages/car01rep02/car01rep02.module').then( m => m.Car01rep02PageModule)
  },
  {
    path: 'car01rep03',
    loadChildren: () => import('./pages/car01rep03/car01rep03.module').then( m => m.Car01rep03PageModule)
  },
  {
    path: 'car01rep04',
    loadChildren: () => import('./pages/car01rep04/car01rep04.module').then( m => m.Car01rep04PageModule)
  },
  {
    path: 'car01rep05',
    loadChildren: () => import('./pages/car01rep05/car01rep05.module').then( m => m.Car01rep05PageModule)
  },
  {
    path: 'car01rep06',
    loadChildren: () => import('./pages/car01rep06/car01rep06.module').then( m => m.Car01rep06PageModule)
  },
  {
    path: 'car01rep07',
    loadChildren: () => import('./pages/car01rep07/car01rep07.module').then( m => m.Car01rep07PageModule)
  },
  {
    path: 'car01rep08',
    loadChildren: () => import('./pages/car01rep08/car01rep08.module').then( m => m.Car01rep08PageModule)
  },
  {
    path: 'car01rep09',
    loadChildren: () => import('./pages/car01rep09/car01rep09.module').then( m => m.Car01rep09PageModule)
  },
  {
    path: 'car01rep10',
    loadChildren: () => import('./pages/car01rep10/car01rep10.module').then( m => m.Car01rep10PageModule)
  },
  {
    path: 'dica02',
    loadChildren: () => import('./pages/dica02/dica02.module').then( m => m.Dica02PageModule)
  },
  {
    path: 'dica03',
    loadChildren: () => import('./pages/dica03/dica03.module').then( m => m.Dica03PageModule)
  },
  {
    path: 'dica04',
    loadChildren: () => import('./pages/dica04/dica04.module').then( m => m.Dica04PageModule)
  },
  {
    path: 'dica05',
    loadChildren: () => import('./pages/dica05/dica05.module').then( m => m.Dica05PageModule)
  },
  {
    path: 'dica06',
    loadChildren: () => import('./pages/dica06/dica06.module').then( m => m.Dica06PageModule)
  },
  {
    path: 'dica07',
    loadChildren: () => import('./pages/dica07/dica07.module').then( m => m.Dica07PageModule)
  },
  {
    path: 'dica08',
    loadChildren: () => import('./pages/dica08/dica08.module').then( m => m.Dica08PageModule)
  },
  {
    path: 'dica09',
    loadChildren: () => import('./pages/dica09/dica09.module').then( m => m.Dica09PageModule)
  },
  {
    path: 'dica10',
    loadChildren: () => import('./pages/dica10/dica10.module').then( m => m.Dica10PageModule)
  },











];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
