import { Component } from '@angular/core';
import { Games } from 'src/interfaces/games.interfaces';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent {
  games: Games[] = [
    {
      name: 'God Of War Ragnarok',
      lien: '',
      imageUrl: 'assets/images/Games_psn/God_of War.jpg',
    },
    {
      name: 'Horizon Forbidden West',
      lien: '',
      imageUrl: 'assets/images/Games_psn/Horizon_Forbidden_West.jpg',
    },
    {
      name: 'The Last of Us',
      lien: '',
      imageUrl:
        'assets/images/Games_psn/the-last-of-us-remake-part-1-walkthrough.jpg',
    },
    {
      name: 'Gran Tursimo',
      lien: '',
      imageUrl: 'assets/images/Games_psn/Gran Turismo.jpg',
    },
    {
      name: 'Star Wars Jedi Fallen Order',
      lien: '',
      imageUrl:
        'https://image.api.playstation.com/vulcan/ap/rnd/202304/1016/47becbe467e18575f71429abbaec9af707865744b825f34d.png?w=1200',
    },
  ];
}
