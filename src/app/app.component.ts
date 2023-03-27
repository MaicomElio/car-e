import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Meus Veículos', url: '/meusveiculos', icon: 'car' },
    { title: 'Histórico', url: '/historico', icon: 'albums' },
    { title: 'Próximas Manutenções', url: '/proximasmanutencoes', icon: 'build' },
    { title: 'Notificações', url: '/notificacoes', icon: 'notifications' },
    { title: 'Dicas', url: '/dicas', icon: 'bulb' },
    { title: 'Configurações', url: '/config', icon: 'settings' },
    { title: 'Sair', url: '/folder/Archived', icon: 'exit' },
  ];
  
  constructor() {}
}
