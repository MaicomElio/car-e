import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Inbox', icon: 'warning' },
    { title: 'Cálculos', url: '/folder/Inbox', icon: 'warning' },
    { title: 'Metas', url: '/folder/Outbox', icon: 'warning' },
    { title: 'Saldos', url: '/folder/Favorites', icon: 'warning' },
    { title: 'Extratos', url: '/folder/Archived', icon: 'warning' },
    { title: 'Gráficos', url: '/folder/Trash', icon: 'warning' },
    { title: 'Transações', url: '/folder/Spam', icon: 'warning' },
    { title: 'Investir', url: '/folder/Archived', icon: 'warning' },
    { title: 'Educação Financeira', url: '/folder/Trash', icon: 'warning' },
    { title: 'Contas Bancárias', url: '/folder/Spam', icon: 'warning' },
    { title: 'Configurações', url: '/folder/Inbox', icon: 'warning' },
  ];
  
  constructor() {}
}
