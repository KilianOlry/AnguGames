import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  nav: Array<any> = [
    {
      name: 'Mention légales',
      route: '/',
    },
    {
      name: 'Contact',
      route: '/',
    },
    {
      name: 'Politique de confidentialité',
      route: '/',
    },
  ];
}
