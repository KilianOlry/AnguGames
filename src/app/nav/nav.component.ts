import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  title: string = 'AnguBay';

  nav: Array<any> = [
    {
      name: 'Accueil',
      route: '',
    },
    {
      name: 'Tendances',
      route: 'games',
    },
    {
      name: 'Contactez nous',
      route: 'contact',
    },
  ];
}
