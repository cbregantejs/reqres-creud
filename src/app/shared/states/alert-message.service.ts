import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertMessageService {
  constructor(
    private snackBar: MatSnackBar,
  ) { }

  open(message: string, status:string, duration = 1500) {
    this.snackBar.open(message, 'ok', {
      duration,
      panelClass: [`${status}-snackbar`],
    });
  }

}
