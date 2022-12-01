import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-delete-user',
  templateUrl: './modal-delete-user.component.html',
  styleUrls: ['./modal-delete-user.component.scss']
})
export class ModalDeleteUserComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalDeleteUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}


  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
