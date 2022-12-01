import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private subject = new Subject<any>();
  constructor() { }

  openLoader() {
    this.subject.next(true);
  }

  closeLoader(timer: number = 0) {
    setTimeout(() => {
      this.subject.next(false);
    }, timer);
  }

  getLoader(): Observable<any> {
    return this.subject.asObservable();
  }

}
