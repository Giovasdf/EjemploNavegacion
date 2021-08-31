import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/tabs/music',
    pathMatch:'full'
  },
  {
    path: '',
    component: TabsPage,
    children:
    [
      {
        path: 'music',
        loadChildren: () => import('./music/music.module').then( m => m.MusicPageModule)
      },
      {
        path: 'movies',
        loadChildren: () => import('./movies/movies.module').then( m => m.MoviesPageModule)
      },
      {
        path: 'games',
        loadChildren: () => import('./games/games.module').then( m => m.GamesPageModule)
      }]
 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
