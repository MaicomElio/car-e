import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Inbox', icon: 'warning' },
    { title: 'Meus Veículos', url: '/folder/Inbox', icon: 'warning' },
    { title: 'Histórico', url: '/folder/Outbox', icon: 'warning' },
    { title: 'Próximas Manutenções', url: '/folder/Favorites', icon: 'warning' },
    { title: 'Notificações', url: '/folder/Archived', icon: 'warning' },
    { title: 'Dicas', url: '/folder/Trash', icon: 'warning' },
    { title: 'Configurações', url: '/folder/Spam', icon: 'warning' },
    { title: 'Sair', url: '/folder/Archived', icon: 'warning' },
  ];
  
  constructor() {}
}
