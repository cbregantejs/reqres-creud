import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonFullComponent } from './components/button-full/button-full.component';
import { LoadingComponent } from './components/loading/loading.component';

import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const ANGULAR_MATERIAL = [
  MatButtonModule,
  MatProgressSpinnerModule,
  MatSnackBarModule
];

const COMPONENTS = [
  ButtonFullComponent,
  LoadingComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    ...ANGULAR_MATERIAL
  ],
  exports:[
    ...COMPONENTS
  ]
})
export class SharedModule { }
