import { Routes } from '@angular/router';

import { Login } from './features/auth/login/login';
import { Dashboard } from './features/dashboard/dashboard/dashboard';
import { AdminLayout } from './core/layout/admin-layout/admin-layout';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path: 'login',
    component: Login,
  },

  {
    path: '',
    component: AdminLayout,
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
      },
    ],
  },

  {
    path: '**',
    redirectTo: 'login',
  },
];
