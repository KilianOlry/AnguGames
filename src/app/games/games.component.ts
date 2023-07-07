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
      imageUrl:
        'https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-listing-thumb-01-09sep21$en?$1200px$',
    },
    // {
    //   name: 'Horizon Forbidden West',
    //   lien: '',
    //   imageUrl:
    //     'https://gmedia.playstation.com/is/image/SIEPDC/horizon-forbidden-west-store-art-01-01apr21$en?$1200px$',
    // },
    {
      name: 'The Last of Us',
      lien: '',
      imageUrl:
        'https://gmedia.playstation.com/is/image/SIEPDC/the-last-of-us-part-i-keyart-01-en-18may22?$1200px$',
    },
    {
      name: 'Gran Tursimo',
      lien: '',
      imageUrl:
        'https://gmedia.playstation.com/is/image/SIEPDC/gran-turismo-7-packshot-01-en-09sep21?$1200px$',
    },
    {
      name: 'Star Wars Jedi Fallen Order',
      lien: '',
      imageUrl:
        'https://image.api.playstation.com/vulcan/ap/rnd/202304/1016/47becbe467e18575f71429abbaec9af707865744b825f34d.png?w=1200',
    },
  ];
}
