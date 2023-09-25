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
    { title: 'Dicas', url: '/dicas', icon: 'bulb' },

  ];
  
  constructor() {}
}
