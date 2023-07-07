import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  Plateformes: Array<any> = [
    {
      name: 'Xbox',
      logo: 'assets/images/logoxbox.svg',
    },
    {
      name: 'Playstation',
      logo: 'assets/images/playstation-fill.svg',
    },
    {
      name: 'Nintendo',
      logo: 'assets/images/nintendo.svg',
    },
  ];
}
