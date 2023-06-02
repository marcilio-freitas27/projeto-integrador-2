import { FormTutorialComponent } from './view/form-tutorial/form-tutorial.component';
import { InicioComponent } from './view/inicio/inicio.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'inicio',
    loadComponent: () => import('./view/inicio/inicio.component').then((m) => m.InicioComponent),
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'tutorial',
    loadComponent: () => import('./view/form-tutorial/form-tutorial.component').then((m)=> FormTutorialComponent)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
];
