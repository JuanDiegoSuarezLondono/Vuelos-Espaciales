import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './UI/layout/layout.component';
import { CheckLoginGuard } from './UI/shared/guards/check-login.guard';

const routes: Routes = [
  {
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full',
    },
    {
      path: 'home',
      canActivate: [CheckLoginGuard],
      loadChildren: () => import('./UI/home/home.module').then(m => m.HomeModule)
    },
    {
      path: 'users',
      canActivate: [CheckLoginGuard],
      loadChildren: () => import('./UI/users/users.module').then(m => m.UsersModule)
    },
    {
      path: 'trips',
      canActivate: [CheckLoginGuard],
      loadChildren: () => import('./UI/trips/trips.module').then(m => m.TripsModule)
    },
    {
      path: 'reservations',
      canActivate: [CheckLoginGuard],
      loadChildren: () => import('./UI/reservations/reservations.module').then(m => m.ReservationsModule)
    },
  ],
  },
  {
    path: 'auth',
    loadChildren: () => import('./UI/auth/auth.module').then(m => m.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
