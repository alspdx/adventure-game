import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user-start',
  templateUrl: './user-start.component.html',
  styleUrls: ['./user-start.component.css']
})

export class UserStartComponent {
  user: User;

  createNewUser(name) {
    this.user = new User(name);
  }

}
