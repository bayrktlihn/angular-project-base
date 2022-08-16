import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../models/user.model';

const SESSION_USER_KEY = 'user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  login(username: string, password: string): boolean {
    if (username === 'username' && password === 'password') {
      const user = {
        username,
        token: uuidv4(),
        roles: ['Admin1', 'Admin2'],
      };
      sessionStorage.setItem(SESSION_USER_KEY, JSON.stringify(user));
      return true;
    }
    return false;
  }

  getUser(): User | null {
    const userJsonString = sessionStorage.getItem(SESSION_USER_KEY);
    return userJsonString === null ? null : JSON.parse(userJsonString);
  }
}
