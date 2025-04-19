import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./features/login/routes')
   },
   {
    path: 'sistemaAcademico',
    loadComponent: () => import('./layouts/layouts.component').then(m => m.LayoutsComponent),
    children: []
   }
];
