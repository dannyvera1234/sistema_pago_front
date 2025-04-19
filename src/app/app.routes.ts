import { Routes } from '@angular/router';

export const routes: Routes & {
  data?: any & {
    icon?: string; title?: string; permissions?: string
  };
} = [
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
      children: [
        {
          path: 'dashboard',
          loadChildren: () => import('./features/dashboard/routes'),
          data: {
            title: 'Dashboard',
            icon: 'solar:cart-line-duotone'
          }
        },
        {
          path: 'estudiantes',
          loadChildren: () => import('./features/estudiantes/routes'),
          data: {
            title: 'Estudiantes',
            icon: 'solar:user-plus-outline'
          }
        },
        {
          path: 'docentes',
          loadChildren: () => import('./features/docentes/routes'),
          data: {
            title: 'Docentes',
            icon: 'solar:call-chat-outline'
          }
        },
        {
          path: 'asignaturas',
          loadChildren: () => import('./features/asignaturas/routes'),
          data: {
            title: 'Asignaturas',
            icon: 'solar:ticket-line-duotone'
          }
        },
        {
          path: 'reportes',
          loadChildren: () => import('./features/repotes/routes'),
          data: {
            title: 'Reportes',
            icon: 'solar:file-text-line-duotone'
          }
        },
        {
          path: 'configuracion',
          loadChildren: () => import('./features/configuracion/routes'),
          data: {
            title: 'Configuracion',
            icon: 'solar:settings-outline'
          }
        }
      ]
    }
  ];
