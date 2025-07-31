import { Routes } from '@angular/router';
import { adminGuard } from '@core/guards/admin-guard';
import { Dashboard } from '@feature/pages/dashboard/dashboard';
import { Home } from '@feature/pages/home/home';
import { NotAutorized } from '@feature/pages/not-autorized/not-autorized';
import { Pagenotfound } from '@feature/pages/pagenotfound/pagenotfound';

export const routes: Routes = [
  { path: 'home', component: Home },
  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [adminGuard],
    data: { role: 'admin' },
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'notauthorized', component: NotAutorized },
  { path: '**', component: Pagenotfound },
];
