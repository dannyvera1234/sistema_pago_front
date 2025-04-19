
import { Route } from '@angular/router';
import { DocentesComponent } from './docentes.component';

export default [
  {
    path: '',
    component: DocentesComponent,
  }, { path: '**', redirectTo: '', pathMatch: 'full' },
] satisfies Route[];
