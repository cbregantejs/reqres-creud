import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '@shared/interfaces/User';
import { UserService } from '@shared/services/users.service';
import { AlertMessageService } from '@shared/states/alert-message.service';
import { LoadingService } from '@shared/states/loading.service';
import { UserStateService } from '@shared/states/user-state.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  currentPage: number = 1;
  totalPages: number;
  totalItems: number;
  userList: Array<User> = [];
  currentUser: User;
  showForm: boolean;
  userSubs: Subscription;
  
  constructor(
    private userService: UserService,
    private loadingService: LoadingService,
    private alertService: AlertMessageService,
    private userState: UserStateService,
  ) { }

  ngOnInit(): void {
    this.getUsers(this.currentPage);
    this.userSubs = this.userState.getUser().subscribe(user => {
      this.currentUser = user;
      if(user){
        this.toggleForm(true);
      }
    })
  }

  ngOnDestroy(): void {
    this.userSubs.unsubscribe();
  }

  getUsers(page: number){
    this.loadingService.openLoader();
    this.userService.getUsers(page).subscribe({
      next: (res) => {
        this.totalPages = res.total_pages;
        this.currentPage = res.page;
        this.totalItems = res.total;
        this.userList = res.data
        this.loadingService.closeLoader();
      },
      error: (err) => {
        if(err.error) this.alertService.open(err.error.error, 'error');       
        this.loadingService.closeLoader();
      }
    });
  }

  removeUser(user: User){
    this.userList = this.userList.filter(item => item.id !== user.id);
  }

  toggleForm(state: boolean){
    this.showForm = state;
    if(!state) this.userState.clearUser();
  }


}
