import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/auth.service';
import { AlertMessageService } from '@shared/states/alert-message.service';
import { LoadingService } from '@shared/states/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  hidePwd: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loadingService: LoadingService,
    private authService: AuthService,
    private alertService: AlertMessageService,
  ) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  login(){
    this.loadingService.openLoader();
    const data = this.formLogin.value;
    this.authService.login(data).subscribe({
      next: (res) => {
        this.loadingService.closeLoader(); 
        this.authService.setTokenStorage(res.token);
        this.authService.setEmailStorage(data.email);
        this.router.navigate(['/dashboard/']);        
      },
      error: (err) => {
        if(err.error) this.alertService.open(err.error.error, 'error');       
        this.loadingService.closeLoader();
      }
    });
  }
  
}
