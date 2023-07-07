import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    title: 'Nos jeux | AnguGames',
    path: 'games',
    component: GamesComponent,
  },
  {
    title: 'Contact | AnguGames',
    path: 'contact',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
