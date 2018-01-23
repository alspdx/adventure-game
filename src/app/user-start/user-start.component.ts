import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-start',
  templateUrl: './user-start.component.html',
  styleUrls: ['./user-start.component.css'],
  providers: [UserService]
})

export class UserStartComponent implements OnInit {
  user: User;

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.user = this.userService.getUser();
  }

  setUserName(nameToSet) {
    this.user.name = nameToSet;
    this.router.navigate(['introduction']);
    //router navigates to "introduction" component html
  }

  goToDepartment(departmentToGoTo) {
    this.router.navigate([departmentToGoTo]);
  }

}
