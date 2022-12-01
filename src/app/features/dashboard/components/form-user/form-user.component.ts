import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '@shared/interfaces/User';
import { UserService } from '@shared/services/users.service';
import { AlertMessageService } from '@shared/states/alert-message.service';
import { LoadingService } from '@shared/states/loading.service';
import { UserStateService } from '@shared/states/user-state.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit, OnDestroy  {
  @Input() stateForm: boolean;
  @Output() refreshUsers = new EventEmitter();
  @Output() closeForm = new EventEmitter();
  userSubs: Subscription;
  currentUser: User;
  titleForm: string;
  public formUser: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private loadingService: LoadingService,
    private userState: UserStateService,
    private alertService: AlertMessageService,
  ) {
  }

  ngOnInit(): void {
    this.userSubs = this.userState.getUser().subscribe(user => {
      this.currentUser = user;
      if(user){        
        this.titleForm = 'Editar Usuario'; 
      }
      this.formUser.patchValue({name: user?.first_name});
    })
    this.initForm();
  }

  ngOnDestroy(): void {
    this.userSubs.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['stateForm'] && changes['stateForm'].currentValue){
      const action = this.currentUser ? 'Editar' : 'Crear';
      this.titleForm = `${action} Usuario`;
    }
  }

  initForm(){
    this.formUser = this.fb.group({
      name: ['', [Validators.required]],
      job: ['', [Validators.required]],
    });
  }

  submitForm(){
    if(this.currentUser){
      this.updateUser();
    }else{
      this.createUser();
    }
  }

  updateUser(){
    this.loadingService.openLoader();
    this.userService.updateUser(this.currentUser.id, this.formUser.value).subscribe({
      next: (res) => {
        this.alertService.open('Usuario actualizado correctamente', 'success');
        this.closeForm.emit();
        this.refreshUsers.emit();
        this.loadingService.closeLoader();
      },
      error: (err) => {
        if(err.error) this.alertService.open(err.error.error, 'error');       
        this.loadingService.closeLoader();
      }
    });
  }

  createUser(){
    this.loadingService.openLoader();
    this.userService.createUser(this.formUser.value).subscribe({
      next: (res) => {
        this.alertService.open('Usuario creado correctamente', 'success');
        this.closeForm.emit();
        this.refreshUsers.emit();
        this.loadingService.closeLoader();
      },
      error: (err) => {
        if(err.error) this.alertService.open(err.error.error, 'error');       
        this.loadingService.closeLoader();
      }
    });
  }

}
