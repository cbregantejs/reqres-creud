import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatListModule} from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';

import { HeaderComponent } from './header/header.component';
import { CardUserComponent } from './card-user/card-user.component';
import { ModalDeleteUserComponent } from './modal-delete-user/modal-delete-user.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormUserComponent } from './form-user/form-user.component';
import { PaginationUserComponent } from './pagination-user/pagination-user.component';
import {MatSelectModule} from '@angular/material/select';

const ANGULAR_MATERIAL = [
  MatCardModule,
  MatButtonModule,
  MatDividerModule,
  MatToolbarModule,
  MatIconModule,
  MatTooltipModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatGridListModule,
  MatInputModule,
  MatSelectModule
];

const COMPONENTS = [
  HeaderComponent,
  CardUserComponent,
  ModalDeleteUserComponent,
  FormUserComponent,
  PaginationUserComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, ...ANGULAR_MATERIAL, RouterModule,FormsModule, ReactiveFormsModule],
  exports: [...COMPONENTS],
})
export class DashboardComponentsModule { }
