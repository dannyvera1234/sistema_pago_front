
import { Route } from '@angular/router';
import { RepotesComponent } from './repotes.component';

export default [
  {
    path: '',
    component: RepotesComponent,
  }, { path: '**', redirectTo: '', pathMatch: 'full' },
] satisfies Route[];
