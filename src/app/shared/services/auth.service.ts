import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import {Router} from '@angular/router';
import { LoginRequest } from '@shared/interfaces/LoginRequest';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  login(data: LoginRequest): Observable<any> {
    const url = `${environment.API_URL}/login/`;
    return this.http.post<any>(url, data, this.httpOptions);
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('email_access');
    this.router.navigate(['/']);
  }

  isLogged() {
    return this.getTokenStorage() ? true : false;
  }

  setTokenStorage(token: string) {
    localStorage.setItem('access_token', token);
  }

  getTokenStorage() {
    const token = localStorage.getItem('access_token');
    return token || '';
  }

  setEmailStorage(email: string) {
    localStorage.setItem('email_access', email);
  }

  getEmailStorage() {
    const email = localStorage.getItem('email_access')
    return email || '';
  }
}