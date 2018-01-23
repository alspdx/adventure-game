import { Injectable } from '@angular/core';
import { User } from './user.model';
import { mockUser } from './mock-user';

@Injectable()
export class UserService {

  getUser() {
    return mockUser;
  }

}
