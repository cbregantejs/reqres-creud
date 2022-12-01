import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { UserRequest } from '@shared/interfaces/UserRequest';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getUsers(page: number): Observable<any> {
    const url = `${environment.API_URL}/users?page=${page}&per_page=10`;
    return this.http.get<any>(url, this.httpOptions);
  }

  deleteuser(id: number): Observable<any> {
    const url = `${environment.API_URL}/users/${id}`;
    return this.http.delete<any>(url, this.httpOptions);
  }

  createUser(data: UserRequest): Observable<any> {
    const url = `${environment.API_URL}/users`;
    return this.http.post<any>(url, data, this.httpOptions);
  }

  updateUser(id: number, data: UserRequest): Observable<any> {
    const url = `${environment.API_URL}/users/${id}`;
    return this.http.put<any>(url, data, this.httpOptions);
  }

}