import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '@shared/interfaces/User';
import { ModalDeleteUserComponent } from '../modal-delete-user/modal-delete-user.component';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '@shared/services/users.service';
import { AlertMessageService } from '@shared/states/alert-message.service';
import { LoadingService } from '@shared/states/loading.service';
import { UserStateService } from '@shared/states/user-state.service';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent implements OnInit {
  @Input() user: User;
  @Output() removeUser = new EventEmitter();

  constructor(
    public dialog: MatDialog,
    private userService: UserService,
    private loadingService: LoadingService,
    private userState: UserStateService,
    private alertService: AlertMessageService,
  ) { }

  ngOnInit(): void {
  }

  openModalDeleteUser(){
    const dialogRef = this.dialog.open(ModalDeleteUserComponent, {
      width: '500px',
      data: this.user
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.loadingService.openLoader();
        this.userService.deleteuser(data.id)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.removeUser.emit(this.user);
            this.alertService.open('Eliminado correctamente', 'error');  
            this.loadingService.closeLoader(500);
          },
          error: (err) => {
            if(err.error) this.alertService.open(err.error.error, 'error');       
            this.loadingService.closeLoader();
          }
        });
      }
    });
  }

  selectUser(){
    this.userState.setUser(this.user);
  }

}
