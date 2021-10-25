import { Component, OnInit } from '@angular/core';
import { UserResponse } from 'src/app/core/models/user.model';
import { UsersService } from 'src/app/core/service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : UserResponse[] = [];

  constructor(private userServ:UsersService) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.userServ.getAllUsers()
    .subscribe(users => {
      this.users = users;
    });
  }

}
