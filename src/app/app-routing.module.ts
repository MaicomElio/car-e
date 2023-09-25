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









];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
