import { Component, OnInit } from '@angular/core';
import { AuthService } from '@shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string;
  emailUser: string;

  constructor(
    private authService: AuthService,
  ) {
    this.emailUser = this.authService.getEmailStorage();
    this.title = 'Dashboard';
  }
  
  ngOnInit(): void {
    
  }

  logout(){
    this.authService.logout();
  }

}
