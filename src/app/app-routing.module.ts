import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'give',
    loadChildren: () => import('./give/give.module').then( m => m.GivePageModule)
  },
  {
    path: 'sermon',
    loadChildren: () => import('./sermon/sermon.module').then( m => m.SermonPageModule)
  },
  {
    path: 'prayer',
    loadChildren: () => import('./prayer/prayer.module').then( m => m.PrayerPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
