import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    loadComponent: () => import('./components/home/home').then((m) => m.Home),
    title: 'Home - My Application',
  },

  {
    path: 'about',
    loadComponent: () => import('./components/about/about').then((m) => m.About),
    title: 'About Us',
  },

  {
    path: 'gallery',
    loadComponent: () => import('./components/gallery/gallery').then((m) => m.Gallery),
    title: 'Gallery',
  },

  {
    path: '**',
    redirectTo: 'home',
  },
];
