
import { Route } from '@angular/router';
import { EstudiantesComponent } from './estudiantes.component';

export default [
  {
    path: '',
    component: EstudiantesComponent,
  }, { path: '**', redirectTo: '', pathMatch: 'full' },
] satisfies Route[];
