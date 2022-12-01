import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './features/auth/auth.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { AuthGuard } from '@shared/guards/auth-guard';
import { LoginGuard } from '@shared/guards/login-guard';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    canActivate: [LoginGuard],
    loadChildren: () =>
      import('./features/auth/auth.module').then(
        (m) => m.AuthModule
      ),
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
