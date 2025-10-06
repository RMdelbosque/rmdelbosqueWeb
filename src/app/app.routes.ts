import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./rmdelbosque/pages/home-page/home-page.component'),
  },
  {
    path: 'contact',
    loadComponent: () => import('./rmdelbosque/pages/contact-page/contact-page.component')
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./rmdelbosque/pages/portfolio-page/porfolio-page.component')
  },
  {
    path: 'about',
    loadComponent: () => import('./rmdelbosque/pages/about-me-page/about-me-page.component')
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

