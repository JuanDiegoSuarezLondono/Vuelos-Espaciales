import { Component, OnInit } from '@angular/core';
import { GetAllUsersUseCase } from 'src/app/user/application/use_case_user/get-all-users.usecase';
import { UserResponse } from 'src/app/user/domain/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : UserResponse[] = [];

  constructor(private getAllUsers:GetAllUsersUseCase) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.getAllUsers.getAllUsers()
    .subscribe(users => {
      this.users = users;
    });
  }

}
