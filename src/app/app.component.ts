import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'warning' },
    { title: 'Meus Veículos', url: '/meusveiculos', icon: 'warning' },
    { title: 'Histórico', url: '/historico', icon: 'warning' },
    { title: 'Próximas Manutenções', url: '/proximasmanutencoes', icon: 'warning' },
    { title: 'Notificações', url: '/notificacoes', icon: 'warning' },
    { title: 'Dicas', url: '/dicas', icon: 'warning' },
    { title: 'Configurações', url: '/config', icon: 'warning' },
    { title: 'Sair', url: '/folder/Archived', icon: 'warning' },
  ];
  
  constructor() {}
}
