import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { SharedModule } from '@shared/shared.module';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';

const ANGULAR_MATERIAL = [
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,  
];

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    ...ANGULAR_MATERIAL,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    SharedModule,
  ]
})
export class AuthModule { }
