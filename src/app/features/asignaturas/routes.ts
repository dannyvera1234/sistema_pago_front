
import { Route } from '@angular/router';
import { AsignaturasComponent } from './asignaturas.component';

export default [
  {
    path: '',
    component: AsignaturasComponent,
  }, { path: '**', redirectTo: '', pathMatch: 'full' },
] satisfies Route[];
