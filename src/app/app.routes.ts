import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
  },
  {
    path: 'cursos',
    loadComponent: () => import('./pages/cursos/cursos').then(m => m.Cursos),
  },
  {
    path: 'cursos/:id',
    loadComponent: () => import('./pages/curso-detalle/curso-detalle').then(m => m.CursoDetalle),
  },
  {
    path: 'favoritos',
    loadComponent: () => import('./pages/favoritos/favoritos').then(m => m.Favoritos),
  },
  {
    path: 'admin',
    loadComponent: () => import('./pages/admin/admin').then(m => m.Admin),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
