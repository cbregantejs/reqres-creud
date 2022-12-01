import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponentsModule } from './components/dashboard-components.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

const ANGULAR_MATERIAL = [
  MatButtonModule,
  MatCardModule
];

@NgModule({
  declarations: [
    DashboardComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DashboardComponentsModule,
    ...ANGULAR_MATERIAL
  ]
})
export class DashboardModule { }
