import { Injectable } from '@angular/core';
import { User } from '@shared/interfaces/User';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {
  private subject = new Subject<User>();
  constructor() { }

  setUser(user: User) {
    this.subject.next(user);
  }

  clearUser() {
    this.subject.next(null);
  }

  getUser(): Observable<User> {
    return this.subject.asObservable();
  }

}
