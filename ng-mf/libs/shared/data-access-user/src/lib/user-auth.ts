import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class User {}
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserAuth {
  private isUserLoggedIn = new BehaviorSubject(false);
  isUserLoggedIn$ = this.isUserLoggedIn.asObservable();

  checkCredentials(username: string, password: string) {
    if (username === 'demo' && password === 'demo') {
      this.isUserLoggedIn.next(true);
    }
  }

  logout() {
    this.isUserLoggedIn.next(false);
  }
}
