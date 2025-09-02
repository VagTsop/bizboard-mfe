import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly _isLoggedIn = new BehaviorSubject<boolean>(false);
  readonly isUserLoggedIn$: Observable<boolean> =
    this._isLoggedIn.asObservable();

  checkCredentials(username: string, password: string) {
    this._isLoggedIn.next(Boolean(username && password)); // stub
  }
}
